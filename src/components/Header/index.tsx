import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, User } from "firebase/auth";
import { logout } from "../../firebase";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ borderBottom: 1, borderColor: "divider", backgroundColor: "white" }}
    >
      <Toolbar>
        <div className="subscribe">
          <Button size="small">Subscribe</Button>
        </div>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <a href="/" style={{ color: "black" }}>
            Blog
          </a>
        </Typography>

        <div className="container_search">
          <TextField
            id="outlined-basic"
            variant="standard"
            style={{ display: "none" }}
          />

          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>

        {user ? (
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon
                component="svg"
                color="primary"
                fontSize="large"
                className="user_config"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>{user.displayName}</MenuItem>
              <Divider />
              <MenuItem component={Link} to="/add">
                <AddIcon sx={{ marginRight: 1 }} />
                New Post
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => logout()}>
                <LogoutIcon sx={{ marginRight: 1 }} />
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button className="user_config" variant="outlined" size="small">
            <a className="link_login" href="/login">
              SIGN IN
            </a>
          </Button>
        )}
      </Toolbar>
    </Container>
  );
}

export default Header;
