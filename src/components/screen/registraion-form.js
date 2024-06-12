import React, {useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Stack} from "@mui/material";
import {UIButton} from "../ui/button";
import {NavLink, useNavigate} from "react-router-dom";
import {PROFILE_PAGE_PATH, REGISTRATION_PAGE_PATH} from "../../const/path-page";

export const RegistrationForm = () => {
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
        navigate(PROFILE_PAGE_PATH);
    }

    return (
        <Stack gap={2}>
            <Typography variant="h1" fontSize='32px' align='center'>Регистрация</Typography>
            <TextField
                name="name"
                placeholder="Введите имя"
                size='small'
                required
                value={registrationData.name}
                onChange={onChangeField}
                fullWidth
            />
            <TextField
                name="surname"
                placeholder="Введите фамилию"
                size='small'
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
                size='small'
                name="password"
                required
                value={registrationData.password}
                onChange={onChangeField}
                fullWidth
            />
            <TextField
                type="confirmPassword"
                placeholder="Повторите пароль"
                size='small'
                name="password"
                required
                value={registrationData.confirmPassword}
                onChange={onChangeField}
                fullWidth
            />
            <UIButton
                variant="primary"
                onClick={registration}
            >
                Зарегистрироваться
            </UIButton>
            <NavLink to={REGISTRATION_PAGE_PATH} style={{textAlign: 'center'}}>Я организатор мероприятий</NavLink>
        </Stack>
    );
};
