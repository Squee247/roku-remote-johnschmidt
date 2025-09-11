import { View, Pressable, Text } from "react-native";
import { EcpVolume } from "../Ecp"
import {StyleSheet} from "react-native";

export function VolumeControl() {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Pressable style={styles.volumeButton} onPress={EcpVolume.volumeDown}>
                    <Text style={styles.text}>-</Text>
                </Pressable>
                <Pressable style={styles.volumeButton} onPress={EcpVolume.mute}>
                    <Text style={styles.text}>M</Text>
                </Pressable>
                <Pressable style={styles.volumeButton} onPress={EcpVolume.volumeUp}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    volumeButton: {
        width: 80,
        height: 80,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 40,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 36,
        color: "white",
        textAlign: "center",
    },
    container: {
        flex: 1,
        top: 15,
        marginHorizontal: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 100,
        alignSelf: "center",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 25,
        maxWidth: 100,
        alignSelf: "center",
    }
})