import React from 'react';
import {Autocomplete, FormGroup, Stack, TextField, Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {categories} from "../create-event/create-event";
import {DatePicker} from "@mui/x-date-pickers";
import {UIButton} from "../../components/ui/button";
import {useSession} from "../../providers/session-context";
import {ADMIN_ROLE} from "../../const/role";


export const FilterEvents = () => {
    const {session} = useSession();

    return (
        <Stack maxWidth='400px'>
            <Typography variant='h4' mb={1}>Фильтры</Typography>
            <Stack mb={2}>
                {session.role === ADMIN_ROLE &&
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Забаненные" />
                        <FormControlLabel control={<Checkbox />} label="Отмененные" />
                        <FormControlLabel control={<Checkbox />} label="Ожидают рассмотрения" />
                        <FormControlLabel control={<Checkbox />} label="Проведенные" />
                        <FormControlLabel control={<Checkbox />} label="Соглашенные" />
                    </FormGroup>
                }
                <Typography variant='h5'>Цена</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Бесплатно" />
                </FormGroup>
                <Stack direction='row' gap={2} mb={2}>
                    <TextField
                        size='small'
                        label="0т 100"
                        fullWidth
                    />
                    <TextField
                        size='small'
                        label="До 2500"
                        fullWidth
                    />
                </Stack>
                <Autocomplete
                    multiple
                    options={categories}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.name}
                    mb={2}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.name}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField size='small' {...params} placeholder="Тематики" />
                    )}
                />
            </Stack>
            <Typography variant='h5' mb={1}>Время проведения</Typography>
            <Stack direction='row' mb={2} gap={2}>
                <DatePicker
                    label="Начало"
                    slotProps={{ textField: { size: 'small' } }}
                />
                <DatePicker
                    label="Конец"
                    slotProps={{ textField: { size: 'small' } }}
                />
            </Stack>
            <Typography variant='h5' mb={1}>Число участников</Typography>
            <Stack direction='row' mb={2} gap={2}>
                <TextField
                    size='small'
                    label="0т 5"
                    fullWidth
                />
                <TextField
                    size='small'
                    label="До 15"
                    fullWidth
                />
            </Stack>
            <UIButton>Искать</UIButton>
        </Stack>
    );
};
