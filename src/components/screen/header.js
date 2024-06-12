import {Container, IconButton, Stack} from "@mui/material";
import {useSession} from "../../providers/session-context";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {GUEST_ROLE} from "../../const/role";
import {NavLink, useNavigate} from "react-router-dom";
import {HOME_PAGE_PATH, LOGIN_PAGE_PATH, PROFILE_PAGE_PATH} from "../../const/path-page";
import Logo from '../../assets/logo.png';
import { useState } from "react";
import {UIModal} from "../ui/modal";
import {RegistrationForm} from "./registraion-form";

export const Header = () => {
    const navigate = useNavigate();
    const {session} = useSession();
    const [openRegistrationModal, setOpenRegistrationModal] = useState(false);

    const onClickProfile = () => {
        if(session.role === GUEST_ROLE) {
            setOpenRegistrationModal(true);
            return;
        }
        navigate(PROFILE_PAGE_PATH);
    }

    return (
        <Stack component='header' height='55px' backgroundColor='#48ACD7' paddingY='5px'>
            <Container maxWidth="xl">
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <img src={Logo} alt='Логотип' style={{height: '50px', cursor: 'pointer'}} onClick={() => navigate(HOME_PAGE_PATH)} />
                    {
                        session.role === GUEST_ROLE && (
                            <Stack direction='row' alignItems='center' >
                                <NavLink to={LOGIN_PAGE_PATH} style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}>Вход</NavLink>
                                <IconButton size='large' onClick={onClickProfile}>
                                    <AccountCircleOutlinedIcon fontSize='large' />
                                </IconButton>
                                <UIModal
                                    open={openRegistrationModal}
                                    onClose={() => setOpenRegistrationModal(false)}
                                >
                                    <RegistrationForm/>
                                </UIModal>
                            </Stack>
                        )
                    }
                </Stack>
            </Container>
        </Stack>
    );
};
