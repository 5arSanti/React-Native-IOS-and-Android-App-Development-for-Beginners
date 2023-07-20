import { TouchableOpacity, View } from "react-native";
import Text from "@kaloraat/react-native-text";

import { styles } from "./styles";

const SubmitButton = ({title, handleSubmit, loading}) => {
    return(
        <View style={styles.signUpButtonContainer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.signUpButton}>
                <Text bold medium center color="#fff">
                    {loading ? "Please wait..." : title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export { SubmitButton };