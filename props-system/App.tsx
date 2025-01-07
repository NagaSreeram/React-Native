import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileCard } from './components/profileCard/profileCard'
import { s } from './StyleSheets/ProfileCardCSS.style';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.globalJSS}>
        <ProfileCard firstName={"Naga"} lastName={"Sreeram"}
        >
          Hi !
        </ProfileCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}