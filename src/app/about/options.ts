import type { NvlOptions } from '@neo4j-nvl/base';
import type { HitTargets, Node, Relationship } from '@neo4j-nvl/core';
import type { MouseEventCallbacks } from '@neo4j-nvl/react';

export const options = {
    primary: "white",
    secondary: "black",
    cardBgColor: "black",
    cardForeColor: "white",
    cardTitleColor: "white",
    cardDetailsColor: "white",
    titleColor: "white",
    cardDetailsBackGround: "white",
    titleColorActive: "white",

}

export const mouseEventCallbacks: MouseEventCallbacks = {
    onHover: (
        element: Node | Relationship, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onHover', element, hitTargets, evt),
    
    onRelationshipRightClick: (
        rel: Relationship, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onRelationshipRightClick', rel, hitTargets, evt),

    onNodeClick: (
        node: Node, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onNodeClick', node, hitTargets, evt),

    onNodeRightClick: (
        node: Node, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onNodeRightClick', node, hitTargets, evt),

    onNodeDoubleClick: (
        node: Node, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onNodeDoubleClick', node, hitTargets, evt),

    onRelationshipClick: (
        rel: Relationship, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onRelationshipClick', rel, hitTargets, evt),

    onRelationshipDoubleClick: (
        rel: Relationship, 
        hitTargets: HitTargets, 
        evt: React.MouseEvent<Element>
    ) =>
      console.log('onRelationshipDoubleClick', rel, hitTargets, evt),

    onCanvasClick: (
        evt: React.MouseEvent<Element>
    ) => console.log('onCanvasClick', evt),

    onCanvasDoubleClick: (
        evt: React.MouseEvent<Element>
    ) => console.log('onCanvasDoubleClick', evt),

    onCanvasRightClick: (
        evt: React.MouseEvent<Element>
    ) => console.log('onCanvasRightClick', evt),

    onDrag: (
        nodes: Node[]
    ) => console.log('onDrag', nodes),

    onPan: (
        evt: React.MouseEvent<Element>
    ) => console.log('onPan', evt),

    onZoom: (
        zoomLevel: number
    ) => console.log('onZoom', zoomLevel)
  };

export const nvlOptions: NvlOptions = {
    allowDynamicMinZoom: true,
    disableWebGL: true,
    maxZoom: 3,
    minZoom: 0.05,
    relationshipThreshold: 0.55,
    useWebGL: false,
    instanceId: 'graph-preview',
    initialZoom: .1,
  };