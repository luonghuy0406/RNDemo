import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItems from './components/CategoryListItems';
import laptop from './assets/laptop.png'
import iphone from './assets/mobile-app.png'
import tablet from './assets/tablet.png'
import desktop from './assets/monitor.png'
export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItems title="Laptop" imgsrc={laptop}/>
      <CategoryListItems title="iphone" imgsrc={iphone}/>
      <CategoryListItems title="tablet" imgsrc={tablet}/>
      <CategoryListItems title="desktop" imgsrc={desktop}/>
      <CategoryListItems title="Laptop" imgsrc={laptop}/>
      <CategoryListItems title="iphone" imgsrc={iphone}/>
      <CategoryListItems title="tablet" imgsrc={tablet}/>
      <CategoryListItems title="desktop" imgsrc={desktop}/>
    </View>
  );
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
