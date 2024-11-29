import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
      ]);
    
      const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
      };

    return (
     <MainLayout>  {/* Wrap screen content with MainLayout */}
      <View style={styles.container}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          color="#d63384" 
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ffe4e6', 
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#d63384', 
    color: '#fff', 
    borderRadius: 10, 
    padding: 10,
    marginTop: 20,
    },
});

export default HomeScreen;