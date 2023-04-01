
import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material"

export const MuiImageList = () => {
    return (
        <Stack spacing={4} > MuiImageList <br /><br />
            <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164} >
                {
                    itemData.map((item) => (
                        <ImageListItem key={item.img} sx={{ overflow: 'clip' }} >
                            <img width={'164px'} height={'164px'} src={item.img} 
                            alt={item.title} loading='lazy' />
                
                            <ImageListItemBar title={item.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>


            <ImageList sx={{width: 500, height: 450}} variant='woven'
            cols={3} gap={8} >
                {
                    itemData.map((item) => (
                        <ImageListItem key={item.img} >
                            <img src={`${item.img}?w=200&h=164&fit=crop&fromat=auto&dpr=2`} 
                            alt={item.title} loading='lazy' />
                        </ImageListItem>
                    ))
                }
            </ImageList>

            <Box sx={{width: 500, height: 450, overflowY: 'scroll'}} >
                <ImageList variant='masonry' cols={3} gap={8} >
                    {
                        itemData.map((item) => (
                            <ImageListItem key={item.img} >
                                <img src={`${item.img}?w=164&h=164&fit=crop&auto=fromat&dpr=2`} 
                                alt={item.title} loading='lazy' />

                                <ImageListItemBar title={item.title} />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
        </Stack>
    )
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1676982948976-b4fce6dea8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTgzNg&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 1'
    },
    {
        img: 'https://images.unsplash.com/photo-1677095043185-74fd86fd0395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTg0NQ&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 2'
    },
    {
        img: 'https://images.unsplash.com/photo-1677253171066-b78ddca69a65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTg0Ng&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 3'
    },
    {
        img: 'https://images.unsplash.com/photo-1678436749283-1f8cf4ae059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTg0OQ&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 4'
    },
    {
        img: 'https://images.unsplash.com/photo-1677782468873-6d22c0b5b411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTg1MQ&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 5'
    },
    {
        img: 'https://images.unsplash.com/photo-1677725284091-505971561e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTg1Mw&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 6'
    },
    {
        img: 'https://images.unsplash.com/photo-1677928708058-fc6708a8ddb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk3Mg&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 7'
    },
    {
        img: 'https://images.unsplash.com/photo-1679257571517-71dac9f771e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk3NA&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 8'
    },
    {
        img: 'https://images.unsplash.com/photo-1677658288290-2913716d4d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk3Ng&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 9'
    },
    {
        img: 'https://images.unsplash.com/photo-1677952852521-1cb2353d08fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk3OA&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 10'
    },
    {
        img: 'https://images.unsplash.com/photo-1677492691756-a3433e656ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk4MA&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 11'
    },
    {
        img: 'https://images.unsplash.com/photo-1678783447940-3c7fd169cda2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk5Mw&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 12'
    },
    {
        img: 'https://images.unsplash.com/photo-1677590931388-853cc8091bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk5NA&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 13'
    },
    {
        img: 'https://images.unsplash.com/photo-1676704668690-4897bac73cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NTk5OQ&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 14'
    },
    {
        img: 'https://images.unsplash.com/photo-1679502460642-7d4c55a97730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTY5NjAwMQ&ixlib=rb-4.0.3&q=80&w=1080',
        title: 'Random 15'
    }
]