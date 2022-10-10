import {MaterialIcons} from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native"
import DevCarousel from "../../../components/DevCarousel";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import PostComponent from "../../../components/Post";
import styles from "./style";

const HomePage : React.FC<{ navigation : any }> = ({navigation}) => {

    return (
        <LayoutWrapper navigation={navigation}>
          <PostComponent></PostComponent>
            <View style={styles.page}>
                <DevCarousel />

                <Pressable onPress={() => navigation.navigate('post-register')}style={styles.floatingButton}>
                    <MaterialIcons name="edit" size={24} color="#FFF"/>
                </Pressable>
            </View>
        </LayoutWrapper>
    )
}

export default HomePage;
