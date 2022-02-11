import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { Typography, Grid, Container } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

const HeaderDiv = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: theme.spacing(4),
  background: "transparent",
  position: "static",
}));
const LogoTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 18,
  fontStyle: 30,
  lineHeight: 1,
}));

const Logo = () => {
  return (
    <HeaderDiv>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Grid
          spacing={0}
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Grid item>
            <LogoTypography>Nice Dictionary</LogoTypography>
          </Grid>
          <Grid item>
            <LogoTypography>
              <BookmarkOutlinedIcon fontSize="medium" color="error" />
            </LogoTypography>
          </Grid>
        </Grid>
      </Link>
    </HeaderDiv>
  );
};

export default Logo;
