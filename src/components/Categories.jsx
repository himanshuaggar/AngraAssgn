import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Categories = ({categoryList}) => {

  return (
    <View style={style.container}>
        <Text style={style.heading}>Categories</Text>
        <FlatList
          data={categoryList}
          numColumns={4}
          renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=> {}}
            style={style.listitemcontainer}
            >
             <Text style={style.itemtext}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

export default Categories
const style = StyleSheet.create({
  container: {
    marginTop:10,
  },
  heading:{
    fontWeight:'bold',
  fontSize:18,
  color:'black',
  marginBottom:4
  },
  listitemcontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:4,
    borderWidth:2,
    borderRadius:10,
    marginHorizontal:4,
  },
  itemtext:{
    fontSize:12,
    marginTop:4,
    color:'black'
  }
})