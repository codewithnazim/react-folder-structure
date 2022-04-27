import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from './style';

export const Section1 = () => {
    const classes = useStyles();
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Grid item lg={6} >
                <Box width='50%'>
                    <img src={require("../../ui/assets/banner/beautiful-female-doctor-white-coat-standing-arms-crossed-white-wall 1 (1).png")} alt="" style={{ width: '100%' }} />
                </Box>
            </Grid>
            <Grid item lg={6} sx={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
                <Box>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Typography variant='h1' color='blue'>
                            Protect
                        </Typography>
                        <Typography variant='h1' >
                            your health
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Typography variant='h1' >
                            and take care
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Typography variant='h1' >
                            of your
                        </Typography>
                        <Typography variant='h1' color='blue'>
                            health
                        </Typography>
                    </Box>
                </Box>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh. Velit vehicula scelerisque tristique scelerisque tellus risus.
                </Typography>
                <Box>
                    <Button variant='contained' className={classes.btn} sx={{ borderRadius: '80px' }} >
                        Get BMW
                        <img src={require("../../ui/assets/banner/Group 3.png")} alt='' />
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
