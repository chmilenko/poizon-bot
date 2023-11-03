import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../../Components/Button/Button";

function Main(): JSX.Element {
  const { onToggleButton } = useTelegram();
  return <Button onClick={onToggleButton}>Toggle</Button>;
}

export default Main;
