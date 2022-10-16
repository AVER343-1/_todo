/** @format */

import React, { Key, ReactNode } from "react";
export interface I_Task {
  id: Key;
  title: ReactNode;
  description: ReactNode;
  created_at: String;
  updated_at: String;
  complete_by?: Date;
  subtitle?: ReactNode;
  added_by: any; // user object || user_id
}
export interface I_TODO {
  task: I_Task;
  contentLeft?: {
    src: string;
    bordered?: boolean;
    squared?: boolean;
  };
  status: E_STATUS;
}
export enum E_STATUS {
  COMPLETED = "COMPLETED",
  INCOMPLETE = "INCOMPLETE",
  DELETE = "DELETED",
  ONGOING = "ONGOING",
  POSTPONE = "POSTPONE",
}
