'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import FullPageLoader from "./loading";
import classes from "./page.module.css";

import CustomLayout from "@/components/CustomLayout/CustomLayout";
import CreateTodo from "@/components/TodoComponents/CreateTodo/CreateTodo";
import ConfirmBox from "@/components/TodoComponents/ConfirmBox/ConfirmBox";
import UpdateTodoBox from "@/components/TodoComponents/UpdateTodoBox/UpdateTodoBox";
import ListContainer from "@/components/TodoComponents/ListContainer/ListContainer";

import { currentUser } from "@/store/slices/selectors/user.selector";
import { SingleTodo, deleteTodo, setTodos, updateTodo } from "@/store/slices/todoSlice";
import { deleteTodoApi, getUsersTodoListApi, updateTodoApi } from "@/apis/todos/todoApis";

import { URL_SIGN_IN } from "@/utils/routes-path";
import { toaster } from "@/utils/helpers/toaster";
import { ERR_TODO_CANNOT_EMPTY, ERR_TODO_UPDATED, TODO_DELETED, TODO_UPDATED } from "@/utils/constants/messages";
import { containsOnlySpaces } from "@/utils/helpers/helpers";


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
              <ListContainer handleTodoClick={handleTodoClick} />
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
