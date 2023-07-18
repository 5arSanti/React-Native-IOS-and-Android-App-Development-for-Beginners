import React from "react";
import { View, Text} from "react-native";

const Welcome = ({ name }) => {
    return(
        <View>
            <Text>Hello {name}</Text>
        </View>
    );
}
export { Welcome };