import { Text, View } from "react-native"
import FeedbackTextInput from "../../../components/shared/FeedbackInput";
import ButtonComponent from "../../../components/shared/Button";
import styles from "./style";
import NavBar from "../../../components/shared/Nav";

const HomePage : React.FC = () => {

    return (
        <View style={styles.page}>
            <NavBar />
        </View>
    )
}

export default HomePage;
