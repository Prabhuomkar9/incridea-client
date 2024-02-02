import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Reflector,
  Text,
  useTexture,
  useGLTF,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { IoMdMicrophone } from "react-icons/io";
import Image from "next/image";

export default function App() {
  return (
    <>
      <div className="absolute text-white bottom-6 right-6 md:bottom-10 md:right-10 z-50 pointer-events-none rounded-[14px]">
        <Image
          src="/assets/jpeg/download (2).jpeg"
          alt="Dhvani Bhanushali"
          fill={true}
          className="object-cover -z-50 rounded-[14px]"
        />
        <div className="absolute bg-gradient-to-tr from-[#bc43a2] to-[#e18472] h-full w-full opacity-70 -z-50 rounded-[14px]"></div>
        <div className="p-2 md:p-3 z-50">
          <div className="h-16 md:h-20 flex items-center opacity-90">
            <IoMdMicrophone className="ml-2" size={"3rem"} />
          </div>
          <div className="flex flex-col p-2">
            <div className="font-medium text-xl md:text-2xl">
              Dhvani Bhanushali
            </div>
            <div className="opacity-70">23rd Feb @ 7:30PM</div>
          </div>
        </div>
      </div>
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        gl={{ alpha: false }}
        camera={{ position: [0, 3, 100], fov: 15 }}
      >
        <color attach="background" args={["black"]} />
        <fog attach="fog" args={["black", 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Carla
              rotation={[0, Math.PI - 0.4, 0]}
              position={[-1.2, 0, 0.6]}
              scale={[0.26, 0.26, 0.26]}
            />
            <VideoText position={[0, 1, -1]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={1} />
          <directionalLight position={[-50, 0, -40]} intensity={5} />
          <Intro />
        </Suspense>
      </Canvas>
    </>
  );
}

function Carla(props: {
  scale: number[];
  position: number[];
  rotation: number[];
}) {
  const { scene } = useGLTF("/assets/pronite/carla-draco.glb");
  return <primitive object={scene} {...props} />;
}

function VideoText(props: { position: [x: number, y: number, z: number] }) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      // src: "/assets/pronite/textBg.mp4",
      src: "/assets/mp4/proniteVID2.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);

  const [size, setSize] = useState<{ height: number; width: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setSize({ height: window.innerHeight, width: window.innerWidth });
      });
    }
  }, []);

  return (
    <Text
      font="/font/Inter-Bold.woff"
      fontSize={(size.width * (2 - 0.5)) / (1920 - 720)}
      letterSpacing={-0.06}
      {...props}
    >
      Dhvani
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          colorSpace={THREE.SRGBColorSpace}
        />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/assets/pronite/SurfaceImperfections003_1K_var1.jpg",
    "/assets/pronite/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      <planeGeometry args={[20, 20]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={512}
        mirror={0.5}
        mixBlur={6}
        mixStrength={1.5}
        color="#a0a0a0"
        metalness={0.4}
        roughnessMap={floor}
        normalMap={normal}
        normalScale={new THREE.Vector2(2, 2)}
      />
    </mesh>
  );
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.pointer.x * 5, 3 + state.pointer.y * 2, 14),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}
