'use client'
import CustomLayout from "@/components/CustomLayout/CustomLayout";
import CreateTodo from "@/components/TodoComponents/CreateTodo/CreateTodo";
import { Box, List, Typography } from "@mui/material";
import classes from "./page.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import ConfirmBox from "@/components/TodoComponents/ConfirmBox/ConfirmBox";

const MListItem = dynamic(() => import("@/components/muiComponents/MListItem.tsx/MListItem"), { ssr: false })

const tempData = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4
  },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48
  },
  {
    id: 5,
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 31
  },
  {
    id: 8,
    todo: "Write a thank you letter to an influential person in your life",
    completed: true,
    userId: 13
  },
  {
    id: 9,
    todo: "Invite some friends over for a game night",
    completed: false,
    userId: 47
  },
  {
    id: 10,
    todo: "Have a football scrimmage with some friends",
    completed: false,
    userId: 19
  },
  {
    id: 11,
    todo: "Text a friend you haven't talked to in a long time",
    completed: false,
    userId: 39
  },
  {
    id: 12,
    todo: "Organize your pantry",
    completed: true,
    userId: 39
  },
  {
    id: 13,
    todo: "Buy a new house decoration",
    completed: false,
    userId: 16
  },
  {
    id: 14,
    todo: "Plan a vacation you've always wanted to take",
    completed: false,
    userId: 28
  },
]

interface ConfirmBoxState {
  delete: boolean;
  edit: boolean;
}

export default function Home() {

  const [confirmBox, setConfirmBox] = useState<ConfirmBoxState>({ delete: false, edit: false })

  const handleCancel = () => {
    setConfirmBox({ delete: false, edit: false });
  }

  const handleDelete = () => {
    alert('delete')
  }

  const handleEdit = () => {
    alert('edit')

  }

  const handleTodoClick = (clickType: string) => {
    setConfirmBox(prevState => ({ ...prevState, [clickType]: true }))
  }

  return (
    <main>
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
              >
                No tasks available. Add some tasks!
              </Typography>
              <List classes={{ root: classes.listItemContainer }} sx={{ mb: '2rem', p: { xs: '0.25rem', sm: '1rem 2rem 1rem' } }} >
                {tempData.map((todo) =>
                  <MListItem key={todo.id} todo={todo} handleTodoClick={handleTodoClick} />
                )}
              </List>
            </Box>
          </Box>
        </div>
        <ConfirmBox
          title="Confirm Delete"
          message="message"
          open={confirmBox.delete}
          cancelHandler={handleCancel}
          confirmHandler={handleDelete}
        />

        <ConfirmBox
          title="Edit Todo"
          message="message"
          open={confirmBox.edit}
          cancelHandler={handleCancel}
          confirmHandler={handleEdit}
        />
      </CustomLayout>
    </main>
  );
}
