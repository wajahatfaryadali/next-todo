'use client'
import CustomLayout from "@/components/CustomLayout/CustomLayout";
import CreateTodo from "@/components/TodoComponents/CreateTodo/CreateTodo";
import { Box, List, Typography } from "@mui/material";
import classes from "./page.module.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ConfirmBox from "@/components/TodoComponents/ConfirmBox/ConfirmBox";
import UpdateTodoBox from "@/components/TodoComponents/UpdateTodoBox/UpdateTodoBox";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "@/store/slices/selectors/user.selector";
import { SingleTodo, deleteTodo, setTodos, updateTodo } from "@/store/slices/todoSlice";
import { toaster } from "@/utils/helpers/toaster";
import { deleteTodoApi, getUsersTodoListApi, updateTodoApi } from "@/apis/todos/todoApis";
import { useRouter } from "next/navigation";
import { URL_SIGN_IN } from "@/utils/routes-path";
import { todosList, totalTodos } from "@/store/slices/selectors/todo.selector";
import FullPageLoader from "./loading";
import { ERR_TODO_CANNOT_EMPTY, ERR_TODO_UPDATED, TODO_DELETED, TODO_UPDATED } from "@/utils/constants/messages";
import { containsOnlySpaces } from "@/utils/helpers/helpers";

const MListItem = dynamic(() => import("@/components/muiComponents/MListItem.tsx/MListItem"), { ssr: false })

interface ConfirmBoxState {
  delete: boolean;
  edit: boolean;
}

export default function Home() {

  const [confirmBox, setConfirmBox] = useState<ConfirmBoxState>({ delete: false, edit: false })
  const [selected, setSelected] = useState<SingleTodo | null>(null)
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(currentUser);

  // getting todos from store
  const todos = useSelector(todosList)
  const totalTodosCount = useSelector(totalTodos)

  const getAllTodosApiCall = () => {
    if (user && user.id) {
      getUsersTodoListApi(user.id)
        .then(res => {
          // console.log('API response:', res);
          dispatch(setTodos(res?.data))
          setLoading(false)
        })
        .catch(err => {
          console.error('err setTodo*** ', err);
          toaster.show('error', 'Failed to fetch todos');
          setLoading(false)
        });
    } else {
      router.push(URL_SIGN_IN)
    }
  }

  useEffect(() => {
    setLoading(true)
    getAllTodosApiCall()
  }, []);

  const handleCancel = () => {
    setConfirmBox({ delete: false, edit: false });
  }

  const hanldeUpdateTodoApiCall = async (todo: SingleTodo) => {
    setLoading(true)
    updateTodoApi(todo).then(res => {
      setLoading(false)
      dispatch(updateTodo(res.data));
      toaster.show('success', TODO_UPDATED)
    }).catch(err => {
      console.log('err updateTodo***', err)
      toaster.show('error', TODO_UPDATED)
      setLoading(false)
    })
  }

  const handleDelete = () => {
    if (selected) {
      setLoading(true)
      deleteTodoApi(selected.id).then(res => {
        // console.log('res deleteTodo*** ', res);
        dispatch(deleteTodo(res.data))
        toaster.show('success', TODO_DELETED)
        setConfirmBox({ delete: false, edit: false });
        setLoading(false)
      }).catch(err => {
        console.log('err deleteTodo*** ', err);
        toaster.show('error', err);
        setConfirmBox({ delete: false, edit: false });
        setLoading(false)
      })
    }
  }

  const handleEditConfirm = async (updatedText: string) => {
    setConfirmBox({ delete: false, edit: false });
    if (selected) {
      if (containsOnlySpaces(updatedText)) {
        toaster.show('error', ERR_TODO_CANNOT_EMPTY);
      } else {
        const updatedTodo = {
          ...selected,
          todo: updatedText
        }
        hanldeUpdateTodoApiCall(updatedTodo);
      }
    } else {
      toaster.show('error', ERR_TODO_UPDATED)
    }
  }

  const handleTodoClick = (clickType: string, todo: SingleTodo) => {
    if (clickType === 'check') {
      hanldeUpdateTodoApiCall(todo);
    } else {
      setSelected(todo)
      setConfirmBox(prevState => ({ ...prevState, [clickType]: true }))
    }
  }

  return (
    <main className={classes.main}>
      <CustomLayout>
        <div style={{ position: 'relative' }}>
          <Box
            component={'div'}
            className={classes.container}
            top={{ xs: '56px', sm: '64px' }}
          >
            <CreateTodo />
          </Box>
          {/* list container */}
          <Box component={'div'} className={classes.listContainer}>
            <Box sx={{ width: { xs: '100%', sm: '90%', md: '80%' }, pt: '2rem' }}>
              <Typography
                variant="h5"
                fontSize={{ xs: '1rem', sm: '1.5rem' }}
                className={classes.titleContainer}
                mb={'1rem'}
              >
                {totalTodosCount ? `Total Todoz ${totalTodosCount}` : 'No tasks available. Add some tasks!'}
              </Typography>
              <List classes={{ root: classes.listItemContainer }} sx={{ mb: '2rem', p: { xs: '0.25rem', sm: '1rem 2rem 1rem' } }} >
                {todos.map((todo) =>
                  <MListItem key={todo.id} todo={todo} handleTodoClick={handleTodoClick} />
                )}
              </List>
            </Box>
          </Box>
        </div>
        <ConfirmBox
          title="Delete Selected Todo"
          message={selected?.todo ?? ""}
          open={confirmBox.delete}
          cancelHandler={handleCancel}
          confirmHandler={handleDelete}
        />

        <UpdateTodoBox
          selectedTodo={selected}
          open={confirmBox.edit}
          cancelHandler={handleCancel}
          confirmHandler={handleEditConfirm}
        />
        <FullPageLoader loading={loading} />
      </CustomLayout>
    </main>
  );
}
