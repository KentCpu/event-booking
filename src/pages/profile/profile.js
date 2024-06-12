import {
    Box,
    FormControlLabel,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
    Container,
    Button, Autocomplete, Checkbox
} from "@mui/material";
import {Header} from "../../components/screen/header";
import {DatePicker} from "@mui/x-date-pickers";
import NoProfileImg from '../../assets/no-profile-img.png';
import {TextareaAutosize} from "@mui/base/TextareaAutosize";
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
        name: 'Уроки',
    },
    {
        id: 3,
        name: 'Танцы',
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
                            <Stack direction='row' gap={1} alignItems='center'>
                                <Typography>Имя</Typography>
                                <TextField
                                    size='small'
                                    name="email"
                                    placeholder="Имя"
                                    fullWidth
                                />
                            </Stack>
                            <Stack direction='row' gap={1} alignItems='center'>
                                <Typography>Фамилия</Typography>
                                <TextField
                                    size='small'
                                    placeholder="Фамилия"
                                    fullWidth
                                />
                            </Stack>
                            <Stack direction='row' gap={1} alignItems='center'>
                                <Typography>Отчество</Typography>
                                <TextField
                                    size='small'
                                    name="email"
                                    placeholder="Отчество"
                                    fullWidth
                                />
                            </Stack>
                            <Stack direction='row' gap={2} alignItems='center'>
                                <Typography>Дата рождения</Typography>
                                <DatePicker
                                    placeholder="Дата рождения"
                                    slotProps={{ textField: { size: 'small' } }}
                                />
                                {
                                    session.role === USER_ROLE && <Autocomplete
                                        multiple
                                        fullWidth
                                        size='small'
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
                                            <TextField placeholder="Интересы" {...params} />
                                        )}
                                    />
                                }
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
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography>О себе</Typography>
                        <TextareaAutosize style={{ width: '95%',  height: 190 }}/>
                    </Stack>
                    <Stack direction='row' gap={1} justifyContent='center' mt={2}>
                        <UIButton sx={{width: '300px'}}>Сохранить изменения</UIButton>
                        <UIButton variant='secondary' sx={{width: '300px'}}>Сбросить</UIButton>
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
};
