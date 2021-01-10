import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function MyPageScreen() {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <Image
            source={require("../../../../assets/images/111.png")}
            style={{ width: "100%", resizeMode: "contain" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default MyPageScreen;
