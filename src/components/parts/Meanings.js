import { Typography, Grid, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Definitions from "./Definitions";

const Meanings = () => {
  const { response } = useSelector((state) => state.dictionary);
  return (
    <Grid container item flexDirection="column" spacing={3}>
      {response.map((val) =>
        val.meanings.map((means) => (
          <Grid item container spacing={1} flexDirection="column">
            <Grid item>
              <Typography variant="body2">
                <b>Part of speech:</b> <i>{means.partOfSpeech}</i>
              </Typography>
            </Grid>
            <Grid item style={{ marginInlineStart: "10px" }}>
              <Definitions defs={means.definitions} />
            </Grid>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Meanings;
