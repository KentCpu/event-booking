import {Button, Checkbox, FormControlLabel, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {HOME_PAGE_PATH, REGISTRATION_PAGE_PATH} from "../../const/path-page";
import {UIButton} from "../../components/ui/button";
import {RegistrationForm} from "../../components/screen/registraion-form";
import {UIModal} from "../../components/ui/modal";


export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [openRegistrationModal, setOpenRegistrationModal] = useState(false);

    const onChangeEmail = (event) => setEmail(event.target.value);
    const onChangePassword = (event) => setPassword(event.target.value);

    const login = () => {
        navigate(HOME_PAGE_PATH);
    }

    return (
        <Stack direction='row' justifyContent='center' alignItems='center' height='100vh'>
            <Stack width='400px' component='form' gap={2}>
                <Typography variant="h1" fontSize='32px' align='center'>Вход</Typography>
                <TextField
                    name="email"
                    label="Электронная почта"
                    required
                    value={email}
                    onChange={onChangeEmail}
                    fullWidth
                />
                <TextField
                    type="password"
                    label="Пароль"
                    name="password"
                    required
                    value={password}
                    onChange={onChangePassword}
                    fullWidth
                />
                <FormControlLabel control={<Checkbox />} label="Запомнить меня" />
                <UIButton
                    variant="primary"
                    onClick={login}
                >
                    Войти
                </UIButton>
                <UIModal
                    open={openRegistrationModal}
                    onClose={() => setOpenRegistrationModal(false)}
                >
                    <RegistrationForm/>
                </UIModal>
                <Typography>Еще нет аккаунта? <Button sx={{
                    padding: 0,
                    color: '#1874CF',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'none',
                    }
                }} onClick={() => setOpenRegistrationModal(true)}>Зарегистрироваться!</Button></Typography>
            </Stack>
        </Stack>
    );
};

