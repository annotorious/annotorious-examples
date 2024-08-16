import { Annotorious, ImageAnnotator } from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';

export default function App() {
  return (
    <Annotorious>
      <ImageAnnotator>
        <img src="example.jpg" />
      </ImageAnnotator>
    </Annotorious>
  );
}