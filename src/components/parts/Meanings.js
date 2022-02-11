import { Typography, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Definitions from "./Definitions";

const Meanings = () => {
  const { response } = useSelector((state) => state.dictionary);
  return response.map((val) =>
    val.meanings.map((means) => (
      <Grid container item flexDirection="column" spacing={2}>
        <Grid item>
          <Typography variant="body2">
            <b>Part of speech:</b> <i>{means.partOfSpeech}</i>
          </Typography>
          <Definitions defs={means.definitions} />
        </Grid>
      </Grid>
    ))
  );
};

export default Meanings;
