import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileCard } from './components/profileCard/profileCard';
import { s } from './StyleSheets/ProfileCardCSS.style';
import { Linking } from 'react-native';

export default function App() {

function goToX(){
  Linking.openURL("https://x.com/?lang=en&mx=2")
}

function goToLinkedIn(){
  Linking.openURL("https://chatgpt.com/");
}

function goToFaceBook(){
  Linking.openURL("https://www.google.com/search?q=what+are+callback+functions+in+react+native&sca_esv=37b8e5acbf81c988&rlz=1C1CHBD_enIN1011IN1011&sxsrf=ADLYWIKuGY9FtHbglmE5K1mnDywLTSmr7Q%3A1736311413274&ei=dQJ-Z9C6EJq7vr0P-OD16Qk&ved=0ahUKEwiQyYeIqOWKAxWana8BHXhwPZ0Q4dUDCA8&uact=5&oq=what+are+callback+functions+in+react+native&gs_lp=Egxnd3Mtd2l6LXNlcnAiK3doYXQgYXJlIGNhbGxiYWNrIGZ1bmN0aW9ucyBpbiByZWFjdCBuYXRpdmUyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wVI1CVQgg1YjiRwAXgBkAEAmAHCAaAB9BeqAQQwLjE4uAEDyAEA-AEBmAIPoAK5E8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKECMYgAQYJxiKBcICBRAAGIAEwgIIEAAYFhgKGB7CAgsQABiABBiRAhiKBZgDAIgGAZAGCZIHBjEuMTMuMaAHn6kB&sclient=gws-wiz-serp")
}

function goToSocialMedia(socialMedia: string){

let url : any
switch (socialMedia) {
  case "twitter":
    url="https://x.com/?lang=en&mx=2"
    break;
    case "linkedIn":
      url="https://chatgpt.com/"
      break;
      case "faceBook":
        url="https://www.google.com/search?q=what+are+callback+functions+in+react+native&sca_esv=37b8e5acbf81c988&rlz=1C1CHBD_enIN1011IN1011&sxsrf=ADLYWIKuGY9FtHbglmE5K1mnDywLTSmr7Q%3A1736311413274&ei=dQJ-Z9C6EJq7vr0P-OD16Qk&ved=0ahUKEwiQyYeIqOWKAxWana8BHXhwPZ0Q4dUDCA8&uact=5&oq=what+are+callback+functions+in+react+native&gs_lp=Egxnd3Mtd2l6LXNlcnAiK3doYXQgYXJlIGNhbGxiYWNrIGZ1bmN0aW9ucyBpbiByZWFjdCBuYXRpdmUyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wVI1CVQgg1YjiRwAXgBkAEAmAHCAaAB9BeqAQQwLjE4uAEDyAEA-AEBmAIPoAK5E8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKECMYgAQYJxiKBcICBRAAGIAEwgIIEAAYFhgKGB7CAgsQABiABBiRAhiKBZgDAIgGAZAGCZIHBjEuMTMuMaAHn6kB&sclient=gws-wiz-serp"
        break;
}
Linking.openURL(url)

}

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.globalJSS}>
        <ProfileCard onPressSocialMediaIcon={goToSocialMedia} onPressX={goToX} onPressLinkedIn={goToLinkedIn} onPressFaceBook={goToFaceBook}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}