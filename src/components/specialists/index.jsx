import { Box, Button, Container, Typography, Grid } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import useStyles from './style';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Specialists = () => {
    const classes = useStyles()
    return (
      <Box sx={{ dispaly: 'flex', flexDirection: 'column', marginY:{xs:'50px', md:'100px'} }}>
            <Container fixed sx={{ padding: { xs: '50px auto', md: "100px auto" }, }}>
                <Box display='flex' justifyContent='space-between' >
                    <Typography variant='h2'>
                        Critical Care Specialists
                    </Typography>
                    <Button className={classes.btn}>
                        View all
                        <ArrowForwardIosIcon />
                    </Button>
                </Box>
                <Grid container >
                    {data.map((item, index) =>
                        <Grid item xs={12} sm={4} md={5}  key={index} className={classes.card} sx={{margin:'10px'}}>
                            <Box className={classes.cardbg} >
                                <Typography variant='h5'>
                                    {item.title}
                                </Typography>
                                <Typography variant='h6' color='#231F208A'>
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    )
}


const data = [
    {
        title: 'Dr. Nirav Parmar MBBS',
        subtitle: '- Physician'
    },
    {
        title: 'Dr. Vishal Parmar MBBS',
        subtitle: '- Physician'
    },
    {
        title: 'Dr. Vipul Sharma MBBS',
        subtitle: '- Physician'
    },
    {
        title: 'Dr. Nirav Parmar MBBS',
        subtitle: '- Physician'
    },
]