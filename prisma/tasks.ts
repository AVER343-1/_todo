/** @format */

import { I_Task } from "../components/home/home.types";
import prisma from "./prisma";

// READ
export const getAllTasks = async () => {
  let tasks: any = await prisma.tasks.findMany({});
  tasks = tasks.map((e: I_Task) => ({
    ...e,
    created_at: String(e.created_at),
    updated_at: String(e.updated_at),
  }));
  return tasks;
};

export const getUser = async (id: string) => {
  const user = await prisma.tasks.findUnique({
    where: { id },
  });
  return user;
};
