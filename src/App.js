import React, { Component } from "react";
import { MDXProvider } from "@mdx-js/tag";
import createComponents from "@rebass/markdown";
import Base from "./navigation/Base";
import Front from "./navigation/Front";
import Back from "./navigation/Back";
import Mobile from "./navigation/Mobile";
import { Route, withRouter } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Card,
  Classes
} from "@blueprintjs/core";

import Introduction from "./documentation/introduction.md";
import Git from "./documentation/git.md";
import Markdown from "./documentation/introduction.md";

const Website = withRouter(({ history }) => (
  <div>
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>PerfectStack</NavbarHeading>
      </NavbarGroup>
    </Navbar>
    <Navbar>
      <NavbarGroup>
        <Button
          className={Classes.MINIMAL}
          icon="home"
          text="Home"
          onClick={e => {
            history.push("/");
          }}
        />
        <Base />
        <Front />
        <Back />
        <Mobile />
      </NavbarGroup>
    </Navbar>
    <Card>
      <Route path="/" exact component={Introduction} />
      <Route path="/git" component={Git} />
      <Route path="/markdown" component={Markdown} />
    </Card>
  </div>
));

class App extends Component {
  render() {
    return (
      <MDXProvider components={createComponents()}>
        <Website />
      </MDXProvider>
    );
  }
}

export default withRouter(App);
