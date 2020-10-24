import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors
} from './common';

// import { handleLogging } from './logging';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  // handleLogging
];

