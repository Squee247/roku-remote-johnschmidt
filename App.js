import { View, Button } from "react-native";
 
export default function App() {
  const rokuIp = "192.168.1.69"; // Replace with your Roku IP
 
  function goHome() {
    fetch(`http://${rokuIp}:8060/keypress/Home`, { method: "POST" });
  }
 
  function goSelect() {
  fetch(`http://${rokuIp}:8060/keypress/Select`, { method: "POST" });
  }

  function goBack() {
    fetch(`http://${rokuIp}:8060/keypress/Back`, { method: "POST" });
  }

  function volumeUp() {
    fetch(`http://${rokuIp}:8060/keypress/VolumeUp`, { method: "POST" });
  }
  function volumeDown() {
    fetch(`http://${rokuIp}:8060/keypress/VolumeDown`, { method: "POST" });
  }


  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Go Home" onPress={goHome} />
      <Button title="Go Select" onPress={goSelect} />
      <Button title="Go Back" onPress={goBack} />
      <Button title="Volume Up" onPress={volumeUp} />
      <Button title="Volume Down" onPress={volumeDown} />
    </View>
  );
}