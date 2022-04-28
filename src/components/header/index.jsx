import { AppBar, Box, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { makeStyles } from "@mui/styles";
import { MobileMenuBar } from './mblnav';

const useStyles = makeStyles((theme) => ({
  nav: {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 500,
    color:'#050405',
    fontSize: "15px",
    lineHeight: "17.6px",
    textDecoration: 'none',
    marginLeft: "30px",
    cursor: 'pointer'
  },
  nav1: {
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 500,
    color:'#1E5DBB',
    fontSize: "15px",
    lineHeight: "17.6px",
    textDecoration: 'none',
    marginLeft: "30px",
    cursor: 'pointer',
    marginRight:'10px'
  }
}))



export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' color='transparent'  sx={{ boxShadow: '0', padding:'10px auto'}}>
      <Toolbar variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <img src={require("../../../src/ui/assets/header/Mask group.svg").default} alt="" />
        <Box flexDirection='row' sx={{ justifyContent: 'center', alignItems: 'center', display: { xs: 'none', md: 'block' } }}
        >
          <NavLink to='#' className={classes.nav1}>
            Home
          </NavLink>
          {data.map((item, index) =>
            <NavLink key={index} to={item.link} className={classes.nav}
            >
              {item.title}
            </NavLink>
          )}
        </Box>
        <MobileMenuBar />
      </Toolbar>
    </AppBar>
  )
}

const data = [
  {
    title: "About Us",
    link: "#"
  },
  {
    title: " Services",
    link: "#"
  },
  {
    title: " Contact Us",
    link: "#"
  },
]