import { useContext } from "react"

import { Tabs, Tab } from "@mui/material"
import { useTheme } from "@mui/material/styles";

import MainContext from '../../context'
import { tabsData } from '../../constants/tabsData'
import { grey } from "@mui/material/colors";
const SidebarTabs = () => {

    const theme = useTheme();
    const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext);

    const data = tabsData();

    return (
        <Tabs
            orientation='vertical'
            variant='scrollable'
            scrollButton='auto'
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
            sx={{
                width: '100%',
                '& .MuiTabs-indicator': {
                    left: 0,
                    backgroundColor: "teal"
                },
                '& .MuiTab-root:hover': { backgroundColor: theme.palette.mode === "dark" ? "#363636" : grey[400] },
                '& .Mui-selected': {
                    color: "teal !important"
                }
            }}
        >
            {
                data.map((tab, index) => (
                    <Tab
                        sx={{
                            color: theme.palette.mode === "dark" ? "text.primary" : "text.secondary",
                            "&.MuiTab-root": {
                                minHeight: 50
                            },
                            fontSize: "small",
                            mx: 3,
                            my: 0.5,
                            borderRadius: 2
                        }}
                        key={index}
                        label={tab.lable}
                        icon={tab.icon}
                        iconPosition='start'
                        onClick={() => setDrawerOpen(false)}
                        {...tab}
                    />
                ))
            }

        </Tabs>
    )
}

export default SidebarTabs