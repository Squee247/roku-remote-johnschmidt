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

  function powerOff() {
    fetch(`http://${rokuIp}:8060/keypress/PowerOff`, { method: "POST" });
  }

  function powerOn() {
    fetch(`http://${rokuIp}:8060/keypress/PowerOn`, { method: "POST" });
  }

  function goUp() {
    fetch(`http://${rokuIp}:8060/keypress/Up`, { method: "POST" });
  }

  function goDown() {
    fetch(`http://${rokuIp}:8060/keypress/Down`, { method: "POST" });
  }

  function goLeft() {
    fetch(`http://${rokuIp}:8060/keypress/Left`, { method: "POST" });
  }

  function goRight() {
    fetch(`http://${rokuIp}:8060/keypress/Right`, { method: "POST" });
  }

  





  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Go Home" onPress={goHome} />
      <Button title="Go Select" onPress={goSelect} />
      <Button title="Go Back" onPress={goBack} />
      <Button title="Volume Up" onPress={volumeUp} />
      <Button title="Volume Down" onPress={volumeDown} />
      <Button title="Power Off" onPress={powerOff} />
      <Button title="Power On" onPress={powerOn} />
      <Button title="Go Up" onPress={goUp} />
      <Button title="Go Down" onPress={goDown} />
      <Button title="Go Left" onPress={goLeft} />
      <Button title="Go Right" onPress={goRight} />
    </View>
  );
}