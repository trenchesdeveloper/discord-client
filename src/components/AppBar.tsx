import { styled } from "@mui/system";
import React from "react";
import ChosenOptionLabel from "./ChosenOptionLabel";
import DropdownMenu from "./DropdownMenu";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "calc(100% - 326px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 15px",
});

const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
