import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

import axios from "axios";

import { styles } from "./styles.js"

//Componentes
import { UserInput } from "../../components/auth/UserInput/index.js";
import { SubmitButton } from "../../components/auth/SubmitButton/index.js";
import { CircleLogo } from "../../components/auth/CircleLogo/index.js";


const SignUp = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);


    const handleSubmit = async () => {
        setLoading(true);
        if(!name || !email || !password){
            alert("All field are required");
            setLoading(false);
            return;
        }
        console.log("SignUp Request => ", name, email, password)
        try{
            const {data} = await axios.post("http://localhost:8000/api/signup", {
                name, 
                email, 
                password,
            })
            setLoading(false);
            console.log("Sign In succes => ", data);
            alert("Sign up successful");

        }
        catch(err){
            console.log(err);
            alert(err);
            setLoading(false);
        }
    }
    
    return(
        <View style={styles.signUpContainer}>
            
            <CircleLogo/>

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

            <SubmitButton 
                title="Sign Up"
                handleSubmit={handleSubmit}
                loading={loading}
            />

        </View>
    );
}
export { SignUp };