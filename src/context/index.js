import { createContext } from "react";

export default createContext({
    pageNumber: 0,
    handlePageNumber: () => { },
    gandleThemeChange: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { },
});