import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileCard } from './components/profileCard/profileCard';
import { s } from './StyleSheets/ProfileCardCSS.style';
import { Alert } from 'react-native';

export default function App() {

function hello(){
  Alert.alert("Hello");
}

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.globalJSS}>
        <ProfileCard onPressTitle={hello}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}