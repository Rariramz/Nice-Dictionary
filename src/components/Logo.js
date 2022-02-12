import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { Typography, Box, Paper } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import note from "../images/note.png";
import { useDispatch } from "react-redux";
import { clearAll } from "../toolkitRedux/dictionarySlice";

const RotatedPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  transform: "rotate(-10deg)",
  height: "190px",
  width: "190px",
  position: "absolute",
  top: "30px",
  right: "50px",
  zIndex: "100",
}));
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `Url(${note})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  transform: "rotate(3deg)",
  height: "214px",
  width: "214px",
  marginTop: "-13px",
}));
const RotatedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  transform: "rotate(-3deg)",
  height: "200px",
  width: "200px",
}));

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoOnClick = () => {
    dispatch(clearAll());
    navigate("/");
  };

  return (
    <RotatedPaper elevation={12}>
      <StyledBox>
        <RotatedBox>
          <Typography
            style={{ cursor: "pointer" }}
            variant="accentSmall"
            onClick={handleLogoOnClick}
          >
            Nice Dictionary
          </Typography>
        </RotatedBox>
      </StyledBox>
    </RotatedPaper>
  );
};

export default Logo;
