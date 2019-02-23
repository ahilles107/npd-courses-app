import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={"menu-button"}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={"grow"}>
            NPD
          </Typography>
          <Link to={"/login"}>
            <Button color="secondary">{t("Sign in")}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
