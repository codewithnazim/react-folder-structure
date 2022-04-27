import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";

export const About = () => {
    return (
        <Box>
        <Container fixed sx={{ padding: "100px"}}>
            <Typography variant='h2'>
                About Us
            </Typography>
            <Grid container mt='10px' spacing={5}>
                <Grid item lg={6} >
                    <Box >
                        <img src={require("../../ui/assets/about/Group 33 (1).png")} alt="" style={{ width: '100%' }} />
                    </Box>
                </Grid>
                <Grid item lg={6} sx={{display:'flex', gap:'10px', flexDirection:'column'}}>
                    <Typography variant='h2' width='70%'>
                        Short Story About Our Hospital
                    </Typography>
                    <Typography variant='body1' width='80%'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh. Velit vehicula scelerisque tristique scelerisque tellus risus.
                    </Typography>
                    <Box sx={{display:'flex',gap:'10px', flexDirection:'column'}} >
                        {data.map((item, index) =>
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src={require("../../ui/assets/about/Group 33 (2).png")} alt="" />
                                <Typography variant='body1'>
                                    {item.title}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
    )
}


const data = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
]