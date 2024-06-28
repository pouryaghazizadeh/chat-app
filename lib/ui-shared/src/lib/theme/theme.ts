import { createTheme } from "@mui/material/styles";

const isDark = true
export const theme = createTheme({
    palette:{
        mode:isDark?"dark":"light",
        primary:{
            main:"#1057FF"
        },
        background:{
            default:isDark?"#131B25":"#ffffff",
            paper:isDark?"#212934":"#F3F4F6"
        }
    }
});
