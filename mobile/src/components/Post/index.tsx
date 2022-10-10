import {Image,View, Text, Pressable, } from "react-native"
import styles from "./styles"
import ButtonComponent from "../shared/Button"
import {MaterialIcons} from "@expo/vector-icons"
import colors from "../../styles/colors"
import IPostListItem from "../../interfaces/IPost"


interface IPostProps {
    data : IPostListItem
}

const Post : React.FC<IPostProps> = ({ data }) =>{

    return(
        <View style={styles.cardPost}>
            <View style={styles.header}>
                <Image style={styles.profilePic} source={{ uri : 'https://i.pinimg.com/736x/d5/c8/eb/d5c8ebdfa1eb3ec56d3c284577f3a1c6.jpg' }}></Image>
                <View>
                    <Text style={styles.devName}>{data.writter.name}</Text>
                    <Text style={styles.devGithub}>{data.writter.githubUsername}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.content}>
                    {
                        data.content
                    }
                </Text>
            </View>

            <View style={styles.footer}>
                <Pressable style={styles.footerButtonContainer}>
                    <MaterialIcons name='forum' size={24} color={colors.LIGHT_GRAY} />
                    <Text style={styles.footerButtonLabel}>10 comentários</Text>
                </Pressable>

                <Pressable style={styles.footerButtonContainer}>
                    <Text style={styles.footerButtonLabel}>10</Text>
                    <MaterialIcons name='favorite' size={24} color={colors.PRIMARY} />
                </Pressable>
            </View>
        </View>
    )
}

export default Post
