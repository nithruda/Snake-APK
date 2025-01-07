import React from 'react';
import { SafeAreaView } from 'react-native';
import TapTheButtonGame from './TapTheButtonGame'; // Adjust path if necessary

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TapTheButtonGame />
    </SafeAreaView>
  );
};

export default App;
