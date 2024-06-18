declare module '@neo4j-nvl/core' {
    export interface Node {
      id: string;
      size?: number;
      [key: string]: any;
    }
  
    export interface Relationship {
      id: string;
      from: string;
      to: string;
      [key: string]: any;
    }
  
    export interface HitTargets {
      [key: string]: any;
    }
  }
  
  declare module '@neo4j-nvl/react' {
    import { Node, Relationship, HitTargets } from '@neo4j-nvl/core';
    import { MouseEvent as ReactMouseEvent } from 'react';
  
    export interface MouseEventCallbacks {
      onHover?: (element: Node | Relationship, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onRelationshipRightClick?: (rel: Relationship, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onNodeClick?: (node: Node, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onNodeRightClick?: (node: Node, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onNodeDoubleClick?: (node: Node, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onRelationshipClick?: (rel: Relationship, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onRelationshipDoubleClick?: (rel: Relationship, hitTargets: HitTargets, evt: ReactMouseEvent<Element>) => void;
      onCanvasClick?: (evt: ReactMouseEvent<Element>) => void;
      onCanvasDoubleClick?: (evt: ReactMouseEvent<Element>) => void;
      onCanvasRightClick?: (evt: ReactMouseEvent<Element>) => void;
      onDrag?: (nodes: Node[]) => void;
      onPan?: (evt: ReactMouseEvent<Element>) => void;
      onZoom?: (zoomLevel: number) => void;
    }
  
    export const InteractiveNvlWrapper: React.FC<{
      nodes: Node[];
      rels: Relationship[];
      mouseEventCallbacks?: MouseEventCallbacks;
      nvlOptions?: NvlOptions;
      nvlRef?: React.RefObject<NVL>;
    }>;
  }
  