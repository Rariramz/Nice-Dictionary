import React from "react";
import { Box, Typography } from "@mui/material";

const Definitions = ({ defs }) => {
  return (
    <>
      {defs.map((def) => (
        <Box>
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
        </Box>
      ))}
    </>
  );
};

export default Definitions;
