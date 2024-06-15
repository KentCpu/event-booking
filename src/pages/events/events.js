import {Header} from "../../components/screen/header";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {UIButton} from "../../components/ui/button";
import {SearchField} from "../home/home";
import {FilterEvents} from "./filter-events";
import {EventCard} from "./event-card";
import CardWallpaper1 from '../../assets/kak-igra-v-shahmaty.png';
import {useState} from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import {  useParams } from 'react-router-dom';

export const Events = () => {
    const [isSort, setIsSort] = useState(false);
    let { title } = useParams();
    const [titleEvent, setTitleEvent] = useState(title)

    const toggleIsSort = () => setIsSort(prev => !prev);


    return (
        <Stack>
            <Header/>
            <Container maxWidth='xl'>
                <Stack direction='row' gap={1} mt={3} mb={2}>
                    <Box width='900px'>
                        <SearchField
                            value={titleEvent}
                            onChange={event => setTitleEvent(event.target.value)}
                            placeholder="Мероприятие, досуг, развлечение"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <UIButton variant='secondary'>Найти мероприятие</UIButton>
                </Stack>
                <Stack direction='row' gap={4}>
                    <FilterEvents/>
                    <Stack>
                        <Stack direction='row' alignItems='center' mb={2}>
                            <Typography>Сортировка: </Typography>
                            <Button  endIcon={
                                isSort ?
                                    <KeyboardArrowUpOutlinedIcon/> :
                                    <KeyboardArrowDownOutlinedIcon />
                            } sx={{textTransform: 'none', color: '#A5A5A5'}} onClick={toggleIsSort}>по дате проведения</Button>

                        </Stack>
                        <Stack gap={2}>
                            <EventCard
                                cover={CardWallpaper1}
                                title={'Игровой вечер'}
                                subtitle={'Покажите все свои навыки и сразитесь с сильнейшими. '}
                                place='ул. Кирова 51а'
                                time='06.06.24 19:10-21:30'
                                price='150р'
                                views='95'
                                categories={['Шахматы', 'Спорт', 'Игра']}
                            />
                            <EventCard
                                cover={CardWallpaper1}
                                title={'Игровой вечер'}
                                subtitle={'Покажите все свои навыки и сразитесь с сильнейшими. '}
                                place='ул. Кирова 51а'
                                time='06.06.24 19:10-21:30'
                                price='150р'
                                views='95'
                                categories={['Шахматы', 'Спорт', 'Игра']}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
};
