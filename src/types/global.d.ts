/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="next" />
/// <reference types="framer-motion" />

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {}; 