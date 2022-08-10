import React, {useMemo} from 'react';
import {
  Canvas,
  Skia,
  useCanvasRef,
  useTouchHandler,
  Path,
} from '@shopify/react-native-skia';
import {StyleSheet} from 'react-native';

const App = () => {
  const canvasRef = useCanvasRef();

  const path = useMemo(() => Skia.Path.Make(), []);

  // Touch handler
  const touchHandler = useTouchHandler({
    onStart: touch => {
      const {x, y} = touch;
      path.moveTo(x, y);
    },
    onActive: touch => {
      const {x, y} = touch;
      path.lineTo(x, y);
    },
  });

  return (
    <Canvas style={styles.canvas} ref={canvasRef} onTouch={touchHandler}>
      <Path path={path} color="lightblue" style={'stroke'} strokeWidth={3} />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export default App;
