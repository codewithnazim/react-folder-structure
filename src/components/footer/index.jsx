import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    bgcolor: '#1E5DBB14',
    height: '390px'
  }
}))

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: '#1E5DBB14', display: 'flex', alignItems: 'center', padding: '100px 10px', justifyContent:'center' }} >
      <Container fixed>
        <Grid container spacing={2} marginX='auto' sx={{ display: 'flex', alignItems: 'flex-start', justifyContent:'center',  }}>
          <Grid item xs={12} sm={12} md={3} lg={3} >
            <img src={require("../../../src/ui/assets/footer/Mask group (2).png").default} alt="" />
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={3} >
            <Typography variant='h5'>
              Links
            </Typography>
            <Stack marginTop={2} spacing={1} >
              {data1.map((item, index) =>
                <Typography key={index} variant='body1' color='#00000'>
                  {item.title}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}  lg={3}>
            <Typography variant='h5'>
              Services
            </Typography>
            <Stack marginTop={2} spacing={1}>
              {data2.map((item, index) =>
                <Typography key={index} variant='body1' color='#00000'>
                  {item.title}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3} >
            <Typography variant='h5'>
              Connect
            </Typography>
            <Stack marginTop={2} spacing={2}>
              <Box sx={{display:'flex', flexDirection:'column', gap:'10px' }}>
              <Typography variant='h6'>
                Email - support@hospital.com
              </Typography>
              <Typography variant='h6'>
                Phone - +91 (731) 253-41-24
              </Typography>
              <Box flexDirection='row'  sx={{ display: 'flex', gap:'10px' }}>
                <Typography variant='h6'>
                  Location -
                </Typography>
                <Box flexWrap='wrap' width='60%'>
                  <Typography  variant='h6'  >
                    335, Jawahar Marg, Madhav Mandir Complex, Indore
                  </Typography>
                </Box>
              </Box> 
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant='body1' mt='20px'>
        Copyright 2022. hospital all right reserved.
        </Typography>
        </Container>
    </Box>
  )
}




const data1 = [
  {
    title: 'Home'
  },
  {
    title: 'About Us'
  },
  {
    title: 'Services'
  },
  {
    title: 'Contact Us'
  },
]

const data2 = [
  {
    title: 'Emergency room services'
  },
  {
    title: 'Short-term hospitalization'
  },
  {
    title: 'Blood services'
  },
  {
    title: 'Laboratory services'
  },
  {
    title: 'Pediatric specialty care'
  },
]