import "./style.css";
import { useEffect, useState } from "react";

import { getAuth, User } from "firebase/auth";
import { logout } from "../../firebase";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Container maxWidth="lg" sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button className="user_config" variant="outlined" size="small">
          {user ? (
            <span onClick={() => logout()}>SIGN OUT</span>
          ) : (
            <a className="link_login" href="/login">
              SIGN IN
            </a>
          )}
        </Button>
      </Toolbar>
    </Container>
  );
}

export default Header;
