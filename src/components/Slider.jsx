import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

const Slider=({sliderList}) =>{
  return (
    <View style={style.container}>
        <FlatList
            data={sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <View>
                    <Image source={{uri:item.image}} 
                        style={style.image}
                    />
                </View>
            )}
        />
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        marginTop:10,
    },
    image:{
        height:200,
        width:500,
        marginRight:10,
        borderRadius:10,
        objectFit:'cover',
    }
})

export default Slider;