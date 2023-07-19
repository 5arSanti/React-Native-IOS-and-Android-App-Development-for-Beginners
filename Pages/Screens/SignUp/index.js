import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

import { styles } from "./styles.js"
import { UserInput } from "../../components/auth/UserInput/index.js";

const SignUp = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    
    return(
        <View style={styles.signUpContainer}>
            <Text title center>Sign Up</Text>
            <UserInput 
                name={"Name"}
                value={name}
                setValue={setName}
                autoCapitalize="words"
                autoCorrect={false}
            />
            <UserInput 
                name={"Email"}
                value={email}
                setValue={setEmail}
                autoComplete="email"
                keyboardType="email-address"
            />
            <UserInput 
                name={"Password"}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
                autoComplete="password"
            />
            <Text>{JSON.stringify({name, email, password}, null, 4)}</Text>
        </View>
    );
}
export { SignUp };