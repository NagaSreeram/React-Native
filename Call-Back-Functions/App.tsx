import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ProfileCard } from './components/profileCard/profileCard';
import { s } from './StyleSheets/ProfileCardCSS.style';
import { Alert, Text } from 'react-native';
import { useState } from 'react';

export default function App() {

const [countClick, setCountCLick] = useState(0)

  function hello(name: string) {
    Alert.alert("Hello " + name);
    setCountCLick(countClick+1)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.globalJSS}>
        <ProfileCard 
          onPressTitle={hello} 
          firstName={"Naga"} 
          lastName={"Sreeram"} 
          age={24} 
        />
        <Text style={{fontSize:20}}>You have clicked {countClick} times on the title</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
