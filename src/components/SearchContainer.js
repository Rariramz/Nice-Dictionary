import React from "react";
import Logo from "./Logo";
import background from "../images/b10.jpg";
import texture from "../images/texture.jpg";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ContainerImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `Url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "fixed",
}));

const BackgroundPaperImage = styled(Box)(({ theme }) => ({
  backgroundImage: `Url(${texture})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  boxShadow: "-77px 57px 70px -9px rgb(190, 186, 183)",
  border: "4px inset",
  boxSizing: "border-box",
  borderTopColor: "rgba(219,175,139,0.7)",
  borderLeftColor: "rgba(142,103,72,0.7)",
  borderRightColor: "rgba(218,185,156,0.7)",
  borderBottomColor: "rgba(131,87,52,0.7)",
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
  padding: theme.spacing(5, 10),
  margin: "1vw",
  boxSizing: "border-box",
  borderRadius: 3,
  backdropFilter: "blur(0px)",
  background: theme.palette.secondary.light,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  padding: 0,
  margin: 0,
  background: theme.palette.secondary.main,
  borderRadius: 5,
  outline: `5px dotted ${theme.palette.secondary.dark}`,
  minWidth: "300px",
  margin: theme.spacing(3),
}));

const SearchContainer = () => {
  return (
    <ContainerImage>
      <Logo />
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <BackgroundPaperImage>
          <StyledPaper elevation={3}>
            <Typography variant="h4" noWrap>
              Let's find out!
            </Typography>
            <StyledTextField
              id="searchButton"
              placeholder="Search..."
              maxwidth="true"
            />
            <Button>
              <CheckIcon color="success" fontSize="large" />
            </Button>
          </StyledPaper>
        </BackgroundPaperImage>
      </Grid>
    </ContainerImage>
  );
};

export default SearchContainer;