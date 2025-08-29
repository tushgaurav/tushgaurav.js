import React from "react"
import { Box, Text, Newline } from "ink"

export function Section({ children, ...props }: { children: React.ReactNode, [key: string]: any }) {
    return (
        <Box marginBottom={1} {...props}>
            <Text>
                {children}
            </Text>
        </Box>
    )
}

export function Point({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Text>• {children}</Text>
            <Newline />
        </>
    )
}