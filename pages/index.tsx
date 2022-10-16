/** @format */

import type { NextPage } from "next";
import { HomeComponent, NavbarComponent } from "../components";

const Home: NextPage = () => {
  return (
    <NavbarComponent>
      <HomeComponent />
    </NavbarComponent>
  );
};

export default Home;
