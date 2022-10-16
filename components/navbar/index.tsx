/** @format */

import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { ReactNode } from "react";
import { Layout } from "./Layout";

export function NavbarComponent({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit">
            {`ANKUSH's TODO`}
          </Text>
        </Navbar.Brand>
        <Navbar.Content variant="highlight-rounded">
          <Navbar.Link isActive href="#">
            TODO
          </Navbar.Link>
        </Navbar.Content>
        {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
      </Navbar>
      {children}
    </Layout>
  );
}
