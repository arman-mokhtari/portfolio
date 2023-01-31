import {
    HomeRounded,
    SentimentSatisfiedRounded,
    TerminalRounded,
    TextSnippetRounded,
    ConnectWithoutContactRounded,
} from '@mui/icons-material';

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {

    const tabs = [
        { lable: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { lable: "درباره من", icon: <SentimentSatisfiedRounded />, ...tabProps(1) },
        { lable: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { lable: "فعالیت های من", icon: <TerminalRounded />, ...tabProps(3) },
        { lable: "ارتباط با من", icon: <ConnectWithoutContactRounded />, ...tabProps(4) },
    ];
    return tabs;
};