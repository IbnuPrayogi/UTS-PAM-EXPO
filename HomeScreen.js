import React, {Component,View,Button,StyleSheet,Text} from "react-native";

import Header from "./Header";
import Content from "./Content";

export default function HomeScreen() {
  return (
    <View>
        <Header/>
        <Content/>
    </View>
  )
}
