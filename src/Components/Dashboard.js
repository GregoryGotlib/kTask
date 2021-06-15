import React, { useState } from "react";
import * as Style from "./style";
import NameForm from "./NameForm";

function Dashboard() {
  return (
    <Style.Container>
      <NameForm />
    </Style.Container>
  );
}

export default Dashboard;
