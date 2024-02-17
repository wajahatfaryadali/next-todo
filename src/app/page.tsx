import CustomLayout from "@/components/CustomLayout/CustomLayout";
import CreateTodo from "@/components/TodoComponents/CreateTodo/CreateTodo";
import { Box } from "@mui/material";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <CustomLayout>
        <div style={{ position: 'relative' }}>
          <Box component={'div'}
            display={'flex'}
            width={'100%'}
            justifyContent={'center'}
            position={"sticky"}
            top={{ xs: '56px', sm: '64px' }}
          >
            <CreateTodo />
          </Box>
          <>
          list
          </>
        </div>
      </CustomLayout>
    </main>
  );
}
