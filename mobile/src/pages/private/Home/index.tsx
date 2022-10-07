import { Text, View } from "react-native"
import DevCarousel from "../../../components/DevCarousel";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import { getToken } from "../../../services";
import styles from "./style";

const HomePage : React.FC<{ navigation : any }> = ({navigation}) => {
    
    getToken().then((res) => console.log('token ->', res))

    return (
        <LayoutWrapper navigation={navigation}>
            <View style={styles.page}>
                <DevCarousel />
            </View>
        </LayoutWrapper>
    )
}

export default HomePage;
