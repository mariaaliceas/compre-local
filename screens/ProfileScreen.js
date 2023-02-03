import React from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
      <Ionicons name="md-home" size={80} color="#006600" />
      <Button 
        title="Go go go to Cart Screen"
        onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};
  
export default Profile;