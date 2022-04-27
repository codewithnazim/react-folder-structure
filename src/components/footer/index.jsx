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
    <Box sx={{ bgcolor: '#1E5DBB14', padding: '100px 10px' }} >
      <Container fixed>
        <Grid container marginX='auto' sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Grid item xs={12} sm={12} md={3} lg={3} >
            <Box>
              <img src={require("../../ui/assets/footer/Mask group (2).png").default} alt="" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Typography variant='h5'>
              Links
            </Typography>
            <Stack marginTop={2} sx={{ gap: '10px' }}>
              {data1.map((item, index) =>
                <Typography key={index} variant='body1' color='#00000'>
                  {item.title}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Typography variant='h5'>
              Services
            </Typography>
            <Stack marginTop={2} sx={{ gap: '10px' }}>
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
            <Stack marginTop={2} >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant='h6'>
                  Email - support@hospital.com
                </Typography>
                <Typography variant='h6'>
                  Phone - +91 (731) 253-41-24
                </Typography>
                <Box flexDirection='row' sx={{ display: 'flex', gap: '5px' }}>
                  <Typography variant='h6'>
                    Location -
                  </Typography>
                  <Box flexWrap='wrap' width='70%'>
                    <Typography variant='h6'  >
                      335, Jawahar Marg, Madhav Mandir Complex, Indore
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>
        <Typography variant='body1' mt='20px' textAlign='flex-start'>
          Copyright 2022. hospital all right reserved.
        </Typography>
        </Grid>
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