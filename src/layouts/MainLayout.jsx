import { ThemeProvider } from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { lightTheme, darkTheme } from "./theme";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, mode }) => {
    const theme = mode === "dark" ? darkTheme : lightTheme;

    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Grid2
                        sx={{
                            height: "100vh"
                        }} container>
                        {children}
                    </Grid2>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout; 