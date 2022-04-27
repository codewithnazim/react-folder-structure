import { AppBar, Box, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

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
  }
}))



export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' color='transparent'  sx={{ boxShadow: '0',}}>
      <Toolbar variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mx: '50px',
        }}>
        <img src={require("../../../src/ui/assets/header/Mask group.svg").default} alt="" />
        <Box flexDirection='row' sx={{ justifyContent: 'center', alignItems: 'center', display: { xs: 'none', lg: 'block' } }}
        >
          {data.map((item, index) =>
            <NavLink key={index} to={item.link} className={classes.nav}
            >
              {item.title}
            </NavLink>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const data = [
  {
    title: "Home",
    link: "#"
  },
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