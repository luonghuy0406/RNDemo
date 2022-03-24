import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Mobile from '../assets/favicon.png'
import Mobile2 from '../assets/icon.png'
export default function CategoryListItems(props){
    return <View style={styles.CategoryView}>
            <Text style={styles.CategoryText}>
                {props.title}
            </Text>
            <Image source={props.imgsrc} style={styles.CategoryImage}/>
        </View>
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