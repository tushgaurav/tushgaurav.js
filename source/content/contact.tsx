import React from "react";
import { Box, Newline, Text } from "ink";
import { Content } from "../ui/primitives.js";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { Section, Point } from "../ui/content.js";
import Link from "ink-link";
import TextInput from "ink-text-input";
import Spinner from 'ink-spinner';

export default function Contact() {
    const [query, setQuery] = React.useState("");
    const [isSending, setIsSending] = React.useState(false);

    const handleSend = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
        }, 2000);
        console.log(query);
    }

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

            <Box
                marginTop={1}
                paddingRight={1}
                paddingLeft={1}
                borderStyle="round"
                borderColor="gray"
            >
                <Text>Your Message: </Text>
                <TextInput
                    value={query}
                    onChange={setQuery}
                    onSubmit={handleSend}
                    placeholder="choore maanja"
                />
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

        </Content>
    )
}