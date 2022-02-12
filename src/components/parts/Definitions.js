import React from "react";
import { Grid, Typography } from "@mui/material";

const Definitions = ({ defs }) => {
  return (
    <Grid container item spacing={1} flexDirection="column">
      {defs.map((def) => (
        <Grid item>
          <Typography variant="body2">
            <b>Definition</b>: <i>{def.definition}</i>
          </Typography>
          <Typography variant="body2">
            <b>Example:</b> <i>{def.example}</i>
          </Typography>
          <Typography variant="body2">
            <b>Synonyms:</b> <i>{def.synonyms.join(", ") || "-"}</i>
          </Typography>
          <Typography variant="body2">
            <b>Antonyms:</b> <i>{def.antonyms.join(", ") || "-"}</i>
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Definitions;
