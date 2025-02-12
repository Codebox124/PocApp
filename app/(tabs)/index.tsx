import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function AlertScreen() {
    return (
        <View style={styles.container}>
            {/* <Image source={require("./assets/logo.png")} style={styles.logo} /> */}
            <Text style={styles.title}>aISOC</Text>

            <View style={styles.alertBox}>
                <Text style={styles.alertTitle}>Alert</Text>
                <Text>04/02/25 16:07</Text>
                <Text style={styles.boldText}>Confirmation Required:</Text>
                <Text>Alert detail Bla bla bla</Text>
            </View>

            <View style={styles.alertBox}>
                <Text style={styles.alertTitle}>Reply</Text>
                <TouchableOpacity style={styles.buttonLight}>
                    <Text style={styles.buttonTextDark}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLight}>
                    <Text style={styles.buttonTextDark}>No</Text>
                </TouchableOpacity>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Note (Optional)"
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.historyButton}>
                <Text style={styles.buttonText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsIcon}>
                <MaterialIcons name="settings" size={30} color="gray" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5dc",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    alertBox: {
        width: "100%",
        backgroundColor: "#ece3b0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "green",
    },
    alertTitle: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    },
    boldText: {
        fontWeight: "bold",
    },
    buttonLight: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center",
        width: "100%",
    },
    buttonTextDark: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#ece3b0",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        width: "48%",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    historyButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        width: "60%",
        marginTop: 10,
    },
    settingsIcon: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
});
