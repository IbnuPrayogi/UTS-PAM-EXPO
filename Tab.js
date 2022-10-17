import React from "react";
import {StyleSheet,Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import ImagePath from "./ImagePath";


const Tab = createBottomTabNavigator();


const Tabs =()=>{  
    return(

        <Tab.Navigator >
            <Tab.Screen options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image source={ImagePath.icHome}/>
                    )
                }
            }}   name='Home' component={HomeScreen}/>
            <Tab.Screen options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image s source={ImagePath.icDetail}/>
                    )
                }
            }} name='Detail' component={DetailScreen}/>
        </Tab.Navigator>
    )
}

const styles=StyleSheet.create({

})


export default Tabs;