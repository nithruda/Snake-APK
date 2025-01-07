import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TapTheButtonGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameActive(true);
  };

  const incrementScore = () => {
    if (gameActive) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap the Button!</Text>
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      <Text style={styles.score}>Score: {score}</Text>
      {gameActive ? (
        <TouchableOpacity style={styles.button} onPress={incrementScore}>
          <Text style={styles.buttonText}>TAP ME!</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.startButton} onPress={startGame}>
          <Text style={styles.startButtonText}>START GAME</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  timer: {
    fontSize: 24,
    marginBottom: 10,
    color: '#444',
  },
  score: {
    fontSize: 24,
    marginBottom: 30,
    color: '#444',
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ff6f61',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  startButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#4caf50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  startButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TapTheButtonGame;
