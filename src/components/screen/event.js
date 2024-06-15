import {Box, Stack, Typography} from "@mui/material";

export const EventCategory = ({name}) => {
    return (
        <Box
        color='#fff'
        padding='5px 10px'
        backgroundColor='#999999'
        borderRadius='10px'
        fontSize='14px'
        >
            {name}
        </Box>
    )
}

export const Event = ({cover, name, categories, startDate, endDate, daysBeforeStart}) => {
    return (
        <Box backgroundColor='#D9D9D9' borderRadius='15px'>
            <Box>
                <img src={cover} alt='Обложка' style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}/>
            </Box>
            <Stack padding='10px 5px 10px 5px'>
                <Stack direction='row' gap={1} flexWrap='wrap' mb={1}>
                    {categories.map((category, i) => {
                        return <EventCategory key={i} name={category} />
                    })}
                    <Typography fontSize='14px' sx={{marginLeft: 'auto'}}>
                        {daysBeforeStart}
                    </Typography>
                </Stack>
                <Typography fontWeight='500' fontSize='18px'>{name}</Typography>
                <Typography fontSize='14px'>{startDate} - {endDate}</Typography>
            </Stack>
         </Box>
    );
}
