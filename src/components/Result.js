import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Meanings from "./parts/Meanings";
import Phonetics from "./parts/Phonetics";

const Result = () => {
  const { response, status, error } = useSelector((state) => state.dictionary);

  return (
    <Box>
      {status === "loading" && <Typography>LOADING</Typography>}
      {error && <Typography>ERROR ocured: {error}</Typography>}
      {response &&
        response.map((val) => (
          <Grid
            container
            container
            flexDirection="column"
            alignContent="center"
            justifyContent="left"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h4" textAlign="center">
                "<b>{val.word}</b>"
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
              <Typography variant="body1">
                <b>Phonetic:</b> [<i>{val.phonetic}</i>]
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
              <Phonetics phons={val.phonetics} />
            </Grid>
            <Grid item>
              <Divider />
              <Typography variant="body1">
                <b>Origin:</b> <i>{val.origin}</i>
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
              <Meanings />
            </Grid>
          </Grid>
        ))}
    </Box>
  );
};

export default Result;
