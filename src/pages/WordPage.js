import React, { useEffect } from "react";
import Result from "../components/Result";
import texture from "../images/texture.jpg";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../toolkitRedux/dictionarySlice";

const ContainerImage = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundImage: `Url(${texture})`,
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  width: "100%",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: "80%",
  minWidth: "30%",
  padding: theme.spacing(5, 10),
  margin: "1vw",
  boxSizing: "border-box",
  borderRadius: 3,
  backdropFilter: "blur(0px)",
  background: theme.palette.secondary.light,
}));

const WordPage = () => {
  const { word } = useParams();
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(fetchData(word));
  }, []);

  return (
    <ContainerImage>
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <StyledPaper>
          <Result />
        </StyledPaper>
      </Grid>
    </ContainerImage>
  );
};

export default WordPage;
