import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { Typography, Box, Paper } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import note from "../images/note.png";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundImage: `Url(${note})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  padding: "17px 0 0 6px",
  height: "200px",
  width: "200px",
  top: "10px",
  right: "50px",
}));
const RotatedPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  transform: "rotate(-3deg)",
  background: "transparent",
  height: "182px",
  width: "195px",
}));
const LogoTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Lobster Two",
  color: theme.palette.primary.main,
  fontSize: 26,
  lineHeight: 1,
}));

const Logo = () => {
  return (
    <StyledBox>
      <RotatedPaper elevation={12}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoTypography>Nice Dictionary</LogoTypography>
        </Link>
      </RotatedPaper>
    </StyledBox>
  );
};

export default Logo;
