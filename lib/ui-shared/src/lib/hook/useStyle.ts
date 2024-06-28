import { useTheme } from '@mui/material/styles';

export function useStyle(styleCallback:any) {
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    return styleCallback(theme);
  };
}

