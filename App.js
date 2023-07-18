import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { WebView} from "react-native-webview";

//Componentes
import { Welcome } from "./Pages/components/Welcome";

export default function App() {
    const names = ["Santiago", "Sebastian", "Laura"];

    return(
        // <WebView source={{uri: "https://5arsanti.github.io/"}}/>
        <View style={styles.container}>
            <StatusBar style="auto"/>

            {names.map((item) => (
                <Welcome 
                    key={item}
                    name={item}
                />
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