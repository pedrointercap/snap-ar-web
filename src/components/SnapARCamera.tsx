import * as React from "react";
import { useCameraKit } from "../hooks/useCameraKit";
import { createMediaStreamSource, Transform2D } from "@snap/camera-kit";

const SnapARCamera = () => {
  const { session, lenses } = useCameraKit();
  const canvasContainerRef = React.useRef<HTMLDivElement>(null);

  const startCameraKit = React.useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    const source = createMediaStreamSource(mediaStream, {
      transform: Transform2D.MirrorX,
    });

    session.setSource(source);
    session.applyLens(lenses[0]);
    session.play("live");
  }, [session, lenses]);

  React.useEffect(() => {
    startCameraKit();
  }, [startCameraKit]);

  React.useEffect(() => {
    canvasContainerRef?.current?.replaceWith(session.output.live);
  }, [session]);

  return <div ref={canvasContainerRef}></div>;
};

export default SnapARCamera;
