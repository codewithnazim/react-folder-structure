import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from './style';

export const Section2 = () => {
    const classes = useStyles();
    return (
        <Grid container boxShadow={3} >
            <Grid item xs={6} sm={4}    className={classes.card}   >
                <Box className={classes.cardbg} >
                    <Typography variant='h5'>
                        Emergency Cases
                    </Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet, consecr adipiscing elit.
                    </Typography>
                    <Typography variant='h4'>
                        +91 (731) 253-41-24
                    </Typography>
                </Box>
            <Box sx={{borderRight:'1px solid #05040585', height:'70%', display: { xs: 'none', md: 'block'}, }} />
            </Grid>
            <Grid item xs={6} sm={4}  className={classes.card}  >
                <Box className={classes.cardbg}  >
                    <Typography variant='h5'>
                        Location
                    </Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet, consecr adipiscing elit.
                    </Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet, consecr adipiscing elit.
                    </Typography>
                </Box>
                <Box sx={{borderRight:'1px solid #05040585', height:'70%', display: { xs: 'none', md: 'block' }}} />
            </Grid>
            <Grid item xs={12} sm={4}  className={classes.card}  >
                <Box className={classes.cardbg} >
                    <Typography variant='h5'>
                        Opening Hours
                    </Typography>
                    {data.map((item, index) =>
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>
                            <Typography variant='body2'>
                                {item.day}
                            </Typography>
                            <Typography variant='body2'>
                                {item.time}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}


const data = [
    {
        day: 'Monday-Friday   ',
        time: '8:00-10:00 pm'
    },
    {
        day: 'Saturday   ',
        time: '9:00 - 8:00 pm'
    },
    {
        day: 'Sunday   ',
        time: '10:00 - 9:00 pm'
    },
]