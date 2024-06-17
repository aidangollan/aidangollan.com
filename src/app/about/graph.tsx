import dynamic from "next/dynamic";
import { mouseEventCallbacks, nvlOptions } from "./options";


const InteractiveNvlWrapper = dynamic(() => import('@neo4j-nvl/react').then(mod => mod.InteractiveNvlWrapper), {
    ssr: false,
});

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
    { id: '1', from: '1', to: '2' }, { id: '2', from: '1', to: '3' }, { id: '3', from: '1', to: '4' },
    { id: '4', from: '2', to: '5' }, { id: '5', from: '2', to: '6' }, { id: '6', from: '3', to: '7' },
    { id: '7', from: '3', to: '8' }, { id: '8', from: '4', to: '9' }, { id: '9', from: '4', to: '10' },
    { id: '10', from: '5', to: '11' }, { id: '11', from: '5', to: '12' }, { id: '12', from: '6', to: '13' },
    { id: '13', from: '6', to: '14' }, { id: '14', from: '7', to: '15' }, { id: '15', from: '7', to: '16' },
    { id: '16', from: '8', to: '17' }, { id: '17', from: '8', to: '18' }, { id: '18', from: '9', to: '19' },
    { id: '19', from: '9', to: '20' }, { id: '20', from: '10', to: '21' }, { id: '21', from: '10', to: '22' },
    { id: '22', from: '11', to: '23' }, { id: '23', from: '11', to: '24' }, { id: '24', from: '12', to: '25' },
    { id: '25', from: '12', to: '26' }, { id: '26', from: '13', to: '27' }, { id: '27', from: '13', to: '28' },
    { id: '28', from: '14', to: '29' }, { id: '29', from: '14', to: '30' }, { id: '30', from: '15', to: '31' },
    { id: '31', from: '15', to: '32' }, { id: '32', from: '16', to: '33' }, { id: '33', from: '16', to: '34' },
    { id: '34', from: '17', to: '35' }, { id: '35', from: '17', to: '36' }, { id: '36', from: '18', to: '37' },
    { id: '37', from: '18', to: '38' }, { id: '38', from: '19', to: '39' }, { id: '39', from: '19', to: '40' },
    { id: '40', from: '20', to: '41' }, { id: '41', from: '20', to: '42' }, { id: '42', from: '21', to: '43' },
    { id: '43', from: '21', to: '44' }, { id: '44', from: '22', to: '45' }, { id: '45', from: '22', to: '46' },
    { id: '46', from: '23', to: '47' }, { id: '47', from: '23', to: '48' }, { id: '48', from: '24', to: '49' },
    { id: '49', from: '24', to: '50' }, { id: '50', from: '24', to: '43' }, { id: '51', from: '24', to: '27' },
    { id: '52', from: '24', to: '15' }
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

export const Graph = () => (
        <div className="h-full w-full">
            <InteractiveNvlWrapper
                nodes={updatedNodes}
                rels={relationships}
                mouseEventCallbacks={mouseEventCallbacks}
                nvlOptions={nvlOptions}
            />
        </div>
);