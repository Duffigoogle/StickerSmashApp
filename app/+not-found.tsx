import { Stack, Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen />
            <View style={styles.container}>
                <Link href={"/"} style={styles.button}>
                    go back home
                </Link>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: "white",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "white",
    }
    
})