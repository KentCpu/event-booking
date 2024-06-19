import {Box, Container, Stack, TextField, Typography} from "@mui/material";
import {Header} from "../../components/screen/header";
import {EventCategory} from "../../components/screen/event";
import {categories} from "../create-event/create-event";
import Map from '../../assets/map.png'
import EventImg from '../../assets/event-img.png'
import {UIButton} from "../../components/ui/button";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Visitors from '../../assets/visitors.svg'
import {useNavigate} from "react-router-dom";
import {useSession} from "../../providers/session-context";
import {ADMIN_ROLE, ORGANIZER_ROLE, USER_ROLE} from "../../const/role";
import {useState} from "react";
import {UIModal} from "../../components/ui/modal";

export const RejectionReason = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Stack direction='row' justifyContent='center'>
            <UIButton variant='secondary' sx={{width: 270}} onClick={() => setIsOpen(true)}>Отклонить</UIButton>
            <UIModal open={isOpen} onClose={() => setIsOpen(false)}>
                <Typography variant='h5' mb={2}>Укажите причину отказа</Typography>
                <TextField rows={8} multiline placeholder='Причина' fullWidth sx={{marginBottom: '20px'}} />
                <UIButton sx={{width: 300}}>Отправить</UIButton>
            </UIModal>
        </Stack>
    )
}

export const EventPage = () => {
    const navigate = useNavigate();
    const {session} = useSession();

    return (
        <Stack>
            <Header />
            <Container maxWidth='xl'>
                <Stack direction='row' mt={3} justifyContent='space-between' gap={4}>
                    <Stack flex='1 1 50%'>
                        <Typography variant='h4' mb={1}>Музыкальный вечер</Typography>
                        <Stack direction='row' gap={2} mb={2}>
                            {categories.map((category, i) => {
                                return <EventCategory key={i} name={category.name} />
                            })}
                        </Stack>
                        <Typography variant='h5'>Место проведения</Typography>
                        <Typography mb={2} fontSize='16px'>Советский проспект 68</Typography>
                        <Box mb={1}>
                            <img src={Map} />
                        </Box>
                        <Typography variant='h5'>Дата проведения:</Typography>
                        <Typography mb={1}>10.04.2024 18:00-21:00 </Typography>
                        <Typography variant='h5' mb={1}>Стоимость: 100₽</Typography>
                        {session.role !== ADMIN_ROLE &&
                            <Stack direction='row' mb={3} alignItems='center' gap={1}>
                                <Typography variant='h5'>Участники которые идут:</Typography>
                                <img src={Visitors} />
                                <Typography fontSize='18px'>15/60</Typography>
                            </Stack>
                        }

                        {

                            session.role === ADMIN_ROLE && (
                                <>
                                    <Typography variant='h5' mb={1}>Организаторы:</Typography>
                                    <Stack direction='row' alignItems='center' gap={1} mb={1}>
                                        <AccountCircleOutlinedIcon fontSize='large' />
                                        <Typography fontSize='20px'>Сибиряков Матвей Евгеньевич</Typography>
                                    </Stack>
                                    <Stack direction='row' justifyContent='flex-end'>
                                        <UIButton sx={{width: 270}}>Утвердить</UIButton>
                                    </Stack>
                                </>
                            )
                        }
                        {
                            session.role === USER_ROLE && <UIButton variant='secondary' sx={{width: 270}}>Посетить</UIButton>
                        }
                        {
                            session.role === ORGANIZER_ROLE && <UIButton variant='secondary' sx={{width: 270}}>Отменить</UIButton>
                        }
                    </Stack>
                    <Stack flex='1 1 50%'>
                        <Box mt={3} mb={2}>
                            <img src={EventImg} />
                        </Box>
                        <Typography variant='h5' mb={1}>Описание:</Typography>
                        <Typography sx={{marginBottom: 'auto'}}>Приглашаем вас на незабываемый музыкальный вечер! Волшебные клавиши пианино зазвучат для вас в исполнении лучших учеников
                            нашей музыкальной школы. В программе концерта: произведения классиков и современных композиторов,
                            а также яркие дуэты и ансамбли. Не упустите возможность насладиться прекрасной музыкой и окунуться в атмосферу творчества!
                        </Typography>
                        <Stack direction='row' gap={5} mt={2} mb={2}>
                            {
                                (session.role === ORGANIZER_ROLE || session.role === USER_ROLE) && (
                                    <Stack direction='row' alignItems='end' gap={1} >
                                        <Stack direction='row' alignItems='center' gap={1}>
                                            <VisibilityOutlinedIcon fontSize='large' />
                                            <Typography fontSize='20px'>Просмотрели 141</Typography>
                                        </Stack>
                                    </Stack>
                                )
                            }
                            <Stack>
                                {
                                    session.role === ADMIN_ROLE && (
                                        <>
                                            <Typography variant='h5' mb={1}>Служебная информация:</Typography>
                                            <Typography  mb={1}>Будет использоваться звукоусиливающая аппаратура.
                                                Использование пиротехнических изделий не предусматривается. Программа состоит из вступления, показа мастер-класса и обучения.
                                            </Typography>
                                        </>
                                    )
                                }
                                {
                                    (session.role === ORGANIZER_ROLE || session.role === USER_ROLE) && (
                                        <>
                                            <Typography variant='h5' mb={1}>Организаторы:</Typography>
                                            <Stack direction='row' alignItems='center' gap={1}>
                                                <AccountCircleOutlinedIcon fontSize='large' />
                                                <Typography fontSize='20px'>Сибиряков Матвей Евгеньевич</Typography>
                                            </Stack>
                                        </>)
                                }
                            </Stack>
                        </Stack>
                        {
                            session.role === ADMIN_ROLE && <RejectionReason/>
                        }
                        {
                            (session.role === USER_ROLE || session.role === ORGANIZER_ROLE) && <UIButton sx={{width: 270}} onClick={() => navigate('/issue/5')}>Вопросы</UIButton>
                        }
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
};
