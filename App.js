import { View, Button } from "react-native";
 
export default function App() {
  const rokuIp = "192.168.1.69"; // Replace with your Roku IP
 
  function goHome() {
    fetch(`http://${rokuIp}:8060/keypress/Home`, { method: "POST" });
  }
 
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Go Home" onPress={goHome} />
    </View>
  );
}