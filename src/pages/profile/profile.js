import {
    Autocomplete,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Header} from "../../components/screen/header";
import {DatePicker} from "@mui/x-date-pickers";
import NoProfileImg from '../../assets/no-profile-img.png';
import {UIButton} from "../../components/ui/button";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {ORGANIZER_ROLE, USER_ROLE} from "../../const/role";
import {useSession} from "../../providers/session-context";

const categories = [
    {
        id: 1,
        name: 'Музыка',
    },
    {
        id: 2,
        name: 'Рисование',
    },
    {
        id: 3,
        name: 'История',
    },
]

export const ProfilePage = () => {
    const {session} = useSession();

    return (
        <Stack>
            <Header/>
            <Stack mt={2}>
                <Container maxWidth='xl'>
                    <Typography mb={2} variant='h4'>Профиль</Typography>
                    <Stack direction='row' justifyContent='space-between' mb={2}>
                        <Stack gap={1}>
                            <img src={NoProfileImg} alt='Профиль' />
                            <Button>(Изменить/Добавить) фото</Button>
                        </Stack>
                        <Stack gap={3} flex='0 1 900px'>
                            <Typography fontSize='20px'>Личные данные</Typography>
                            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography>Имя</Typography>
                                <TextField
                                    size='small'
                                    name="email"
                                    placeholder="Имя"
                                    sx={{width: 773}}
                                />
                            </Stack>
                            <Stack direction='row' gap={1} alignItems='center'  justifyContent='space-between'>
                                <Typography>Фамилия</Typography>
                                <TextField
                                    size='small'
                                    placeholder="Фамилия"
                                    fullWidth
                                    sx={{width: 773}}
                                />
                            </Stack>
                            <Stack direction='row' gap={1} alignItems='center' justifyContent='space-between'>
                                <Typography>Отчество</Typography>
                                <TextField
                                    size='small'
                                    name="email"
                                    placeholder="Отчество"
                                    fullWidth
                                    sx={{width: 773}}
                                />
                            </Stack>
                            <Stack direction='row' alignItems='center' gap={1}>
                                <Typography>Дата рождения</Typography>
                                <DatePicker
                                    placeholder="Дата рождения"
                                    slotProps={{ textField: { size: 'small', sx: {flexGrow: 1}, } }}
                                />
                                {
                                    session.role === ORGANIZER_ROLE &&  <TextField
                                        size='small'
                                        name="email"
                                        placeholder="Номер телефона"
                                        fullWidth
                                    />
                                }
                            </Stack>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="other"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Женский" />
                                    <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                                    <FormControlLabel value="other" control={<Radio />} label="Не указан" />
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack direction='row' gap='33px'>
                        <Typography>О себе</Typography>
                        <TextField
                            placeholder="Текст вопроса"
                            multiline
                            rows={8}
                            sx={{width: '94%'}}
                        />
                        {/*<TextareaAutosize style={{ width: '95%',  height: 190 }}/>*/}
                    </Stack>
                    {
                        session.role === USER_ROLE &&
                    <Stack direction='row' alignItems='center' gap={1}>
                        <Typography>Интересы</Typography>
                        <Autocomplete
                            multiple
                            fullWidth
                            size='small'
                            options={categories}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            sx={{
                                mt: 2,
                                width: 500
                            }}
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
                                <TextField placeholder="Интересы" {...params} />
                            )}
                        />
                    </Stack>
                    }
                    <Stack direction='row' gap={1} justifyContent='center' mt={2} mb={1}>
                        <UIButton sx={{width: '300px'}}>Сохранить изменения</UIButton>
                        <UIButton variant='secondary' sx={{width: '300px'}}>Сбросить</UIButton>
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
};
