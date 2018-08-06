import React, { Component } from "react";
import { MDXProvider } from "@mdx-js/tag";
//import { Container, Provider as RebassProvider } from "rebass";
import createComponents from "@rebass/markdown";
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import {
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Card,
  Menu,
  Popover,
  MenuItem,
  Classes
} from "@blueprintjs/core";
import Hello from "./hello.md";

const Test = () => (
  <div>
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>PerfectStack</NavbarHeading>
      </NavbarGroup>
    </Navbar>
    <Navbar>
      <NavbarGroup>
        <Button className={Classes.MINIMAL} icon="home" text="Home" />
        <Popover
          content={
            <Menu>
              <MenuItem icon="git-branch" text="Git" />
              <MenuItem icon="globe" text="Http" />
              <MenuItem icon="compressed" text="Npm" />
            </Menu>
          }
        >
          <Button className={Classes.MINIMAL} icon="manual" text="Base" />
        </Popover>
        <Popover
          content={
            <Menu>
              <MenuItem icon="compressed" text="Html" />
              <MenuItem icon="compressed" text="Css" />
              <MenuItem icon="compressed" text="Javascript">
                <MenuItem icon="badge" text="React" />
                <MenuItem icon="badge" text="Mobx" />
                <MenuItem icon="globe" text="React Router" />
                <MenuItem icon="globe" text="FormState" />
                <MenuItem icon="globe" text="Typescript" />
                <MenuItem icon="globe" text="Axios" />
                <MenuItem icon="globe" text="Moment" />
              </MenuItem>
            </Menu>
          }
        >
          <Button className={Classes.MINIMAL} icon="code" text="Front" />
        </Popover>
        <Popover
          content={
            <Menu>
              <MenuItem icon="globe" text="NodeJs" />
            </Menu>
          }
        >
          <Button className={Classes.MINIMAL} icon="database" text="Back" />
        </Popover>
        <Popover
          content={
            <Menu>
              <MenuItem icon="globe" text="react Native" />
              <MenuItem icon="globe" text="React Native Dom" />
            </Menu>
          }
        >
          <Button
            className={Classes.MINIMAL}
            icon="mobile-phone"
            text="Mobiles"
          />
        </Popover>
      </NavbarGroup>
    </Navbar>
    <Card>
      <h1>Welcome On Perfect Stack</h1>
      <p>
        this my opinion bests tool of the moment fo to make greats web or native
        application.
      </p>
      <p> This is tools I use almost every days </p>
      <p>
        I use this site to make experimentation and improve my skill alway at
        the research of perfect stack or almost ;-){" "}
      </p>
      <p>Have a nice Code {`</>`} </p>
      <Hello />
    </Card>
  </div>
);

class App extends Component {
  render() {
    return (
      <MDXProvider components={createComponents()}>
        <Test />
      </MDXProvider>
    );
  }
}

export default App;
