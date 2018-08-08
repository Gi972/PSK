import React from "react";

import { Button, Menu, Popover, MenuItem, Classes } from "@blueprintjs/core";

const Back = () => (
  <Popover
    content={
      <Menu>
        <MenuItem icon="globe" text="NodeJs" />
      </Menu>
    }
  >
    <Button className={Classes.MINIMAL} icon="database" text="Back" />
  </Popover>
);

export default Back;
