import {Stack, Typography} from "@mui/material";

export const Category = ({name, cover, count}) => {
    return (
        <Stack direction='row' backgroundColor='#D9D9D9' borderRadius='16px' flex='1 1 auto'>
            <Stack padding='10px' mr='auto'>
                <Typography fontSize='18px'>{name}</Typography>
                <Typography fontSize='14px' color='#585858'>{count} мероприятий</Typography>
            </Stack>
            <img src={cover} alt='Обложка' />
        </Stack>
    );
};

