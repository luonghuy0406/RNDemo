import React from 'react';
import { StyleSheet, View} from 'react-native';
import CategorysScreen from './screens/CategoriesScreen';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return (
      <View >
        <CategorysScreen/>
      </View>
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
