import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { Typography, Box, Paper } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import note from "../images/note.png";

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
const LogoTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 26,
  lineHeight: 1,
  zIndex: 11,
}));

const Logo = () => {
  return (
    <RotatedPaper elevation={12}>
      <StyledBox>
        <RotatedBox>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoTypography>Nice Dictionary</LogoTypography>
          </Link>
        </RotatedBox>
      </StyledBox>
    </RotatedPaper>
  );
};

export default Logo;
