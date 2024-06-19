import {Header} from "../../components/screen/header";
import {Autocomplete, Checkbox, Container, FormControlLabel, Stack, TextField, Typography} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import {UIButton} from "../../components/ui/button";

const categories = [
    {
        id: 1,
        name: 'Танцы',
    },
    {
        id: 2,
        name: 'Cпорт',
    },
    {
        id: 3,
        name: 'Музыка',
    },
]

export const StatisticsPage = () => {
    return (
        <Stack>
            <Header/>
            <Container maxWidth="xl">
                <Stack mt={3} maxWidth='510px'>
                    <Typography variant='h4' mb={2}>Статистика</Typography>
                    <Typography fontSize='20px'>Дата проведения</Typography>
                    <Stack direction='row' gap={3} marginBottom='24px'>
                        <TextField
                            size='small'
                            label="Начало"
                            fullWidth
                            sx={{
                                width: '180px'
                            }}
                        />
                        <TextField
                            size='small'
                            label="Конец"
                            fullWidth
                            sx={{
                                width: '180px'
                            }}
                        />
                    </Stack>
                    <Typography fontSize='20px'>Укажите тематику мероприятия</Typography>
                    <Autocomplete
                        multiple
                        options={categories}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.name}
                        sx={{marginBottom: '24px'}}
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
                    <Typography fontSize='20px'>Вывести по:</Typography>
                    <FormControlLabel control={<Checkbox />} label="Просмотры" />
                    <FormControlLabel control={<Checkbox />} label="Средняя оценка" />
                    <FormControlLabel control={<Checkbox />} label="Количество посетителей" />
                    <UIButton variant='secondary' sx={{marginTop: '24px'}}>Получить</UIButton>
                </Stack>
            </Container>
        </Stack>
    );
};
