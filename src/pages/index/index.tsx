import { Button, CoverView, Map, View } from "@tarojs/components";
import { MapProps } from "@tarojs/components/types/Map";
import { useState } from "react";

import locationPng from "../../image/location.png";

import "./index.scss";

export default function Index() {
  const [markers, setMarkers] = useState<MapProps.marker[]>(() => [
    {
      id: 4,
      latitude: 23.097994,
      longitude: 113.32352,
      iconPath: locationPng,
      width: 36,
      height: 36,
      customCallout: {
        anchorY: -10,
        anchorX: 0,
        display: "ALWAYS"
      }
    }
  ]);

  const [name, setName] = useState(1);

  return (
    <View>
      <Map
        setting={{}}
        markers={markers}
        latitude={23.096994}
        longitude={113.32452}
        style={{ height: "100vh", width: "100vw" }}
      >
        <CoverView slot="callout">
          <CoverView marker-id={4}>
            <CoverView>value:{name}</CoverView>
          </CoverView>
        </CoverView>
      </Map>

      <Button className="btn" onClick={() => setName(v => v + 1)}>
        change data {name}
      </Button>
    </View>
  );
}
