import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import Meanings from "./parts/Meanings";
import Phonetics from "./parts/Phonetics";

const Result = () => {
  const { response, status, error } = useSelector((state) => state.dictionary);

  return (
    <Box>
      {status === "loading" && <CircularProgress />}
      {error ? (
        <Grid
          container
          container
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h4" textAlign="center">
              {error.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{error.message}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{error.resolution}</Typography>
          </Grid>
        </Grid>
      ) : (
        response &&
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
        ))
      )}
    </Box>
  );
};

export default Result;
