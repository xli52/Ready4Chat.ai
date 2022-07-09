import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "../../avatars/Avatar";
import CartoonGirl from "../../avatars/CartoonGirl";

export default function ModelDisplay(props) {
  return (
    <Canvas
      className="chat-scene-canvas"
      camera={{ fov: 20, near: 0.02, far: 1000, position: [0.1, 0.1, 3.5] }}
      style={{ width: "70%", margin: "auto" }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
      <OrbitControls />
    </Canvas>

    // <Canvas
    //   className="chat-scene-canvas"
    //   camera={{ fov: 20, near: 10, far: 2000, position: [0, 0, 600] }}
    //   style={{ width: "70%", margin: "auto" }}
    // >
    //   <ambientLight intensity={1.25} />
    //   <directionalLight intensity={0.4} />
    //   <Suspense fallback={null}>
    //     <CartoonGirl />
    //   </Suspense>
    //   <OrbitControls />
    // </Canvas>
  );
}