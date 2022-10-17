import React, {Component,View,Button,StyleSheet,Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Content2=({navigation})=>{
      const time=['04:40','11:57','15:07','18:59','19:05'];  
      const prays=["Subuh","Dzuhur","Ashar","Maghrib","Isya"];
      const keutamaan=[
        'Subuh : Barang siapa yang shalat subuh berjamaah kemudian dia duduk berzikir kepada Allah hingga matahari terbit, lantas shalat dua rakaat, maka baginya seperti pahala haji dan umrah, Rasulullah bersabda, yang sempurna, sempurna, sempurna. (HR. Tirmidzi).',
        'Dzuhur : Keutamaan shalat Dzuhur adalah melindungi bagi siapapun yang melaksanakannya dari siksa api neraka jahanam. Panas siang hari yang terik merupakan cobaan kepada manusia terhadap siksa neraka yang panas dan keras.',
        'Ashar : Tidaklah akan masuk neraka orang yang melaksanakan shalat sebelum terbitnya matahari (yaitu shalat shubuh) dan shalat sebelum tenggelamnya matahari (yaitu shalat ashar). (HR. Muslim, No. 634)',
        'Maghrib : Waktu Magrib adalah waktu di mana Allah Ta’ala menerima taubat Nabi Adam Alaihissalam. Oleh karena itu keutamaan shalat Maghrib adalah memungkinkan apa yang kita minta dan doakan kepada Allah Ta’ala cepat dikabulkan. Selain itu, waktu ini juga baik untuk meminta ampun kepada Allah atas dosa yang mungkin sengaja maupun tidak sengaja dilakukan saat siang hari.',
        'Isya : Tidak ada shalat yang lebih berat bagi orang munafik selain dari shalat Shubuh dan shalat ‘Isya’. Seandainya mereka tahu keutamaan yang ada pada kedua shalat tersebut, tentu mereka akan mendatanginya walau sambil merangkak. (HR. Bukhari, No. 657) '
      ]
    
      var contentName=[]
      var contentTime=[]
      var contentDetail=[]
    
    
      
    for (let i = 0; i < prays.length; i++) {
      contentName.push(
        <View key={i} className="list-content" style={{display:'flex',flexDirection:'row'}}>
          <Text style={{padding:20,margin:2,fontSize:25}}>{prays[i]}</Text>
        </View>)
    //   contentDetail.push(

    //     <View key={i} className="list-content" style={{display:'flex',flexDirection:'row',float:'right'}}>
    //       <Button title="Detail" color={'green'} onClick={alert(keutamaan[i])}/>
    //     </View>
    //   )
    }

    
  return (

        <View className="content-list" style={styles.Content}>
          <Text style={{fontWeight:'bold',fontSize:22,backgroundColor:'green',marginBottom:2}}>   Sholat                                       Keutamaan</Text>
          <View style={styles.contentName}>
            {contentName}
          </View>
          <View style={styles.contentTime}>
            <View style={{padding:25}}>
                <Button title="Detail" color={'green'} onPress={()=>{alert(keutamaan[0])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'green'} onPress={()=>{alert(keutamaan[1])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'green'} onPress={()=>{alert(keutamaan[2])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'green'} onPress={()=>{alert(keutamaan[3])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'green'} onPress={()=>{alert(keutamaan[4])}} style={{padding:20}}/>
            </View>
          
          </View>

        </View>
  
  )
}

const styles = StyleSheet.create({
    Content:{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#adffa7',
      height:1000,
    },

    contentName:{
      float:'left',
      position:'absolute',
      marginTop:25
   
    },

    contentTime:{
      float:'right',
      position:'relative',
      paddingLeft:250
    },
  


  

    

  });

export default Content2;
