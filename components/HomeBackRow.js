import { View, Pressable, Text } from "react-native";
import { EcpNav } from "../Ecp"
import {StyleSheet} from "react-native";

export function HomeBackRow() { 
    return (
        <View style={styles.container}>
            <Pressable style={styles.buttons} onPress={EcpNav.back}>
                <Text style={styles.text}>Back</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={EcpNav.home}>
                <Text style={styles.text}>Home</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        minWidth: 120,
        minHeight: 65,
        maxHeight: 65,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 36,
        color: "white",
        textAlign: "center",
    },
    container: { 
        flex: 1, 
        top: 50, 
        marginHorizontal:-25,
        flexDirection: "row", 
        justifyContent: "space-around",
    }
})