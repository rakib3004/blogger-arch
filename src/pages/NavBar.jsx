import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const profile = "Profile";
const logout = "Logout";
const login = "Login";
const signup = "Signup";

const NavBar = () => {
  const { setLoggedStatusInLogout, username } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const nevigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event, action) => {
    setAnchorElUser(null);

    switch (action) {
      case "Profile":
        redirectToProfilePage();
        break;
      case "Login":
        redirectToLoginPage();
        break;
      case "Logout":
        handleLogout();
        break;
      case "Signup":
        redirectToSignupPage();
        break;
    }
  };

  const redirectToProfilePage = () => {
    setAnchorElNav(null);
    nevigateTo(`/users/${username}`);
  };
  const handleLogout = () => {
    setAnchorElNav(null);
    setLoggedStatusInLogout();
    nevigateTo("/login");
  };

  const redirectToSignupPage = () => {
    setAnchorElNav(null);
    nevigateTo("/signup");
  };

  const redirectToLoginPage = () => {
    setAnchorElNav(null);
    nevigateTo("/login");
  };

  const redirectToHomePage = () => {
    setAnchorElNav(null);
    nevigateTo("/");
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AutoStoriesIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Blogger
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="profile of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <div>
                  <MenuItem key="home" onClick={() => nevigateTo("/")}>
                    <Typography textAlign="center">home</Typography>
                  </MenuItem>
                  <MenuItem key="blogs" onClick={() => nevigateTo("/blogs")}>
                    <Typography textAlign="center">blogs</Typography>
                  </MenuItem>
                </div>
              </Menu>
            </Box>
            <AutoStoriesIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Blogger
            </Typography>
            <Button
              key="home"
              onClick={() => nevigateTo("/")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              home
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="blogs"
                onClick={() => nevigateTo("/blogs")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                blogs
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={username === "" ? "guest" : username}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {username ? (
                    <Avatar alt="User" src="/user.png" />
                  ) : (
                    <Avatar alt="User" src="/guest.png" />
                  )}
                </IconButton>
              </Tooltip>
              <Typography textAlign="center">
                {username === "" ? "guest" : username}
              </Typography>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {username ? (
                  <div>
                    <MenuItem
                      key="profile"
                      onClick={(event) => handleCloseUserMenu(event, profile)}
                    >
                      <Typography textAlign="center">{profile}</Typography>
                    </MenuItem>
                    <MenuItem
                      key="logout"
                      onClick={(event) => handleCloseUserMenu(event, logout)}
                    >
                      <Typography textAlign="center">{logout}</Typography>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem
                      key="login"
                      onClick={(event) => handleCloseUserMenu(event, login)}
                    >
                      <Typography textAlign="center">{login}</Typography>
                    </MenuItem>
                    <MenuItem
                      key="signup"
                      onClick={(event) => handleCloseUserMenu(event, signup)}
                    >
                      <Typography textAlign="center">{signup}</Typography>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBar;
