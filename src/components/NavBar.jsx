import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Account from "./Account";
import LoginForm from "./LoginForm";
import BlogBoard from "./BlogBoard";
import UserBoard from "./UserBoard";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const blogs = "Blogs";
const users = "Users";
const account = "Account";
const logout = "Logout";
const routes = ["/blogs", "/users", "/account", "/login"];

const NavBar = () => {
  const [username, setUsername] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const nevigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("jwt");
      const decodedToken = jwt_decode(token);
      setUsername(decodedToken.username);
    };
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

    action === "Account" ? redirectToAccountPage() : redirectToLoginPage();
  };

  const redirectToAccountPage = () => {
    setAnchorElNav(null);
    nevigateTo("/account");
  };
  const redirectToLoginPage = () => {
    setAnchorElNav(null);
    Cookies.remove("jwt");
    setUsername("");
    nevigateTo("/login");
  };
  return (
    <div>
      <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AutoStoriesIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/blogs"
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
                aria-label="account of current user"
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
                <MenuItem key={blogs} onClick={() => nevigateTo("/blogs")}>
                  <Typography textAlign="center">{blogs}</Typography>
                </MenuItem>
                <MenuItem key={users} onClick={() => nevigateTo("/users")}>
                  <Typography textAlign="center">{users}</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AutoStoriesIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key={blogs}
                onClick={() => nevigateTo("/blogs")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {blogs}
              </Button>
              <Button
                key={users}
                onClick={() => nevigateTo("/users")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {users}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={username}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User"
                    src="/man.png"
                  />
                </IconButton>
              </Tooltip>
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
                <MenuItem
                  key={account}
                  onClick={(event) => handleCloseUserMenu(event, account)}
                >
                  <Typography textAlign="center">{account}</Typography>
                </MenuItem>
                <MenuItem
                  key={logout}
                  onClick={(event) => handleCloseUserMenu(event, logout)}
                >
                  <Typography textAlign="center">{logout}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBar;
