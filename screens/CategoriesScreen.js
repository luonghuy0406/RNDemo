import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItems from '../components/CategoryListItems';
import laptop from '../assets/laptop.png'
import iphone from '../assets/mobile-app.png'
import tablet from '../assets/tablet.png'
import desktop from '../assets/monitor.png'
export default class CategoriesScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[
        {id:1, title: "laptop", image: laptop},
        {id:2, title: "iphone", image: iphone},
        {id:3, title: "tablet", image: tablet},
        {id:4, title: "desktop", image: desktop}
      ]
    }
  }
  render(){
    const { categories } = this.state
    return (
      <FlatList
        data={categories}
        renderItem={({item}) =><CategoryListItems category={item}/>}
        keyExtractor={(item) =>`${item.id}`}
        contentContainerStyle={{paddingLeft:16,paddingRight:16}}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
    margin: 16
  },
});
