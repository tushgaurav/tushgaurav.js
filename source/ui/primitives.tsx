import React, { useState, useEffect } from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";
import Spinner from "ink-spinner";

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

const getLatestVersion = async (): Promise<string> => {
    const res = await fetch('https://registry.npmjs.org/-/package/tushgaurav/dist-tags')
    const data = await res.json();
    return data.latest;
}

export function SideBar({ navItems, onSelect }: SideBarProps) {
    const [latest_version, setLatestVersion] = useState<string | null>(null);

    useEffect(() => {
        getLatestVersion().then(setLatestVersion);
    }, []);

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
            <Box marginTop={1} marginBottom={1} alignItems={'center'} justifyContent={'center'}>
                <Text color={'blueBright'} bold>@</Text>
                <Text color={'cyan'} bold>tushgaurav</Text>
            </Box>


            <Box height={'100%'} alignItems={'flex-start'} justifyContent={'center'}>
                <SelectInput items={navItems} onSelect={onSelect} />
            </Box>

            <Box alignItems={'center'} justifyContent={'center'}>
                {latest_version && (
                    <Text color={'gray'}>v{latest_version}</Text>
                )}
                {!latest_version && (
                    <Spinner type="bouncingBall" />
                )}
            </Box>
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