import {Image,View, Text, } from "react-native"
import styles from "./styles"
import ButtonComponent from "../shared/Button"


const PostComponent : React.FC = () =>{
    return(
        <View style={styles.cardPost}>
            <View>
                <Image style={styles.perfilCard} source={{ uri : 'https://i.pinimg.com/736x/d5/c8/eb/d5c8ebdfa1eb3ec56d3c284577f3a1c6.jpg' }}></Image>
                <Text style={styles.nameCard}>oi</Text>
              

            </View>
        </View>
    )
}

export default PostComponent