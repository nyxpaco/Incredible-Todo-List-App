import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskText}>
          🌸 {task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffe6f0', 
    borderRadius: 15,
    shadowColor: '#ffb3c6',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  taskText: {
    fontSize: 18,
    color: '#ff69b4', 
    marginVertical: 5,
    fontFamily: 'Cochin',
    textDecorationLine: 'none',
  },
});

export default ToDoList;