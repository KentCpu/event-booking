import {Header} from "../../components/screen/header";
import {Autocomplete, Checkbox, Container, Stack, TextField, Typography} from "@mui/material";
import {TextareaAutosize} from '@mui/base/TextareaAutosize';
import {DatePicker} from "@mui/x-date-pickers";
import {UIButton} from "../../components/ui/button";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const categories = [
    {
        id: 1,
        name: 'Музыка',
    },
    {
        id: 2,
        name: 'Уроки',
    },
    {
        id: 3,
        name: 'Танцы',
    },
]

export const CreateEventPage = () => {
    return (
        <>
            <Header />
                <Container maxWidth="xl">
                    <Typography mt={2} mb={1} variant='h4'>Здесь вы можете создать мероприятие, делайте все по шагам и все получится!</Typography>
                    <Stack width='900px' gap={1}>
                        <Typography>1. Укажите название будущего мероприятия:</Typography>
                        <TextField
                            size='small'
                            label="Название"
                            fullWidth
                        />
                        <Typography>2. Укажите точную дату и время проведения мероприятия:</Typography>
                        <Stack direction='row' alignItems='center' gap={1}>
                            <Typography>Дата:</Typography>
                            <DatePicker
                                label="Дата"
                                slotProps={{ textField: { size: 'small' } }}
                            />
                            <Typography>Время:</Typography>
                            <TextField
                                size='small'
                                label="Начало"
                                fullWidth
                                sx={{
                                    width: '160px'
                                }}
                            />
                            <TextField
                                size='small'
                                label="Конец"
                                fullWidth
                                sx={{
                                    width: '160px'
                            }}
                            />
                        </Stack>
                        <Typography>3. Укажите место проведения мероприятия:</Typography>
                        <TextField
                            size='small'
                            label="Место проведения"
                            fullWidth
                        />
                        <Typography>4. Опишите мероприятие:</Typography>
                        <TextareaAutosize
                            placeholder="Опишите мероприятие"
                            style={{ width: "100%", height: 120 }}
                        />
                        <Typography>5. Укажите количество участников:</Typography>
                        <TextField size='small' label="Количество участников" />
                        <Typography>6. Укажите стоимость посещения мероприятия:</Typography>
                        <TextField size='small' label="Стоимость билета" />
                        <Typography>7. Загрузите фотографии которые привлекут посетителей на ваше мероприятие</Typography>
                        <input type="file" name="avatar" accept="image/png, image/jpeg"  />
                        <Typography>8. Укажите тематику вашего мероприятия</Typography>
                        <Autocomplete
                            multiple
                            options={categories}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
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
                        <Typography>9. Укажите служебную информацию</Typography>
                        <TextareaAutosize
                            placeholder="Служебная информацию"
                            style={{ width: "100%", height: 120 }}
                        />
                        <UIButton variant='secondary'>Отправить</UIButton>
                    </Stack>
                </Container>
        </>
    );
};
