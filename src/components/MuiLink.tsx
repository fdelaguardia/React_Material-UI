
import { Stack, Link, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiLink = () => {
    return (
        <Stack>MuiLink && Breadcrumbs <br /><br />
            <Stack spacing={2} direction='row' >
                <Link href='#' >Link</Link>
                <Typography variant="h6" >
                    <Link href='#' color='secondary' underline='hover' >Secondary</Link>
                </Typography>
                <Link variant="h5" href='#' color='error' underline='none' >Error</Link>
            </Stack>
            <Stack>
                <Breadcrumbs aria-label='breadcrumb'
                maxItems={3} itemsBeforeCollapse={2} >
                    <Link underline='hover' href="#" >Home</Link>
                    <Link underline='hover' href="#" >Catalog</Link>
                    <Link underline='hover' href="#" >Accessories</Link>
                    <Typography color='text.primary' >Shoes</Typography>
                </Breadcrumbs>
                <Breadcrumbs aria-label='breadcrumb' separator='-'
                maxItems={3} itemsAfterCollapse={2} >
                    <Link underline='hover' href="#" >Home</Link>
                    <Link underline='hover' href="#" >Catalog</Link>
                    <Link underline='hover' href="#" >Accessories</Link>
                    <Typography color='text.primary' >Shoes</Typography>
                </Breadcrumbs>
                <Breadcrumbs aria-label='breadcrumb' maxItems={2}
                separator={<NavigateNextIcon/>} >
                    <Link underline='hover' href="#" >Home</Link>
                    <Link underline='hover' href="#" >Catalog</Link>
                    <Link underline='hover' href="#" >Accessories</Link>
                    <Typography color='text.primary' >Shoes</Typography>
                </Breadcrumbs>
            </Stack>
        </Stack>
    )
}