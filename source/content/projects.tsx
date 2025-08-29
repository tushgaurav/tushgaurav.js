import React from "react";
import { Content } from "../ui/primitives.js";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";


export default function Projects() {
    return (
        <Content>
            <Gradient name="vice">
                <BigText font="tiny" text="Projects" />
            </Gradient>

        </Content>
    );
}