import { View, Text, TouchableOpacity } from "react-native";
 
export default function App() {
  const rokuIp = "192.168.1.69"; // Replace with your Roku IP
 


  function powerOff() {
    fetch(`http://${rokuIp}:8060/keypress/PowerOff`, { method: "POST" });
  }

  function powerOn() {
    fetch(`http://${rokuIp}:8060/keypress/PowerOn`, { method: "POST" });
  }
  
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {[ 
        { title: "Power Off", onPress: powerOff, color: "#b81818ff" },
        { title: "Power On", onPress: powerOn, color: "#056105ff" },
        { title: "Go Home", onPress: goHome, color: "#6200ee" }, 
        { title: "Go Select", onPress: goSelect, color: "#03dac6" },
        { title: "Go Back", onPress: goBack, color: "#b00020" },
        { title: "Volume Up", onPress: volumeUp, color: "#388e3c" },
        { title: "Volume Down", onPress: volumeDown, color: "#1976d2" },
        { title: "Go Up", onPress: goUp, color: "#8e24aa" },
        { title: "Go Down", onPress: goDown, color: "#fbc02d" },
        { title: "Go Left", onPress: goLeft, color: "#009688" },
        { title: "Go Right", onPress: goRight, color: "#c51189ff" },
      ].map((btn, idx) => (
        <TouchableOpacity
          key={btn.title}
          style={{
            backgroundColor: btn.color,
            paddingVertical: 14,
            paddingHorizontal: 32,
            borderRadius: 8,
            marginBottom: 10,
            minWidth: 180,
            alignItems: "center",
          }}
          onPress={btn.onPress}
        >
          <Text style={{ color: btn.color === "#ffeb3b" ? "#000" : "#fff", fontSize: 16, fontWeight: "bold" }}>{btn.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}