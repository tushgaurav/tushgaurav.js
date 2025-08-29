import React from "react";
import { Box, Newline, Text } from "ink";
import { Content } from "../ui/primitives.js";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { Section, Point } from "../ui/content.js";
import Link from "ink-link";
import TextInput from "ink-text-input";
import Spinner from 'ink-spinner';

const PAGER_LAMBDA_URL = "https://5alqtcbkzxszr4ulzkihkfa7rm0yoygl.lambda-url.ap-south-1.on.aws/"

export default function Contact() {
    return (
        <Content>
            <Gradient name="vice">
                <BigText font="tiny" text="Contact" />
            </Gradient>

            <Section>
                <Text>You can contact me via email or social media.</Text>
                <Newline />

                <Point>Email: <Link url="mailto:tushgaurav@gmail.com">tushgaurav@gmail.com</Link></Point>
                <Point>Twitter: <Link url="https://x.com/tushgaurav">tushgaurav</Link></Point>
                <Point>LinkedIn: <Link url="https://www.linkedin.com/in/tushgaurav/">tushgaurav</Link></Point>
                <Point>GitHub: <Link url="https://github.com/tushgaurav">tushgaurav</Link></Point>
                <Point>Website: <Link url="https://tushgaurav.in">tushgaurav.in</Link></Point>
            </Section>


            <PageMe />
        </Content>
    )
}

export function PageMe() {
    const [message, setMessage] = React.useState("");
    const [isSending, setIsSending] = React.useState(false);

    const handleSend = async () => {
        setIsSending(true);
        await fetch(PAGER_LAMBDA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        setIsSending(false);
    }

    return (
        <Box flexDirection="column">
            <Text>
                Page me:
            </Text>
            <Box
                paddingRight={1}
                paddingLeft={1}
                borderStyle="round"
                borderColor="gray"
                flexDirection="column"
            >
                <Box>
                    <Text>Your Message: </Text>
                    <TextInput
                        value={message}
                        onChange={setMessage}
                        onSubmit={handleSend}
                        placeholder="i'm just a fan"
                    />
                </Box>
            </Box>
            {isSending && (
                <Text>
                    <Spinner type="bouncingBall" /> Sending
                </Text>
            )}

            {!isSending && (
                <Text>
                    Press <Text color="cyan">Enter</Text> to send your message.
                </Text>
            )}
        </Box>
    )
}