import React from "react";
import { Button, Menu, Popover, MenuItem, Classes } from "@blueprintjs/core";
import { withRouter } from "react-router-dom";

const Base = ({ history }) => (
  <Popover
    content={
      <Menu>
        <MenuItem
          icon="git-branch"
          text="Git"
          onClick={e => {
            history.push("/git");
          }}
        />
        <MenuItem
          icon="globe"
          text="MarkDown"
          onClick={e => {
            history.push("/markdown");
          }}
        />
        <MenuItem
          icon="compressed"
          text="Npm"
          onClick={e => {
            history.push("/npm");
          }}
        />
      </Menu>
    }
  >
    <Button className={Classes.MINIMAL} icon="manual" text="Base" />
  </Popover>
);

export default withRouter(Base);
