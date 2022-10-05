import { Text, View } from "react-native"
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import PostComponent from "../../../components/Post";

const HomePage : React.FC<{ navigation : any }> = ({navigation}) => {
    console.log('home')
    return (
        <LayoutWrapper navigation={navigation}>
          <PostComponent></PostComponent>
        </LayoutWrapper>
    )
}

export default HomePage;
