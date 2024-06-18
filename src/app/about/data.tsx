import Image from 'next/image';
import { Graph } from './graph';
import { Card } from './card';
import { ScratchEmbed } from './scratch';

export const titles = [
    { 
    left: { title: "Dec '23" },
    right: { title: "to Now" }
    },
    { 
    left: { title: "May '24" },
    right: { title: "to Now" }
    },
    { 
    left: { title: "Aug '23" },
    right: { title: "to May '24" }
    },
    { 
    left: { title: "June '22" },
    right: { title: "to Jan '23" }
    },
    { 
    left: { title: "'16" },
    right: { title: "to '20" }
    },
];

export const leftSideContent = [
    <Graph/>,
    <Card 
    title="Auto Owners Insurance" 
    subtitle="My Second Internship" 
    content="I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses."
    />,
    <Image 
        src="/SampleServe.png"
        alt="Acceptance Check" 
        layout="fill" 
        objectFit="contain" 
        objectPosition="center"
    />,
    <Card 
    title="Data Lume" 
    subtitle="My First Startup" 
    content="Through Data Lume I was able to gain valuable experience with Web Development,
        and more importantly, leadership and life experience. Though DataLume I got the chance to 
        pitch at the TC Newtech startup, which we ended up winning!"
    />,
    <ScratchEmbed />,
]

export const rightSideContent = [
    <Card 
    title="Notello" 
    subtitle="My Second Startup" 
    content="I am currently working for Auto Owners Insurance as a Software Engineering Intern. 
        I'm working on a RAG based Slack bot that allows team members to gain a deeper understanding 
        of the services they work on."
    />,
    <Image 
    src="/AO.png"
    alt="AO Logo" 
    layout="fill" 
    objectFit="contain" 
    objectPosition="center"
    />,
    <Card 
    title="Sample Serve" 
    subtitle="My First Internship" 
    content="Through Sample Serve I was able to apply my self-taught Web-Dev skills 
        to a real-world code base. I will always be grateful for Sample Serve taking a chanc on me while
        I was so inexperienced."
    />,
    <Image 
        src="/DataLumeStage.jpg" 
        alt="Acceptance Check" 
        layout="fill" 
        objectFit="contain" 
        objectPosition="center"
    />,
    <Card 
    title="Scratch" 
    subtitle="Where It All Began" 
    content="Scratch is where I was first introduced to the world of coding. At the time I loved
    it for allowing me to turn my fun silly ideas in things I could show my middle school friends,
    something I still find myself doing to this day."
    />
]