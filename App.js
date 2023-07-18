import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Componentes
import { Welcome } from "./Pages/components/Welcome";

export default function App() {
    const names = ["Santiago", "Sebastian", "Laura"];

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>

            {names.map((item) => (
                <Welcome name={item}/>
            ))}
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
})