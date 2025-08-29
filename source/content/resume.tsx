import React from "react";
import { Content } from "../ui/primitives.js";
import Table from '../ui/table.js'
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

const resumeData = [
  {
    Section: "",
    Item: "LinkedIn",
    Details: "https://www.linkedin.com/in/tushgaurav/",
  },
  {
    Section: "",
    Item: "GitHub",
    Details: "https://github.com/tushgaurav",
  },
  {
    Section: "",
    Item: "Email",
    Details: "iamtushgaurav@gmail.com",
  },
  {
    Section: "",
    Item: "Website",
    Details: "tushgaurav.in",
  },
  {
    Section: "Education",
    Item: "B.Tech",
    Details: "CSE (2020–2024), NIET, Greater Noida",
  },
//   {
//     Section: "Experience",
//     Item: "Software Developer",
//     Details:
//       "Orangewood Labs (Sep 2023–Present), Noida — RoboGPT; -60% training time; +35% adoption",
//   },
//   {
//     Section: "Experience",
//     Item: "Robotic Control App",
//     Details:
//       "Real-time 3D (gRPC, WebSockets); -40% setup; +25% precision; client deployments (+30% efficiency; $90k)",
//   },
//   {
//     Section: "Experience",
//     Item: "Site Performance",
//     Details: "50% faster; +15 SEO ranks; +25% leads",
//   },
//   {
//     Section: "Experience",
//     Item: "Technical Reviewer (Intern)",
//     Details:
//       "91mobiles (Jun–Sep 2023), Gurugram — Tested 15 devices; Python automation -40% QA; +25% engagement",
//   },
//   {
//     Section: "Projects",
//     Item: "Homelab",
//     Details:
//       "15+ apps, 99.5% uptime; public DNS 40k+/day; Tor relay 3TB+/mo; IaC -70% deploy time",
//   },
//   {
//     Section: "Projects",
//     Item: "Nodebench",
//     Details:
//       "Hardware reviews site; responsive UI (Next.js, Drizzle, PostgreSQL, Tailwind)",
//   },
//   {
//     Section: "Skills",
//     Item: "Core Stack",
//     Details:
//       "TypeScript, Python, React/Next.js, Node/FastAPI, PostgreSQL, Docker, AWS",
//   },
];


export default function Resume() {
    return (
        <Content>
            <Gradient name="vice">
                <BigText font="tiny" text="Resume" />
            </Gradient>

            <Table data={resumeData as any}/>
        </Content>
    );
}