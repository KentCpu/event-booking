import {Container, IconButton, Stack, Typography} from "@mui/material";
import {useSession} from "../../providers/session-context";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {ADMIN_ROLE, GUEST_ROLE, ORGANIZER_ROLE, USER_ROLE} from "../../const/role";
import {NavLink, useNavigate} from "react-router-dom";
import {
    HOME_PAGE_PATH,
    ISSUE_PAGE_PATH,
    LOGIN_PAGE_PATH,
    PROFILE_PAGE_PATH,
    STATISTICS_PAGE_PATH
} from "../../const/path-page";
import Logo from '../../assets/logo.png';
import { useState } from "react";
import {UIModal} from "../ui/modal";
import {RegistrationForm} from "./registraion-form";

export const Header = () => {
    const navigate = useNavigate();
    const {session} = useSession();

    const onClickProfile = () => {
        navigate(PROFILE_PAGE_PATH);
    }

    return (
        <Stack component='header' height='55px' backgroundColor='#48ACD7' paddingY='5px'>
            <Container maxWidth="xl">
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' alignItems='center'>
                        <img src={Logo} alt='Логотип' style={{height: '50px', cursor: 'pointer', marginRight: '50px'}} onClick={() => navigate(HOME_PAGE_PATH)} />
                        <Typography mt={1}>Кемерово</Typography>
                    </Stack>
                    {
                        session.role === GUEST_ROLE && (
                            <Stack direction='row' alignItems='center' >
                                <NavLink to={LOGIN_PAGE_PATH} style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}>Вход</NavLink>
                                <IconButton size='large' onClick={() => navigate(LOGIN_PAGE_PATH)}>
                                    <AccountCircleOutlinedIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                        )
                    }
                    {
                        session.role === ORGANIZER_ROLE && (
                            <Stack direction='row' alignItems='center' gap={5}>
                                <NavLink to={'/search-events'} style={{color: '#000'}}>Мои мероприятия</NavLink>

                                <NavLink to={ISSUE_PAGE_PATH} style={{color: '#000'}}>Вопросы</NavLink>
                                <Stack direction='row' alignItems='center' onClick={onClickProfile}>
                                    <Typography>Сибиряков Матвей</Typography>
                                    <IconButton size='large'>
                                        <AccountCircleOutlinedIcon fontSize='large' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        )
                    }
                    {
                        session.role === ADMIN_ROLE && (
                            <Stack direction='row' alignItems='center' gap={5}>
                                <NavLink to={'/search-events'} style={{color: '#000'}}>Мероприятия</NavLink>
                                <Stack direction='row' alignItems='center' onClick={onClickProfile}>
                                    <Typography>Админ</Typography>
                                    <IconButton size='large' >
                                        <AccountCircleOutlinedIcon fontSize='large' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        )
                    }

                    {
                        session.role === USER_ROLE && (
                            <Stack direction='row' alignItems='center' gap={5}>
                                <NavLink to={'/search-events'} style={{color: '#000'}}>Мои мероприятия</NavLink>
                                <Stack direction='row' alignItems='center' onClick={onClickProfile}>
                                    <Typography>Егор Копытов</Typography>
                                    <IconButton size='large'>
                                        <AccountCircleOutlinedIcon fontSize='large' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        )
                    }
                </Stack>
            </Container>
        </Stack>
    );
};
