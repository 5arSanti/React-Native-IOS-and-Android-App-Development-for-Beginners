import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },

    formContainer: {
        display: "flex",
        gap: 5,
        marginHorizontal: 24,
    },
    signUpInputText: {
        padding: 5,

        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#8e93a1",
    }
})
