import { Typography, TypographyProps } from '@mui/material';

interface TypographyCostumeProps extends TypographyProps {
    text: string;
}

export function DynaTypography({ text, ...rest }: TypographyCostumeProps) {
    return (
        <Typography {...rest}>{text}</Typography>
    )
}

