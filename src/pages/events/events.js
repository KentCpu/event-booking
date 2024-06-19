import React, {useState} from 'react';
import {useSession} from "../../providers/session-context";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {Header} from "../../components/screen/header";
import {ADMIN_ROLE} from "../../const/role";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {SearchField} from "../home/home";
import {UIButton} from "../../components/ui/button";
import {FilterEvents} from "../search-events/filter-events";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {EventCard} from "../search-events/event-card";
import CardWallpaper1 from "../../assets/kak-igra-v-shahmaty.png";
import CardWallpaper2 from "../../assets/event-card-2.png";
import CardWallpaper3 from "../../assets/event-card-3.png";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Events = () => {
    const {session} = useSession();
    const [isSort, setIsSort] = useState(false);
    let { title } = useParams();
    const [titleEvent, setTitleEvent] = useState(title);
    const [value, setValue] = useState('1');
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const toggleIsSort = () => setIsSort(prev => !prev);

    const openEvent = () => {
        navigate('/event/5')
    }

    return (
        <Stack mb={1}>
            <Header/>
            <Container maxWidth='xl'>
                {
                    session.role === ADMIN_ROLE &&  <Box sx={{ marginTop: 3, borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Все" def {...a11yProps(0)} />
                            <Tab label="Будущие" {...a11yProps(1)} />
                            <Tab label="Прошедшие" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                }
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
                                place='Проспект Ленина 164'
                                time='06.06.24 19:10-21:30'
                                price='150р'
                                views='95'
                                categories={['Шахматы', 'Спорт', 'Игра']}
                                onClick={openEvent}
                            />
                            <EventCard
                                cover={CardWallpaper2}
                                title={'Экспозиция'}
                                subtitle={'Проведите прекрасный вечер в прекрасной атмосфере.'}
                                place='ул. Кирова 51а'
                                time='30.06.24 20:15-21:30'
                                price='400р'
                                views='230'
                                categories={['Выставка', 'Картины']}
                            />
                            <EventCard
                                cover={CardWallpaper3}
                                title={'Бесприданница'}
                                subtitle={'Вас ждет захватывающий вечер, полный загадок, тайн и неожиданных поворотов!'}
                                place='ул. Весенняя 11'
                                time='15.06.24 20:15-21:30'
                                price='300р'
                                views='120'
                                categories={['Спектакль', 'Театр', 'Выступление']}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
};
