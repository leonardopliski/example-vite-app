import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(
    (state, delta) =>
      (mesh.current.rotation.x = mesh.current.rotation.y += 0.02)
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.7 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "blue"} />
    </mesh>
  );
}
