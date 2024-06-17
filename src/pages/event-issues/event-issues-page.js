import {Header} from "../../components/screen/header";
import {Container, Divider, Stack, TextField, Typography} from "@mui/material";

export const Issue = ({name, question, answer}) => {
    return (
        <Stack direction='row' border='1px solid #000' borderRadius='16px'>
            <Stack flex='1 1 50%' borderRight='1px solid #000'>
                <Stack padding='14px 18px'>
                    <Typography color='#585858'>{name}</Typography>
                    <Typography>{question}</Typography>
                </Stack>
            </Stack>
            <Stack flex='1 1 50%'>
                <Stack padding='14px 18px'>
                    <Typography color='#585858'>Организатор</Typography>
                    <Typography>{answer}</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export const EventIssuesPage = () => {
    return (
        <Stack>
            <Header />
            <Container maxWidth='xl'>
                <Stack mt={3} mb={3}>
                    <Typography mb={2} variant='h4'>Вопросы о мероприятии</Typography>
                    <Typography variant='h5' mb={1}>Задайте ваш вопрос:</Typography>
                    <TextField
                        placeholder="Текст вопроса"
                        multiline
                        rows={8}
                        sx={{width: 780}}
                    />
                </Stack>
                <Stack>
                    <Stack mb={2}>
                        <Typography>Заданные вопросы</Typography>
                        <Divider />
                        <Stack mt={2} gap={1}>
                            <Issue name='Алексей Игорев' question='Можно ли с собой взять собачку?' answer='да'  />
                            <Issue name='Алексей Игорев' question='Можно ли с собой взять собачку?' answer='да'  />
                            <Issue name='Алексей Игорев' question='Можно ли с собой взять собачку?' answer='да'  />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
};
