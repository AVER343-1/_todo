/** @format */

import type { NextPage } from "next";
import { useEffect } from "react";
import { HomeComponent, NavbarComponent } from "../components";
import { I_Task } from "../components/home/home.types";
import { getAllTasks } from "../prisma/tasks";

const Home: NextPage = ({ tasks }: { tasks?: I_Task[] }) => {
  return (
    <NavbarComponent>
      <HomeComponent tasks={tasks || []} />
    </NavbarComponent>
  );
};
export const getServerSideProps = async ({ req }: any) => {
  let tasks = await getAllTasks();

  // Convert the updatedAt and createdAt in each user to string
  // Otherwise, Next.js will throw an error
  // Not required if you are not using the date fields

  return { props: { tasks } };
};

export default Home;
