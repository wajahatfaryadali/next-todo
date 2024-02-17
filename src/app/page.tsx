import CustomLayout from "@/components/CustomLayout/CustomLayout";
import CreateTodo from "@/components/TodoComponents/CreateTodo/CreateTodo";
import { Grid } from "@mui/material";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <CustomLayout>
        <Grid container justifyContent={'center'}>
          <CreateTodo />
        </Grid>
      </CustomLayout>
    </main>
  );
}
