import { View, Button } from "react-native";
 
export default function App() {
  const rokuIp = "192.168.1.69"; // Replace with your Roku IP
 
  function goHome() {
    fetch(`http://${rokuIp}:8060/keypress/Home`, { method: "POST" });
  }
  function goSelect() {
    fetch(`http://${rokuIp}:8060/keypress/Select`, { method: "POST" });
  }
  function volumeUp() {
    fetch(`http://${rokuIp}:8060/keypress/VolumeUp`, { method: "POST" });
  }



  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Go Home" onPress={goHome} />
      <Button title="Select" onPress={goSelect} />
      <Button title="Volume Up" onPress={volumeUp} />
    </View>
  );
}