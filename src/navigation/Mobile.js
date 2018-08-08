import React from "react";

import { Button, Menu, Popover, MenuItem, Classes } from "@blueprintjs/core";

const Mobile = () => (
  <Popover
    content={
      <Menu>
        <MenuItem icon="globe" text="react Native" />
        <MenuItem icon="globe" text="React Native Dom" />
      </Menu>
    }
  >
    <Button className={Classes.MINIMAL} icon="mobile-phone" text="Mobiles" />
  </Popover>
);

export default Mobile;
