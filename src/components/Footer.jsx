import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
      <View style={styles.footer}>
        <Text style={styles.text}>© 2024 Incredible ToDo List App. All Rights Reserved.</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    footer: {
      padding: 10,
      backgroundColor: '#af4c79',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      color: '#fff',
    },
  });
  
  export default Footer;