import React from 'react';
import Routes from './src/route'
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7d40e7"></StatusBar>
    <Routes></Routes>
    </>
  );
}
