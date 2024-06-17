import { Graph } from './graph';

export const shownData = [
    { 
    left: {
        title: "Dec 2023",
    },
    right: {
        title: "to Present",
        cardTitle: "Notello",
        url: "https://notello.ai",
        cardSubtitle: "My second startup",
        cardDetailedText: `I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses.`
    }
    },
    { 
    left: {
        title: "Dec 2023",
        cardTitle: "Notello",
        url: "https://notello.ai",
        cardSubtitle: "My second startup",
        cardDetailedText: `I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses.`
    },
    right: {
        title: "to Jan 2024",
    }
    },
    { 
    left: {
        title: "Dec 2023",
    },
    right: {
        title: "to Present",
        cardTitle: "Notello",
        url: "https://notello.ai",
        cardSubtitle: "My second startup",
        cardDetailedText: `I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses.`
    }
    },
    { 
    left: {
        title: "Dec 2023",
        cardTitle: "Notello",
        url: "https://notello.ai",
        cardSubtitle: "My second startup",
        cardDetailedText: `I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses.`
    },
    right: {
        title: "to Jan 2024",
    }
    },
    { 
    left: {
        title: "Dec 2023",
    },
    right: {
        title: "to Present",
        cardTitle: "Notello",
        url: "https://notello.ai",
        cardSubtitle: "My second startup",
        cardDetailedText: `I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses.`
    }
    },
    { 
    left: {
        title: "Dec 2023",
        cardTitle: "Notello",
        url: "https://notello.ai",
        cardSubtitle: "My second startup",
        cardDetailedText: `I am currently building an automated note taking platform that
        generates knowledge graphs from study materials, allowing students to gains a deeper understanding
        of the topics in their courses.`
    },
    right: {
        title: "to Jan 2024",
    }
    },
];

interface Node {
    id: string;
    caption: string;
    size: number;
}
  
interface Relationship {
    id: string;
    from: string;
    to: string;
}
  
const nodes: Node[] = Array.from({ length: 50 }, (_, i) => ({ id: (i + 1).toString(), caption: `Node ${i + 1}`, size: 0}));
  
const relationships: Relationship[] = [
    { id: '51', from: '1', to: '2' }, { id: '52', from: '1', to: '3' }, { id: '53', from: '1', to: '4' },
    { id: '54', from: '2', to: '5' }, { id: '55', from: '2', to: '6' }, { id: '56', from: '3', to: '7' },
    { id: '57', from: '3', to: '8' }, { id: '58', from: '4', to: '9' }, { id: '59', from: '4', to: '10' },
    { id: '60', from: '5', to: '11' }, { id: '61', from: '5', to: '12' }, { id: '62', from: '6', to: '13' },
    { id: '63', from: '6', to: '14' }, { id: '64', from: '7', to: '15' }, { id: '65', from: '7', to: '16' },
    { id: '66', from: '8', to: '17' }, { id: '67', from: '8', to: '18' }, { id: '68', from: '9', to: '19' },
    { id: '69', from: '9', to: '20' }, { id: '70', from: '10', to: '21' }, { id: '71', from: '10', to: '22' },
    { id: '72', from: '11', to: '23' }, { id: '73', from: '11', to: '24' }, { id: '74', from: '12', to: '25' },
    { id: '75', from: '12', to: '26' }, { id: '76', from: '13', to: '27' }, { id: '77', from: '13', to: '28' },
    { id: '78', from: '14', to: '29' }, { id: '79', from: '14', to: '30' }, { id: '80', from: '15', to: '31' },
    { id: '81', from: '15', to: '32' }, { id: '82', from: '16', to: '33' }, { id: '83', from: '16', to: '34' },
    { id: '84', from: '17', to: '35' }, { id: '85', from: '17', to: '36' }, { id: '86', from: '18', to: '37' },
    { id: '87', from: '18', to: '38' }, { id: '88', from: '19', to: '39' }, { id: '89', from: '19', to: '40' },
    { id: '90', from: '20', to: '41' }, { id: '91', from: '20', to: '42' }, { id: '92', from: '21', to: '43' },
    { id: '93', from: '21', to: '44' }, { id: '94', from: '22', to: '45' }, { id: '95', from: '22', to: '46' },
    { id: '96', from: '23', to: '47' }, { id: '97', from: '23', to: '48' }, { id: '98', from: '24', to: '49' },
    { id: '99', from: '24', to: '50' }, { id: '100', from: '24', to: '43' }, { id: '101', from: '24', to: '27' },
    { id: '102', from: '24', to: '15' }
];
  
const nodeDegrees: { [key: string]: number } = {};
nodes.forEach(node => {
    nodeDegrees[node.id] = 0;
});
relationships.forEach(rel => {
    nodeDegrees[rel.from] += 1;
    nodeDegrees[rel.to] += 1;
});
  
const updatedNodes = nodes.map(node => ({
    ...node,
    size: 10 + nodeDegrees[node.id]! * 5
}));

export const leftSideContent = [
    <Graph/>
]

export const rightSideContent = [
    null
]