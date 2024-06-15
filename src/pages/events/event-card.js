import {Stack, Typography} from "@mui/material";
import {EventCategory} from "../../components/screen/event";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const EventCard = ({cover, title, subtitle, categories, views, place, time, price}) => {
    return (
        <Stack direction='row' border='1px solid #000' borderRadius='8px' width='100%'>
            <img src={cover} alt='Обложка' style={{width: '350px', height: '240px'}} />
            <Stack>
                <Typography fontSize='26px' mb={1} sx={{borderBottom: '1px solid #000', padding: '4px 16px'}}>{title}</Typography>
                <Stack padding={'4px 16px'}>
                    <Stack direction='row' flexWrap='wrap' mb={2} justifyContent='space-between' alignItems='center' >
                        <Stack direction='row' gap={1}>
                            {categories.map((category, i) => {
                                return <EventCategory key={i} name={category} />
                            })}
                        </Stack>
                        <Stack direction='row' alignItems={'center'} gap={'3px'}>
                            <VisibilityOutlinedIcon/>
                            <Typography>{views}</Typography>
                        </Stack>
                    </Stack>
                    <Typography color='#3F3F3F' mb={3}>{subtitle}</Typography>
                    <Stack direction='row' justifyContent='space-between' gap={7}>
                        <Stack>
                            <Typography fontSize='20px'>Место проведения:</Typography>
                            <Typography fontSize='20px'>{place}</Typography>
                        </Stack>
                        <Stack>
                            <Typography fontSize='20px'>Время проведения:</Typography>
                            <Typography fontSize='20px'>{time}</Typography>
                        </Stack>
                        <Stack>
                            <Typography fontSize='20px'>Стоимость:</Typography>
                            <Typography fontSize='20px'>{price}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
