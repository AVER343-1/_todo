/** @format */

import { I_Task } from "../components/home/home.types";
import prisma from "./prisma";

// READ
export const getAllTasks = async () => {
  let tasks: any = await prisma.tasks.findMany({});
  tasks = tasks.map((e: I_Task) => ({
    ...e,
    created_at: e.created_at.toISOString(),
    updated_at: e.updated_at.toISOString(),
  }));
  return tasks;
};

export const getUser = async (id: string) => {
  const user = await prisma.tasks.findUnique({
    where: { id },
  });
  return user;
};
