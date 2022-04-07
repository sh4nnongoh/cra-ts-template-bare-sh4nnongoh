import React, { FC, ReactElement } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./Home.css";
const Home: FC = (): ReactElement => (
  <>
    <Logo className="home-logo" />
    <p>
      Edit
      {" "}
      <code>src/Home.tsx</code>
      {" "}
      and save to reload.
    </p>
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </>
);
export default Home;
