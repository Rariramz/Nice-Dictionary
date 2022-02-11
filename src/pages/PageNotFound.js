import React from "react";
import background from "../images/b2.jpg";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const ContainerImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `Url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "fixed",
}));

const PageNotFound = () => {
  const error = useSelector((state) => state.dictionary.error);
  console.log(error);

  return (
    <ContainerImage>
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8}>
          <Typography variant="h4">Page not found :(</Typography>
        </Grid>
      </Grid>
    </ContainerImage>
  );
};

export default PageNotFound;
