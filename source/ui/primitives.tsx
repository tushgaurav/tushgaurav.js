import React from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";
// import BigText from "ink-big-text";

export function MainLayout({ children }: React.PropsWithChildren) {
    return (
        <Box>
            {children}
        </Box>
    )
}

type SideBarProps = {
    navItems: any;
    onSelect: (item: any) => void;
};

export function SideBar({ navItems, onSelect }: SideBarProps) {
    return (
        <Box
            borderStyle={'single'}
            height={'100%'}
            width={35}
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={2}
            paddingRight={2}
            flexDirection={'column'}
        >
            <Box marginBottom={1}>
                <Text color={'blueBright'} bold>@</Text>
                <Text color={'cyan'} bold>tushgaurav</Text>
            </Box>

            <SelectInput items={navItems} onSelect={onSelect} />
        </Box>
    );
}

export function Content({ children }: React.PropsWithChildren) {
    return (
        <Box
            borderStyle={'single'}
            height={'100%'}
            width={'100%'}
            flexDirection={'column'}
            paddingLeft={4}
            paddingRight={4}
        >
            {children}
        </Box>
    )
}