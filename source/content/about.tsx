import React from "react";
// import Link from "ink-link";
import { Box, Newline, Text } from "ink";
import { Content } from "../ui/primitives.js";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

function Section({ children }: { children: React.ReactNode }) {
    return (
        <Box marginBottom={1}>
            <Text>
                {children}
            </Text>
        </Box>
    )
}
function Point({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Text>• {children}</Text>
            <Newline />
        </>
    )
}

export default function About() {
    return (
        <Content>
            <Gradient name="vice">
                <BigText font="tiny" text="About" />
            </Gradient>

            <Section>
                <Text>Hi, I am Tushar Gaurav -- software developer from Noida, India.</Text>
                <Newline />

                <Point>I ship web and developer tooling with React</Point>
                <Point>I maintain dotfiles and experiment with design systems</Point>
                <Point>I am a big fan of open source and I love to contribute to the community</Point>
            </Section>

            <Section>
                <Text>
                    <Text color="cyan">Nodebench</Text> is a platform for benchmarking Node.js performance.
                </Text>
            </Section>

        </Content>
    )
}