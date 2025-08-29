import React, { useState } from "react";
import { Content } from "../ui/primitives.js";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { useInput } from "ink";
import { Box, Text } from "ink";
import Link from "ink-link";

const PROJECTS_COUNT = 3 - 1; // 0-indexed

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(0);

    useInput((_, key) => {
        if (key.leftArrow) {
            setCurrentPage((prev) => {
                if (prev === 0) {
                    return 0;
                }
                return prev - 1;
            });
        }
        if (key.rightArrow) {
            setCurrentPage((prev) => {
                if (prev === PROJECTS_COUNT) {
                    return 0;
                }
                return prev + 1;
            });
        }
    });

    return (
        <Content>
            <Gradient name="vice">
                <BigText font="tiny" text="Projects" />
            </Gradient>

            <Box height="100%">
                {currentPage === 0 && <EliteSDK />}
                {currentPage === 1 && <NIETAttendance />}
                {currentPage === 2 && <NodeBench />}
            </Box>

            <Box
                paddingBottom={1}
                paddingRight={1}
                paddingLeft={1}
                borderStyle="round"
                borderColor="gray"
            >
                <Text>Page <Text color="cyan">{currentPage + 1}</Text> of <Text color="cyan">{PROJECTS_COUNT + 1}.</Text></Text>
                <Text> Press <Text color="cyan">left</Text> or <Text color="cyan">right</Text> arrow to navigate.</Text>
            </Box>

        </Content>
    );
}


function EliteSDK() {
    return (
        <Box flexDirection="column" gap={1} paddingLeft={1} paddingRight={1}>
            <Text color="cyan" bold>Elite Robots Python SDK</Text>
            <Text>Built and open sourced a Python SDK for Elite Robots EC Series cobots, translating socket based command interfaces from the official manuals into a clean, Pythonic API.</Text>
            <Text>Reduced repetitive boilerplate from the official manuals by consolidating common patterns into reusable helpers.</Text>
            <Text>Packaged and published the library with modern Python tooling, MIT licensing, and PyPI distribution for easy installation and reuse.</Text>
            <Box marginTop={1} width="80%" flexDirection="column">
                <Text>Links:</Text>
                <Link url="https://github.com/tushgaurav/EliteEC-SDK">View on GitHub</Link>
                <Link url="https://pypi.org/project/elite-ec-sdk/">View on PyPI</Link>
            </Box>
        </Box>
    )
}

function NIETAttendance() {
    return (
        <Box flexDirection="column" gap={1} paddingLeft={1} paddingRight={1}>
            <Text color="cyan" bold>NIET Attendance Chrome Extension</Text>
            <Text>NIET here stands for Noida Institute of Engineering and Technology, where I was a computer science student.</Text>
            <Text>Built and shipped a zero-config Chrome extension that un-hides NIET ERP attendance with surgical DOM tweaks (think: goodbye display:none), packaged on Manifest V3 with minimal permissions and no data collection, a friendly UI, clear README, one‑click install on the Chrome Web Store, open‑sourced code which was actually useful for my classmates as seen in the awesome 4.9 average rating.</Text>
            <Text>I had around 400 users in the first week, and it was downloaded 1000+ times in the first month. Now that I'm done with college, I'm not maintaining it anymore.</Text>

            <Box marginTop={1} width="80%" flexDirection="column">
                <Text>Links:</Text>
                <Link url="https://github.com/tushgaurav/NIETAttendance">View on GitHub</Link>
            </Box>
        </Box>
    )
}

function NodeBench() {
    return (
        <Box flexDirection="column" gap={1} paddingLeft={1} paddingRight={1}>
            <Text color="cyan" bold>NodeBench — Benchmarks that Actually Matter</Text>
            <Text>
                Built nodebench.com, my hardware-nerd playground for tech news and honest SBC/IoT
                benchmarks I wired up a clean authoring pipelines with deep
                dives equally snackable—because specs are cute, but measured
                performance is hotter.
            </Text>
            <Box marginTop={1} width="80%" flexDirection="column">
                <Text>Links:</Text>
                <Link url="https://github.com/prokits/nodebench-site">View on GitHub</Link>
                <Link url="https://www.nodebench.com/articles">Articles</Link>
            </Box>
        </Box>)
}