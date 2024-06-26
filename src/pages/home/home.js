import {Box, Container, Stack, styled, TextField, Typography} from "@mui/material";
import {Header} from "../../components/screen/header";
import {UIButton} from "../../components/ui/button";
import Wallpaper from '../../assets/ocean-wave-water-wallpaper.png';
import {Event} from "../../components/screen/event";
import CardWallpaper1 from '../../assets/card-wallpaper-1.png';
import CategoryWallpaper1 from '../../assets/category-logo-1.png';
import {Category} from "../../components/screen/category";
import {useNavigate} from "react-router-dom";
import {CREATE_EVENT_PAGE_PATH, STATISTICS_PAGE_PATH} from "../../const/path-page";
import {useSession} from "../../providers/session-context";
import {useState} from "react";
import {ORGANIZER_ROLE} from "../../const/role";
import { ReactComponent as OptionIcon } from '../../assets/option.svg';


export const SearchField = styled(TextField)(() => ({
    backgroundColor: '#fff',
    borderRadius: 20,
    'label + &': {
        marginTop: '10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        color: '#303030',
        outline: 'none',
        borderRadius: 20,

        '&:hover': {
            border: 'none',
            outline: 'none',
            borderRadius: 20,
        },

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderRadius: 20,
        },
    },
    '&.Mui-error .MuiOutlinedInput-root': {
        backgroundColor: '#FDE6ED',
        fontSize: '20px',
    },
    '& .MuiFilledInput-root': {
        backgroundColor: '#fff',
    },
    '& .MuiInputBase-input': {
        fontSize: 16,
    },
    '.MuiInputBase-input:-webkit-autofill': {
        boxShadow: 'none',
        caretColor: 'black',
        textFillColor: '#303030',
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
}));

export const HomePage = () => {
    const navigate = useNavigate();
    const [event, setEvent] = useState('');
    const {session} = useSession();

    const searchEvent = () => {
        navigate(`/search-events/${event}`);
    }

    const openEvent = () => {
        navigate('/event/5');
    }

    const openEvents = () => navigate('/search-events');

    return (
        <Stack>
            <Header/>
                <Stack height='500px' sx={{ background: `url(${Wallpaper}) no-repeat` }} >
                    <Container maxWidth="xl">
                        {
                            session.role === ORGANIZER_ROLE && <Stack direction='row' mb='120px'>
                                <UIButton sx={{width: '324px', marginTop: '32px', marginLeft: 'auto'}} onClick={() => navigate(CREATE_EVENT_PAGE_PATH)}>Разместить мероприятие</UIButton>
                            </Stack>
                        }
                        <Stack direction='row' gap={1} mt={session.role !== ORGANIZER_ROLE ? '150px' : undefined}>
                            <Box width='900px'>
                                <SearchField
                                    value={event}
                                    onChange={event => setEvent(event.target.value)}
                                    placeholder="Мероприятие, досуг, развлечение"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Box>
                            <UIButton variant='secondary' onClick={searchEvent}>Найти мероприятие</UIButton>
                            <UIButton variant='secondary' onClick={openEvents} sx={{backgroundColor: '#BF7130'}}>
                                <OptionIcon />
                            </UIButton>
                        </Stack>
                        {
                            session.role === ORGANIZER_ROLE &&
                            <Stack direction='row' justifyContent='right'>
                                <UIButton onClick={() => navigate(STATISTICS_PAGE_PATH)} sx={{width: '324px', mt: 5, ml: 'auto'}} >
                                    Статистика
                                </UIButton>
                            </Stack>
                        }

                    </Container>
                </Stack>
            <Container maxWidth="xl" sx={{marginTop: 2}}>
                <Typography mb={1} variant='h5' component='h1'>Ближайшие мероприятия</Typography>
                <Stack direction='row' justifyContent='space-between' mb={2}>
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        daysBeforeStart='13д'
                        categories={['Соревнования', 'Шахматы']}
                        onClick={openEvent}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        daysBeforeStart='13д'
                        categories={['Соревнования', 'Шахматы']}
                        onClick={openEvent}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        daysBeforeStart='13д'
                        categories={['Соревнования', 'Шахматы']}
                        onClick={openEvent}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        categories={['Соревнования', 'Шахматы']}
                        onClick={openEvent}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        categories={['Соревнования', 'Шахматы']}
                        onClick={openEvent}
                    />
                </Stack>
                <Typography mb={1} variant='h5' component='h2'>Вас может заинтересовать</Typography>
                <Stack direction='row' justifyContent='space-between' flexWrap='wrap' mb={2} gap={2}>
                    <Box flexBasis='24%'>
                        <Category name='Выставка' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Игра' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Соревнования' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Мастер-класс' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Мастер-класс' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Мастер-класс' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Мастер-класс' count={31} cover={CategoryWallpaper1} />
                    </Box>
                    <Box flexBasis='24%'>
                        <Category name='Мастер-класс' count={31} cover={CategoryWallpaper1} />
                    </Box>
                </Stack>
            </Container>
        </Stack>
    );
};

