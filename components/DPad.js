import { View, Pressable, Text } from "react-native";
import { EcpNav } from "../Ecp"
import {StyleSheet} from "react-native";

export function DPad() { 
    return (
        <View style={styles.container}>
            <View>
                <Pressable style={styles.verticalButtons} onPress={EcpNav.up}>
                    <Text style={styles.text}>↑</Text>
                </Pressable>
            </View>
            <View style={styles.horizontalContainer}>
                <Pressable style={styles.horizontalButtons} onPress={EcpNav.left}>
                    <Text style={styles.text}>←</Text>
                </Pressable>
                <Pressable style={styles.selectButtons} onPress={EcpNav.select}>
                    <Text style={styles.text}>OK</Text>
                </Pressable>
                <Pressable style={styles.horizontalButtons} onPress={EcpNav.right}>
                    <Text style={styles.text}>→</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.verticalButtons} onPress={EcpNav.down}>
                    <Text style={styles.text}>↓</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    selectButtons: {
        width: 100,
        height: 100,
        marginBottom: 8,
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 40,
        paddingHorizontal: 10,
    },
        verticalButtons: {
        width: 100,
        height: 60,
        justifyContent: "center",
        marginBottom: 8,
        borderRadius: 15,
        backgroundColor: "black",
    },
        horizontalButtons: {
        width: 60,
        height: 100,
        borderRadius: 15,
        marginHorizontal: 8,
        backgroundColor: "black",
        justifyContent: "center",
    },
    text: {
        fontSize: 45,
        color: "white",
        textAlign: "center",
    },
    container: { 
        flex: 1, 
        top: 25, 
        flexDirection: "column",
        maxWidth: 400,
        alignItems: "center",
        justifyContent: "center",
    },
    horizontalContainer: {
        flexDirection: "row",
    }
})