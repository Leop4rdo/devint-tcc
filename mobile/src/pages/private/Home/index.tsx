import { Text, View } from "react-native"
import LayoutWrapper from "../../../components/shared/LayoutWrapper";

const HomePage : React.FC<{ navigation : any }> = ({navigation}) => {
    console.log('home')
    return (
        <LayoutWrapper navigation={navigation}>
            <Text>Caramelo</Text>
        </LayoutWrapper>
    )
}

export default HomePage;
