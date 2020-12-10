import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

function NotesScreen({ navigation }) {
 return <View style={styles.container}></View>;
}

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Notes"
         component={NotesScreen}
         options={{
           headerTitle: "Your ToDo",
           headerTitleStyle: {
             fontWeight: "bold",
             fontSize: 30,
             textAlign: "center",
           },
           headerStyle: {
             height: 120,
             backgroundColor: "red",
             borderBottomColor: "#000",
             borderBottomWidth: 1,
           },
           headerTintColor: "#fff",
         }}
       />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#ffc",
   alignItems: "center",
   justifyContent: "center",
 },
});


