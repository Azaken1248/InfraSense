import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Text, Grid, Plane } from '@react-three/drei';
import { AxesHelper } from 'three';

const AccelerometerVisualization = ({ x, y, z }) => (
  <Canvas style={{ height: '300px', width: '100%' }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={0.8} />

    <Grid infiniteGrid sectionColor="gray" fadeDistance={10} />

    <Plane args={[5, 5]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <meshStandardMaterial attach="material" color="black" transparent opacity={0.5} />
    </Plane>

    <OrbitControls enableZoom={true} dampingFactor={0.1} />

    <primitive object={new AxesHelper(2)} />

    <Box position={[x * 0.1, y * 0.1, z * 0.1]} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="#7289da" emissive="#7289da" emissiveIntensity={0.2} />
    </Box>

    {/* Fixed Text Components */}
    <Text position={[2, 0, 0]} fontSize={0.4} color="#b9bbbe">
      {`X: ${x.toFixed(2)}`}
    </Text>
    <Text position={[0, 2, 0]} fontSize={0.4} color="#b9bbbe">
      {`Y: ${y.toFixed(2)}`}
    </Text>
    <Text position={[0, 0, 2]} fontSize={0.4} color="#b9bbbe">
      {`Z: ${z.toFixed(2)}`}
    </Text>
  </Canvas>
);

export default AccelerometerVisualization;
