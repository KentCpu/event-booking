import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography} from "@mui/material";
import {UIButton} from "../../components/button";
import {REGISTRATION_PAGE_PATH} from "../../const/path-page";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const [registrationData, setRegistrationData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        confirmPassword: '',
        userRole: '',
    });

    const onChangeField = (event) => {
        setRegistrationData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    const registration = () => {
        navigate(REGISTRATION_PAGE_PATH);
    }

    return (
        <Stack direction='row' justifyContent='center' alignItems='center' height='100vh'>
            <Stack width='400px' component='form' gap={2}>
                <Typography variant="h1" fontSize='32px' align='center'>Регистрация</Typography>
                <TextField
                    name="name"
                    label="Введите имя"
                    required
                    value={registrationData.name}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    name="surname"
                    label="Введите фамилию"
                    required
                    value={registrationData.surname}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    name="patronymic"
                    label="Введите отчество"
                    required
                    value={registrationData.patronymic}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    name="email"
                    label="Укажите электронную почту"
                    required
                    value={registrationData.email}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    type="password"
                    label="Введите пароль"
                    name="password"
                    required
                    value={registrationData.password}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    type="confirmPassword"
                    label="Повторите пароль"
                    name="password"
                    required
                    value={registrationData.confirmPassword}
                    onChange={onChangeField}
                    fullWidth
                />
                <FormControl>
                    <FormLabel>Кто вы?</FormLabel>
                    <RadioGroup defaultValue="user">
                        <FormControlLabel value="organizer" control={<Radio />} label="Организатор" />
                        <FormControlLabel value="user" control={<Radio />} label="Посетитель" />
                    </RadioGroup>
                </FormControl>
                <UIButton
                    variant="primary"
                    onClick={registration}
                >
                    Зарегистрироваться
                </UIButton>
            </Stack>
        </Stack>
    );
};
