import CustomLayout from "@/components/CustomLayout/CustomLayout";
import CreateTodo from "@/components/TodoComponents/CreateTodo/CreateTodo";
import { Box, List, ListItem, Typography } from "@mui/material";
import classes from "./page.module.css";
import BoxContainer from "@/components/muiComponents/BoxContainer/BoxContainer";

export default function Home() {
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
          <Box component={'div'} width={'100%'} display={'flex'} justifyContent={'center'}>
            <Box sx={{ width: { xs: '100%', sm: '90%', md: '80%' }, pt: '2rem' }}>
              <Typography
                variant="h5"
                fontSize={{ xs: '1rem', sm: '1.5rem' }}
                className={classes.darkContainer}
                mb={'1rem'}
                textAlign={'center'}
                pb={1}
                color="whitesmoke"
              >
                No tasks available. Add some tasks!
              </Typography>
              <List classes={{ root: classes.listContainer }} sx={{ mb: '2rem' }} >
                <ListItem>
                  temp 1
                </ListItem>
                <ListItem>
                  temp 2
                </ListItem>
                <ListItem>
                  temp 3
                </ListItem>
              </List>
            </Box>
          </Box>
        </div>
      </CustomLayout>
    </main>
  );
}
