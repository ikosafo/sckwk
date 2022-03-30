import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavigationLink } from "./Link";
//import NextLink from 'next/link'

const styles = (theme) => ({
  scrolling: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "black",
      borderBottom: 0,
      color: "white",
    },
  },
  top: {
    backgroundColor: "transparent",
    /* borderBottom: "1px solid #e1e1e1", */
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "black",
      color: "white"
    },
  },
  mobileNav: {
    width: "100%",
    "& a": {
      width: "100%",
      display: "block",
      textAlign: "right",
      lineHeight: "2em",
      fontSize: "1.5rem",
      paddingRight: "1em",
    },
  },
  navLink: {
    "& > div": {
      zIndex: 2,
      position: "absolute",
      paddingTop: 23,
      display: "none",
    },
    "&:hover>div": {
      display: "block",
    },
  },

  subNav: {
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: 4,
  },
  logo: {
    margin: "15px",
    marginRight: "3vw",
    height: 40,
    //paddingLeft: '7vw',
    [theme.breakpoints.down("xs")]: {
      height: 60,
      padding: 10,
      margin: 0,
    },
  },
  nav: {
    maxWidth: 1150,
    margin: "auto",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    "&.xsDown": {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "&.smUp": {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  },
  grow: {
    flexGrow: 1,
  },
});

const header = require("../../public/static/locales/en/menu.json");

function ElevationScrollRaw(props) {
  const { children, classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? classes.scrolling : classes.top,
  });
}

const ElevationScroll = withStyles(styles)(ElevationScrollRaw);

//Case stories url
//let CASE_STORIES_URL = 'https://www.scaleworks-case-stories.org'

function Header(props) {
  const [showMenu, menuToggl] = useState(false);

  let menuStyle = showMenu ? { display: "block" } : { display: "none" };
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color={"inherit"}>
          <Toolbar>
            <div className={`${props.classes.nav} xsDown`}>
              <Link href={"/"}>
                <img
                  className={props.classes.logo} src={"/static/images/01 Home/01-header/newlogo.png"}
                />
              </Link>
              <NavWithSubNav menuPoint={header[3]} />
              <NavWithSubNav menuPoint={header[2]} />
              <NavWithSubNav menuPoint={header[1]} />
             
              <div className={props.classes.grow} />

              <a target={"_blank"} href={"https://masterclass.scalework.com"}>
                <button type="button" 
                className="topgsbutton"> 
                  Get Started
                </button>
              </a>
              <a href={"/datawebinar"}>
                <button type="button" 
                className="webinarbtn"> 
                  Join the free webinar
                </button>
              </a>
             
             {/*  <a href={"https://embeddedml.scalework.com"}>
                <button type="button" className="toploginbutton">
                    Login
                </button>
              </a>
              <a href={"/finder"}>
                <button type="button" 
                className="topgsbutton"> 
                  Get Started
                </button>
              </a>
              <a href={CASE_STORIES_URL}>
                <button type="button" 
                className="topgsbutton"> 
                  Case Stories
                </button>
              </a> */}
              
              {/* <LinkButton
                variant={"contained"}
                color={"primary"}
                href={"/finder"}
              >
                Get Started
              </LinkButton> */}
            </div>
            <div className={`${props.classes.nav} smUp`}>
              <Link href={"/"}>
                <img
                  className={props.classes.logo}
                  src={"/static/images/01 Home/01-header/newlogo.png"}
                />
              </Link>
              <div className={props.classes.grow} />
              <IconButton
                edge="end"
                color="inherit"
                onClick={(e) => menuToggl(!showMenu)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
          <div style={menuStyle} className={props.classes.mobileNav}>
          <NavigationLink
              onClick={(e) => menuToggl(!showMenu)}
              style={{color:"#ffffff"}}
              href="/solutions"
            >
              Solutions
            </NavigationLink>
            <NavigationLink
              onClick={(e) => menuToggl(!showMenu)}
              style={{color:"#ffffff"}}
              href="https://blog.scalework.com/"
            >
              Insights
            </NavigationLink>
            <NavigationLink
              onClick={(e) => menuToggl(!showMenu)}
              //color={"primary"} 
              style={{color:"#ffffff"}}
              href="/about"
            >
              About
            </NavigationLink>
            
            <hr style={{width:"90%"}}/>

            <Grid container direction={'row'}>
                <Grid item xs={6} sm={6}>
                  <a href={"/datawebinar"} target="_blank">
                    <button type="button" className="mobwebinarbtn">
                      Join the free webinar
                    </button>
                  </a>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <a href={"https://masterclass.scalework.com"}>
                    <button type="button" className="topgsbutton"> 
                      Get Started
                    </button>
                  </a>
                </Grid>
            </Grid>
  
          </div>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

const NavWithSubNav = withStyles(styles)(({ menuPoint, ...props }) => (
  <div className={props.classes.navLink}>
    <NavigationLink color={"primary"} href={menuPoint.slug}>
      {menuPoint.title}
    </NavigationLink>
    <div>
      <MenuList dense className={props.classes.subNav}>
        {menuPoint.description.map((item, i) => (
          <Link href={menuPoint.links[i]} key={i}>
            <MenuItem>
              <ListItemIcon>
                <img
                  src={`/static/images/icons/navigation/${menuPoint.icons[i]}.svg`}
                />
              </ListItemIcon>
              <ListItemText
                primary={item}
                /*secondary={"Six simple steps"}*/ secondaryTypographyProps={{
                  color: "primary",
                }}
              />
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </div>
  </div>
));

export default withStyles(styles)(Header);
