import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function MyPageScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={require("../../../../assets/images/11.png")}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
    </ScrollView>
  );
}

export default MyPageScreen;
