import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('./assets/img/ufrngram.png')} />
        <FontAwesome5 name="paper-plane" size={24} colo="black" />
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgStory} source={require('./assets/img/pernalonga.png')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 10,
  },
  ufrngram: {
    width: 110,
    height: 25,
  },
  stories: {
    height: 90,
  },
  story:{
    width: 90,
    height: 90,
  },
  imgStory:{
    
  }
});
