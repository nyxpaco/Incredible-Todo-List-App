import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [newTask, setNewTask] = React.useState('');

  const handleAddTask = () => {
    if (newTask.trim()) { 
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new task ✨"
        placeholderTextColor="#ffb3c6"
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button color="#ff69b4" title="Add a Task 💖" onPress={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffe6f0',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#ffb3c6',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  input: {
    borderColor: '#ff69b4',  
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#ff69b4', 
    fontFamily: 'Cochin',
    marginBottom: 15,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ToDoForm;