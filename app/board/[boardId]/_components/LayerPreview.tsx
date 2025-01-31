"use client";

import { LayerType } from "@/type/Canvas";
import { useStorage } from "@liveblocks/react/suspense";
import React, { memo } from "react";
import { Reacangle } from "./Reacangle";
import { Ellipase } from "./Ellipase";
import { Text } from "./Text";
import { Note } from "./Note";
import { Path } from "./Path";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}
export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return;
    }
    switch (layer.type) {
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            stroke={selectionColor}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Ellipse:
        return (
          <Ellipase
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Reacangle:
        return (
          <Reacangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      default:
        // console.log("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
