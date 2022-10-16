/** @format */

import { Avatar, Text } from "@nextui-org/react";
import { E_STATUS, I_TODO } from "./home.types";

export const _tasks: I_TODO[] = [
  {
    task: {
      added_by: "Ankush Verma",
      added_on: new Date(),
      complete_by: new Date(10, 21, 2022),
      title: "Talking to Kattu",
      description: `Singing 'Chota sa kattu , pyala sa kattu , mera yeh kattu , kattu o kattu , sexy sa kattu , seducing sa kattu , kattu re kattu ...' `,
    },
    status: E_STATUS.INCOMPLETE,
  },
  {
    task: {
      added_by: "Ankush Verma",
      added_on: new Date(),
      complete_by: new Date(10, 21, 2022),
      title: "Annoying my Kattu",
      description: `Singing 'Chota sa kattu , pyala sa kattu , mera yeh kattu , kattu o kattu , sexy sa kattu , seducing sa kattu , kattu re kattu ...' (annoyed yet??) `,
    },
    status: E_STATUS.INCOMPLETE,
  },
  {
    task: {
      added_by: "Ankush Verma",
      added_on: new Date(),
      complete_by: new Date(10, 23, 2022),
      title: "Meeting my Kattu",
      description: `Finally on 22nd , meeting my Kattu love. (For which , she hopefully has thought of an excuse to get the pass)`,
    },
    contentLeft: {
      src: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
    },
    status: E_STATUS.INCOMPLETE,
  },
  {
    task: {
      added_by: "Ankush Verma",
      added_on: new Date(),
      complete_by: new Date(10, 23, 2022),
      title: "Movie with my Kattu",
      description: `Also on 22nd ,watching "Hari puttar" with Kattu .`,
    },
    contentLeft: {
      src: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
    },
    status: E_STATUS.INCOMPLETE,
  },
];
