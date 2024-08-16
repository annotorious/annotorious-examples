import React from 'react';
import { Annotorious, ImageAnnotator } from '@annotorious/react';

// For some reason, webpack refuses to load from the library directly. Normally, this should work:
// import '@annotorious/react/annotorious-react.css';
import './annotorious-react.css';

export default function App() {
  return (
    <Annotorious>
      <ImageAnnotator>
        <img src="example.jpg" />
      </ImageAnnotator>
    </Annotorious>
  );
}