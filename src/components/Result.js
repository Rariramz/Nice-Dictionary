import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Meanings from "./Meanings";

const Result = () => {
  const { response } = useSelector((state) => state.dictionary);
  return (
    <Box>
      <Meanings />
    </Box>
  );
};

export default Result;
