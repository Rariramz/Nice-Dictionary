import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import AudioPlayer from "material-ui-audio-player";

const Phonetics = ({ phons }) => {
  return phons.map((el) => (
    <Grid container item flexDirection="column" spacing={0}>
      <Grid item>
        <Typography variant="body1">
          [<i>{el.text}</i>]
        </Typography>
        {el.audio && (
          <AudioPlayer
            elevation={1}
            width="100%"
            variation="secondary"
            spacing={1}
            order="standart"
            preload="auto"
            loop={true}
            volume={false}
            download={false}
            loop={false}
            src={el.audio}
          />
        )}
      </Grid>
    </Grid>
  ));
};

export default Phonetics;
