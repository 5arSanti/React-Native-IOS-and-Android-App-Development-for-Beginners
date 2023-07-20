import { View, Image, Text } from "react-native";

import { styles } from "./styles.js"

const CircleLogo = () => {
    return(
        <View style={styles.imageLogoContainer}>
            <Image 
                soruce={require=("../../../../icon.png")}
                style={{ resizeMode: 'contain', width: 200, height: 200, marginVertical: 20,}}    
            />
        </View>
    );
}
export { CircleLogo };