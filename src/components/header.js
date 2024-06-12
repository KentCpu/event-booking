import {Box, Container, IconButton, Stack} from "@mui/material";
import {useSession} from "../providers/session-context";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {GUEST_ROLE} from "../const/role";
import {NavLink} from "react-router-dom";
import {LOGIN_PAGE_PATH} from "../const/path-page";
import Logo from '../assets/logo.png';

export const Header = () => {
    const {session} = useSession();

    return (
        <Stack component='header' height='55px' backgroundColor='#48ACD7' paddingY='5px'>
            <Container maxWidth="xl">
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <img src={Logo} alt='Логотип' style={{height: '50px'}} />
                    {
                        session.role === GUEST_ROLE && (
                            <Stack direction='row' alignItems='center' >
                                <NavLink to={LOGIN_PAGE_PATH} style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}>Вход</NavLink>
                                <IconButton size='large'>
                                    <AccountCircleOutlinedIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                        )
                    }
                </Stack>
            </Container>
        </Stack>
    );
};
