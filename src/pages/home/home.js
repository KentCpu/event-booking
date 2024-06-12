import {Box, Container, Stack, styled, TextField, Typography} from "@mui/material";
import {Header} from "../../components/header";
import {UIButton} from "../../components/button";
import Wallpaper from '../../assets/ocean-wave-water-wallpaper.png';
import {Event} from "../../components/event";
import CardWallpaper1 from '../../assets/card-wallpaper-1.png';
import CategoryWallpaper1 from '../../assets/category-logo-1.png';
import {Category} from "../../components/category";

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
    return (
        <Stack>
            <Header/>
                <Stack height='450px' sx={{ background: `url(${Wallpaper}) no-repeat` }} >
                    <Container maxWidth="xl">
                        <Stack direction='row' mb='120px'>
                            <UIButton sx={{width: '324px', marginTop: '32px', marginLeft: 'auto'}}>Разместить мероприятие</UIButton>
                        </Stack>
                        <Stack direction='row' gap={1}>
                            <Box width='900px'>
                                <SearchField
                                    label="Мероприятие, досуг, развлечение"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Box>
                            <UIButton variant='secondary'>Найти мероприятие</UIButton>
                        </Stack>
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
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        daysBeforeStart='13д'
                        categories={['Соревнования', 'Шахматы']}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        daysBeforeStart='13д'
                        categories={['Соревнования', 'Шахматы']}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        categories={['Соревнования', 'Шахматы']}
                    />
                    <Event
                        cover={CardWallpaper1}
                        name='Игроманы'
                        startDate="01 июня 2024"
                        endDate="01 июня 2024, 21:00"
                        categories={['Соревнования', 'Шахматы']}
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
