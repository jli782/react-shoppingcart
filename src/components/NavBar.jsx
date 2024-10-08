import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ShoppingCartContext } from "./ShoppingCartContext";

const pages = [
  { item: "Products", link: "/products" },
  { item: "Shopping Cart", link: "/shopping-cart" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /* shopping cart */
  const { shoppingCart } = React.useContext(ShoppingCartContext);

  /* actve app bar button */
  const [active, setActive] = React.useState(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
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
            <Link
              to="/"
              style={{
                marginRight: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => setActive(null)}
            >
              SHOPPING CART LOGO
            </Link>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link to={`${page.link}`} key={page.item}>
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      setActive(page.item);
                    }}
                    sx={{
                      backgroundColor:
                        active === page.item ? `#97c5f6` : `#fff`,
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.item}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              {/* <MenuItem key={"user items added"} onClick={handleCloseNavMenu}> */}
              <Typography
                sx={{
                  textAlign: "center",
                  paddingX: "16px",
                  paddingY: "6px",
                }}
              >
                {shoppingCart /* .length > 0 */
                  ? shoppingCart.reduce((accumulator, currItem) => {
                      console.log(`currItem ${currItem.quantity}`);
                      return accumulator + parseInt(currItem.quantity);
                    }, 0)
                  : "#"}{" "}
                Items Added
              </Typography>
              {/* </MenuItem> */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link
              to="/"
              style={{
                marginRight: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".15rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => setActive(null)}
            >
              SHOPPING CART LOGO
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={`${page.link}`} key={page.item}>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    setActive(page.item);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    ":hover": {
                      /*  color: "#0d47a1", */ backgroundColor: "#0d47a1",
                    },
                    backgroundColor:
                      active === page.item ? `#97c5f6` : `#1976d2`,
                  }}
                >
                  {page.item}
                </Button>
              </Link>
            ))}
            <Typography
              key={"user items"}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                padding: "6px 8px",
              }}
            >
              {/* {shoppingCart.length > 0 ? shoppingCart.length : "#"} Items Added */}
              {shoppingCart /* .length > 0 */
                ? shoppingCart.reduce((accumulator, currItem) => {
                    console.log(`currItem ${currItem.quantity}`);
                    return accumulator + parseInt(currItem.quantity);
                  }, 0)
                : "#"}{" "}
              Items Added
            </Typography>
          </Box>

          {/* Drop down responsive menu with user avatar */}
          {/* {<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
