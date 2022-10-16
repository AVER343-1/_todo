/** @format */

import React, { ReactNode } from "react";

export interface I_TODO {
  task: {
    title: ReactNode;
    description: ReactNode;
    added_on: Date;
    complete_by?: Date;
    subtitle?: ReactNode;
    added_by: any; // user object || user_id
  };
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
