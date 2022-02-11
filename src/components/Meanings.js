import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const Meanings = () => {
  const { response } = useSelector((state) => state.dictionary);
  return (
    <Box>
      {response.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <>
              <Typography key={def}>{def.example}</Typography>
              <Typography key={def}>{def.definition}</Typography>
            </>
          ))
        )
      )}
    </Box>
  );
};

export default Meanings;
