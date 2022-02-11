import React from "react";
import Logo from "../components/Logo";
import texture from "../images/texture.jpg";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import ResultWrapper from "../components/ResultWrapper";

const ContainerImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `Url(${texture})`,
  backgroundRepeat: "repeat",
  position: "fixed",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "80vw",
  minWidth: "20vw",
  maxHeight: "80vh",
  minHeight: "30vh",
  padding: theme.spacing(15, 25),
  margin: "1vw",
  boxSizing: "border-box",
  borderRadius: 3,
  backdropFilter: "blur(0px)",
  background: theme.palette.secondary.light,
}));

const WordPage = () => {
  return (
    <ContainerImage>
      <Logo />
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <StyledPaper>
          <ResultWrapper />
        </StyledPaper>
      </Grid>
    </ContainerImage>
  );
};

export default WordPage;
