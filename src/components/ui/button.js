import {Button, styled} from "@mui/material";

const PrimaryButton = styled(Button)({
    fontSize: '16px',
    textTransform: 'none',
    backgroundColor: "#48ACD7",
    color: "#000000",
    borderRadius: '10px',
    padding: '8px 5px',

    '&:hover': {
        backgroundColor: "#48ACD7",
    }
});

const SecondaryButton = styled(Button)({
    fontSize: '16px',
    textTransform: 'none',
    backgroundColor: "#FF9640",
    color: "#000000",
    borderRadius: '10px',
    padding: '8px 5px',

    '&:hover': {
        backgroundColor: "#FF9640",
    }
});

export const UIButton = ({variant = 'primary', ...otherProps}) => {
    if(variant === 'primary') {
        return <PrimaryButton {...otherProps}/>
    }else if(variant === 'secondary') {
        return <SecondaryButton {...otherProps}/>
    }
};
