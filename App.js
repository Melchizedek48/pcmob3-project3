import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';

function NotesScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <Entypo
            name="new-message"
            size={24}
            color="white"
            style={{ marginRight: 20 }}
            />
        </TouchableOpacity>

      )
    })
  })
 return <View style={styles.container}></View>;
}

function addNote() {
  console.log("Add note")
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
           headerTitle: "Want To Do Or Not?",
           headerTitleStyle: {
             fontWeight: "bold",
             fontSize: 30,
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


