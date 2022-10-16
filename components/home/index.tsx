/** @format */

import { Text, Avatar, Grid } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { E_STATUS, I_TODO } from "./home.types";
import { TaskList } from "./task-list";
import { _tasks } from "./tasks";
{
  /* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */
}
export const HomeComponent: NextPage = () => {
  const [tasks, setTasks] = useState<I_TODO[]>([]);
  useEffect(() => {
    if (
      localStorage.getItem("tasks") &&
      localStorage.getItem("tasks")?.trim() != "" &&
      JSON.parse(localStorage.getItem("tasks") || "[]")
    ) {
      setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
    }

    setTasks(_tasks);
  }, []);
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <TaskList tasks={tasks} />
      </Grid>
    </Grid.Container>
  );
};
