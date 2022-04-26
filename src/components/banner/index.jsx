import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";

export const Banner = () => {
    return (
        <Box className='banner' mt='10px'>
            <Container fixed padding="100px auto">
                <Grid container >
                    <Grid item lg={3} bgcolor='red'>
                        <Box>
                            <img src={require("../../../src/ui/assets/banner/beautiful-female-doctor-white-coat-standing-arms-crossed-white-wall 1 (1).png").default} alt="" style={{ width: '100%' }} />
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

const data= () => {
    return (
        <Box>
            
        </Box>
    )
}