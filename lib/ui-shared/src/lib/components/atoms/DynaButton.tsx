import { Button } from "@mui/material"

export function DynaButton({ text, ...rest }: { text: string }) {
    return (<Button {...rest}>{text}</Button>
    )
}

