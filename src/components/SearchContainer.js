import React, { useState } from "react";
import background from "../images/b10.jpg";
import texture from "../images/texture.jpg";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Button, Typography, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../toolkitRedux/dictionarySlice";
import { useNavigate } from "react-router-dom";

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
  margin: "2vh",
  boxSizing: "border-box",
  borderRadius: 3,
  backdropFilter: "blur(0px)",
  background: theme.palette.secondary.light,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: 5,
  outline: `5px dotted ${theme.palette.secondary.dark}`,
  minWidth: "300px",
  margin: theme.spacing(3),
}));

const SearchContainer = () => {
  const storeWord = useSelector((state) => state.dictionary.word);
  const [currentWord, setCurrentWord] = useState(storeWord);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (currentWord.trim().length) {
      dispatch(setWord(currentWord.trim()));
      navigate(`/${currentWord}`);
    }
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };
  const handleInputOnChange = (e) => {
    setCurrentWord(e.target.value);
  };

  return (
    <ContainerImage>
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ minHeight: "100vh", marginTop: "-30px" }}
      >
        <BackgroundPaperImage>
          <StyledPaper elevation={3}>
            <Typography variant="accentBig" noWrap>
              Let's find out!
            </Typography>
            <StyledTextField
              id="searchButton"
              placeholder="Search..."
              maxwidth="true"
              value={currentWord}
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
            />
            <Button
              onClick={handleButtonClick}
              style={{ alignSelf: "flex-end" }}
            >
              <CheckIcon color="success" fontSize="large" />
            </Button>
          </StyledPaper>
        </BackgroundPaperImage>
      </Grid>
    </ContainerImage>
  );
};

export default SearchContainer;
