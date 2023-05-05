import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import GradientText from "../common/GradientText";
import Centered from "../common/Centered";
import Row from "../common/Row";

const drawerWidth = 240;

function NavBar(props) {
  const leftNavItems = ["Home", "Marketplace", "About us"];

  const leftNavRoutes = ["", "marketplace", "about"];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const LstItem = ({ onClick, item }) => {
    return (
      <>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={onClick}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      </>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {leftNavItems.map((item, index) => (
          <LstItem
            item={item}
            onClick={() => {
              navigate(`/${leftNavRoutes[index]}`);
            }}
          />
        ))}

        <LstItem
          item="Blog"
          onClick={() => {
            navigate("/blog");
          }}
        />
        <LstItem item="Log in" onClick={() => {}} />
        <LstItem item="Sign up" onClick={() => {}} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          // background: "linear-gradient(to bottom, #ffff,#ffff, rgba(255, 255, 255, 0))",
          background: "#ffffff80",
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          // zIndex: 1,
          width: "100%",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ width: { xs: "200%", md: "100%" } }}>
          {/* <Box sx={{background:"green", width:"100%"}}>sdf</Box> */}

          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <GradientText text="NFJ LABS" />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Container>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* LEFT NAV BUTTONS  */}
              <Box display="flex" width="36%">
                {leftNavItems.map((item, index) => (
                  <Button
                    key={item}
                    sx={{ color: "black", marginX: "5px" }}
                    onClick={() => {
                      navigate(`/${leftNavRoutes[index]}`);
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              {/* GRADIENT LOGO  */}
              <GradientText text="NFJ LABS" />

              {/* RIGHT NAV BUTTONS  */}
              <Row sx={{ width: "36%", justifyContent: "center" }}>
                <Button
                  sx={{ color: "black" }}
                  onClick={() => {
                    navigate(`/blog`);
                  }}
                >
                  Blog
                </Button>
                <Button sx={{ color: "black" }}>log in</Button>
                <Button
                  sx={{ color: "#ffff", marginLeft: "10px" }}
                  variant="contained"
                >
                  sign up
                </Button>
              </Row>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#ffffff70",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
