import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
    const currentDate = new Date().toLocaleDateString();
  
    return (
      <MainLayout>
        <View style={styles.container}>
          <Text style={styles.title}>Incredible ToDo List App</Text>
          <Text style={styles.subtitle}>By: Maria Alexandra Nicole Paco</Text>
        </View>
      </MainLayout>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
       backgroundColor: '#ffe4e6',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#d63384', 
      textShadowColor: '#ffc0cb',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
    },
    subtitle: {
      fontSize: 20,
      marginVertical: 10,
      color: '#ff69b4', 
      fontStyle: 'italic',
    },
  });
  
  export default AboutScreen;