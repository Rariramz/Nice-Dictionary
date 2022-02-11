import React from "react";
import Logo from "../components/Logo";
import texture from "../images/texture.jpg";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import Result from "../components/Result";

const ContainerImage = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `Url(${texture})`,
  backgroundRepeat: "repeat",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "80vw",
  minWidth: "20vw",
  padding: theme.spacing(5, 10),
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
        style={{ minHeight: "100vh", minWidth: "80vh" }}
      >
        <StyledPaper>
          <Result />
        </StyledPaper>
      </Grid>
    </ContainerImage>
  );
};

export default WordPage;
