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
import { authToken, currentUser } from "@/store/slices/selectors/user.selector";
import { SingleTodo, setTodos } from "@/store/slices/todoSlice";
import { toaster } from "@/utils/helpers/toaster";
import { getUsersTodoListApi } from "@/apis/todos/todoApis";
import { useRouter } from "next/navigation";
import { URL_SIGN_IN } from "@/utils/routes-path";
import { todosList } from "@/store/slices/selectors/todo.selector";

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

  useEffect(() => {
    setLoading(true)
    if (user && user.id) {
      getUsersTodoListApi(user.id)
        .then(res => {
          console.log('API response:', res);
          dispatch(setTodos(res?.data))
          setLoading(false)
        })
        .catch(err => {
          console.error('API error:', err);
          toaster.show('error', 'Failed to fetch todos');
          setLoading(false)
        });
    } else {
      router.push(URL_SIGN_IN)
    }
  }, []);



  const handleCancel = () => {
    setConfirmBox({ delete: false, edit: false });
  }

  const handleDelete = () => {
    if (selected) {
      // const updatedTodoList = todoList.filter(item => item.id !== selected.id);
      // setTodoList(updatedTodoList);
      // setConfirmBox({ delete: false, edit: false });
      // setSelected(null);
    }
  }

  const handleEditConfirm = () => {
    if (selected) {
      // const updatedTodoList = todoList.map(item =>
      //   item.id === selected.id ? { ...item, todo: "text updated" } : item

      // );
      // // console.log(updatedTodoList)
      // setTodoList(updatedTodoList);
      // setConfirmBox({ delete: false, edit: false });
      // setSelected(null);
    }
  }

  const handleTodoClick = (clickType: string, todoId: number) => {
    if (clickType === 'check') {
    //   const updatedTodoList = todoList.map(item =>
    //     item.id === todoId ? { ...item, completed: !item.completed } : item
    //   );
    //   setTodoList(updatedTodoList);
    // } else {
    //   setConfirmBox(prevState => ({ ...prevState, [clickType]: true }))
    //   const selectedItem = todoList.find(item => item.id === todoId);
    //   setSelected(selectedItem || null);
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
                No tasks available. Add some tasks!
              </Typography>
              {/* handle different view */}
              {/* All Todos */}
              {/* Completed */}
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
          // selectedTodoId={selected?.id}
          selectedTodo={selected}
          open={confirmBox.edit}
          cancelHandler={handleCancel}
          confirmHandler={handleEditConfirm}
        />
      </CustomLayout>
    </main>
  );
}
