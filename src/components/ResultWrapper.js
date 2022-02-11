import React, { useEffect } from "react";
import Result from "./Result";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../toolkitRedux/dictionarySlice";

const ResultWrapper = () => {
  const { word, response, status, error } = useSelector(
    (state) => state.dictionary
  );
  const dispatch = useDispatch();

  useEffect(async () => {
    if (word.length) {
      dispatch(fetchData(word));
    }
  }, []);

  return (
    <Box>
      {status === "loading" && <Typography>LOADING</Typography>}
      {error && <Typography>ERROR ocured: {error}</Typography>}
      {response && <Result />}
    </Box>
  );
};

export default ResultWrapper;
