import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity, Alert } from 'react-native';
export default function CategoryListItems(props){
    const {category} = props;
    return <TouchableOpacity activeOpacity={0.5} onPress={(event) =>{
        Alert.alert(  "Alert Title",
        "My Alert Msg",)
    }}>
            <View style={styles.CategoryView}>
                <Text style={styles.CategoryText}>
                    {category.title}
                </Text>
                <Image source={category.image} style={styles.CategoryImage}/>
            </View>
            </TouchableOpacity> 
}

const styles = StyleSheet.create({
    CategoryView:{
        alignItems: "center",
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {width:0,height:5},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius:4,
        backgroundColor: "#fff",
        marginBottom: 16

    },
    CategoryText:{
        textTransform: "uppercase",
        paddingBottom: 10,
        fontSize:17,
        fontWeight: "bold"
    },
    CategoryImage:{
        width: 64,
        height: 64
    }
})