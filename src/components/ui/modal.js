import {Box, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

export const UIModal = ({open, onClose, children}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    );
};
