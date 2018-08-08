import React from "react";

import { Button, Menu, Popover, MenuItem, Classes } from "@blueprintjs/core";

const Front = () => (
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
);

export default Front;
