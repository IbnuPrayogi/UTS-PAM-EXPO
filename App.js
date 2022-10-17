import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import React, {Component} from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tab';
import {useRef, useEffect} from 'react';

// const audioClip = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-clock-beep-988.json');
let alarmTimeout= null;
const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
// audioClip.loop=true;




  export default function App() {

    return (
      <View style={styles.container}>

        <NavigationContainer>
          <Tabs/>
        </NavigationContainer>
      </View>
      
    );
  }
  
//   const Header=()=>{
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         var date = new Date().getDate();
//         var month = new Date().getMonth() + 1;
//         var year = new Date().getFullYear();
//         var day = new Date().getDay();
//         return (
//           <View className='App-Header' style={styles.Header}>
//             <View style={styles.title}>
//               <Text id='title' style={styles.title}>Jadwal Sholat     <FontAwesome5 name="mosque" size={24} color="black" /></Text>
//             </View>
            
//             <View >
//             <Text id="date" style={styles.date}>{days[day]},{date}-{month}-{year}</Text>
//             </View>
            
            
//           </View>
  
//         )
  
//   }

//   class Content extends Component{


//     render(){
//       const time=['04:40','11:57','15:07','18:59','19:05'];  
//       const prays=["Subuh","Dzuhur","Ashar","Maghrib","Isya"];
    
//       var contentName=[]
//       var contentTime=[]
    
    
      
//     for (let i = 0; i < prays.length; i++) {
//       contentName.push(
//         <View key={i} className="list-content" style={{display:'flex',flexDirection:'row'}}>
//           <Text style={{padding:20,margin:2}}>{prays[i]}</Text>
//           <Button onPress={()=>Home()} title='Button'/>
//         </View>)
//       contentTime.push(
//         <View key={i} className="list-content" style={{display:'flex',flexDirection:'row',float:'right'}}>
//           <Text style={{padding:20,margin:2}}>{time[i]}</Text>
//         </View>
//       )
//     }

    
//   return (

//         <View className="content-list" style={styles.Content}>
//           <Text style={{fontWeight:'bold',fontSize:19,backgroundColor:'green',marginBottom:2}}>   Sholat                   Waktu                        Alarm</Text>
//           <View style={styles.contentName}>
//             {contentName}
//           </View>
//           <View style={styles.contentTime}>
//             {contentTime}
//           </View>
//         </View>
  
//   )
// }
// }

// class AlarmButton extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//         buttonValue: 'Off',
//         color:'red',
//         fungsi:setAlarm(),
//         alert:'Alarm Di Matikan'
//     }

// }
// render() {

  
//   if(this.state.buttonValue=="off"){
//     var valueChange='on';
//     var colorChange='blue';
//     var alertChange='Alarm Dihidupkan';

    
//   }
//   else{
//     var valueChange='off';
//     var colorChange='red';
//     var alertChange='Alarm DiMatikan';

//   }
// return (
//     <View>
//       <Text>HIIII</Text>

//       {/* <Button
//           style={{fontSize:18,flex:1}}
//           onPress={()=>{this.setState({buttonValue:valueChange,color:colorChange});setAlarm(this.state.buttonValue,'04:00:00')}}
//           title={this.state.buttonValue}
//           color={this.state.color}
//           accessibilityLabel="Learn more about this purple button"/>
//        */}
//     </View>

// )
// }
// }
// const setAlarm=(status,alarmTime)=>{
//   if(alarmTime){
//       const current =new Date();
//       const timeToalarm=new Date(current.getTime() + (60*1000));
//       console.log(current.getTime());
//       console.log(timeToalarm.getTime());
//       const timeout=timeToalarm.getTime()-current.getTime();
//       console.log(timeout)
//       alarmTimeout= setTimeout(()=>alert('ALARMM'),timeout);
//       alert('Alarm set');
      
//   }
//   if(status=="on"){
//     alert('ALARM HIDUP');
//   }
//   else if(status=="off"){
//     alert('Alarm Mati');
//   }
  
// }

// const Comp = () => {
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     setCount(JSON.parse(window.sessionStorage.getItem("count")));
//   }, []);

//   useEffect(() => {
//     window.sessionStorage.setItem("count", count);
//   }, [count]);

//   return (
//     <div className="App">
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// };


// function Home(){

//   return(
//     <View>
//       <Text>HIIII</Text>
//     </View>
//   )
// }






const styles = StyleSheet.create({
  container: {
    marginTop:0,
    flex: 1,
    backgroundColor: 'blue',
  },




  

});





  