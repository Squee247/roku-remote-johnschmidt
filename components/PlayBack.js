import { View, Pressable, Text } from "react-native";
import { EcpAppMenu, EcpPlayback } from "../Ecp"
import {StyleSheet} from "react-native";


export function OptionPlayRow() { 
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Pressable style={styles.irOptionsButton} onPress={EcpPlayback.instantReplay}>
                    <Text style={styles.text}>IR</Text>
                </Pressable>
                <Pressable style={styles.searchButtons} onPress={EcpAppMenu.search}>
                    <Text style={styles.text}>Search</Text>
                </Pressable>
                <Pressable style={styles.irOptionsButton} onPress={EcpAppMenu.info}>
                    <Text style={styles.text}>*</Text>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable style={styles.ffRewindButton} onPress={EcpPlayback.rewind}>
                    <Text style={styles.text}>R</Text>
                </Pressable>
                <Pressable style={styles.playButtons} onPress={EcpPlayback.play}>
                    <Text style={styles.text}>Play</Text>
                </Pressable>
                <Pressable style={styles.ffRewindButton} onPress={EcpPlayback.fastForward}>
                    <Text style={styles.text}>F</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    irOptionsButton: {
        width: 55,
        height: 55,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
    },
        searchButtons: {
        width: 150,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    ffRewindButton: {
        width: 55,
        height: 75,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    playButtons: {
        width: 120,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 26,
        color: "white",
        textAlign: "center",
    },
    container: { 
        flex: 1,
        top: 250,
        marginHorizontal: 25,
    },
    rowContainer: {
        flexDirection: "row",
        marginHorizontal: 30,
        justifyContent: "space-around",
        marginVertical: 15,
        top: -175
    }
})