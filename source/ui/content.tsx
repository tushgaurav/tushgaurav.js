import React from "react"
import { Box, Text, Newline } from "ink"

export function Section({ children }: { children: React.ReactNode }) {
    return (
        <Box marginBottom={1}>
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