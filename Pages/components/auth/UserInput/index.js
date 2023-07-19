import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

import { styles } from "./styles.js"

const UserInput = ({
    name, 
    value,
    setValue,
    autoCapitalize = "none",
    keyboardType = "default",
    secureTextEntry = false,
    autoComplete,
}) => {
    return(
        <View style={styles.formContainer}>
            <Text send>{name}</Text>
            <TextInput 
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoComplete={autoComplete}

                placeholder={name} 
                style={styles.signUpInputText}
                value={value}
                onChangeText={(text) => {setValue(text)}}
            />
        </View>
    );
}
export { UserInput };