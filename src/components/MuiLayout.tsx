
import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

export const MuiLayout = () => {
    return (
        <Paper sx={{ padding: '32px', backgroundColor: '#eeeeee' }}
        elevation={20} >MuiLayout <br/> <br/>
            <Stack  sx={{ border: '1px solid' }} direction ='row' 
            spacing={2} divider={<Divider orientation='vertical' flexItem />} > 
                <Box sx={{
                    backgroundColor: 'warning.main',
                    color: 'white',
                    height: '100px',
                    width: '100px',
                    padding: '16px',
                    '&: hover': {
                        backgroundColor: 'warning.light'
                    }
                }} > Box Component
                </Box>
                
                <Box display='flex' height='100px' width='100px' bgcolor='secondary.main' p={2} >
                    Box Component
                </Box>
            </Stack>

            <Grid container my={4} rowSpacing={2} columnSpacing={1} >
                <Grid item xs={6} >
                    <Box bgcolor='secondary.light' p={2} >Item 1</Box>
                </Grid>

                <Grid item xs={6} >
                    <Box bgcolor='secondary.light' p={2} >Item 2</Box>
                </Grid>

                <Grid item xs={6} >
                    <Box bgcolor='secondary.light' p={2} >Item 3</Box>
                </Grid>

                <Grid item xs={6} >
                    <Box bgcolor='secondary.light' p={2} >Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}