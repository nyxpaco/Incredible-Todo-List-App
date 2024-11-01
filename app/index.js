// import { StyleSheet, Text, View } from "react-native";
// import React from 'react' 
// import Customtextinput from '../components/customtextinput'; 

// const index = () => {
//   return (
//     <View style={{flex: 1}}>
//      <Customtextinput/>
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

import { View, Text } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{ fontSize: 25}}>I am in React Native class</Text>
    </View>
  )
}

export default Index