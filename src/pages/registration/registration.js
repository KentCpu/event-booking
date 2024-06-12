import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography} from "@mui/material";
import {UIButton} from "../../components/ui/button";
import {PROFILE_PAGE_PATH, REGISTRATION_PAGE_PATH} from "../../const/path-page";
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
        status: 'legalEntity',
        organization: '',
    });

    const onChangeField = (event) => {
        setRegistrationData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    const onChangeStatus = (event) => {
        setRegistrationData(prevData => ({...prevData, status: event.target.value}));
    }

    const registration = () => {
        navigate(PROFILE_PAGE_PATH);
    }

    return (
        <Stack direction='row' justifyContent='center' alignItems='center' height='100vh'>
            <Stack width='400px' component='form' gap={2}>
                <Typography variant="h1" fontSize='32px' align='center'>Регистрация организатора</Typography>
                <TextField
                    name="name"
                    size='small'
                    placeholder="Введите имя"
                    required
                    value={registrationData.name}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    name="surname"
                    size='small'
                    placeholder="Введите фамилию"
                    required
                    value={registrationData.surname}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    name="patronymic"
                    placeholder="Введите отчество"
                    size='small'
                    required
                    value={registrationData.patronymic}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    name="email"
                    placeholder="Укажите электронную почту"
                    size='small'
                    required
                    value={registrationData.email}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    size='small'
                    required
                    value={registrationData.password}
                    onChange={onChangeField}
                    fullWidth
                />
                <TextField
                    type="passowrd"
                    placeholder="Повторите пароль"
                    name="confirmPassword"
                    size='small'
                    required
                    value={registrationData.confirmPassword}
                    onChange={onChangeField}
                    fullWidth
                />
                <FormControl>
                    <FormLabel>Ваш статус?</FormLabel>
                    <RadioGroup
                        defaultValue="legalEntity"
                        value={registrationData.status}
                        onChange={onChangeStatus}
                    >
                        <FormControlLabel value="person" control={<Radio />} label="Физическое лицо" />
                        <FormControlLabel value="legalEntity" control={<Radio />} label="Юридическое лицо" />
                    </RadioGroup>
                </FormControl>
                {
                    registrationData.status === 'legalEntity' &&
                    <TextField
                        name="organization"
                        placeholder="Название организации"
                        size='small'
                        required
                        value={registrationData.organization}
                        onChange={onChangeField}
                        fullWidth
                    />
                }
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
