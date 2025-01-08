// App.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  const handlePress = () => {
    setMessage('Hello');
  };

  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={handlePress} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 20,
    color: 'blue',
  },
});

export default App;
