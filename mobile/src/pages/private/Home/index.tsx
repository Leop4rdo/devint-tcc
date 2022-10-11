import {MaterialIcons} from "@expo/vector-icons";
import { FlatList, Pressable, Text, View } from "react-native"
import DevCarousel from "../../../components/DevCarousel";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import Post from "../../../components/Post";
import styles from "./style";
import {useEffect, useState} from "react";
import IPostListItem from "../../../interfaces/IPost";
import * as postService from "../../../services/post.service"
import {screenHeight} from "../../../styles/utils";

const HomePage : React.FC<{ navigation : any }> = ({navigation}) => {
    const [posts, setPosts] = useState<IPostListItem[]>([])

    const getPosts = async () => {
        const { data }= await postService.list({ offset : 0, limit : 10 })

        setPosts(data ?? [])
    }

    useEffect(() => { getPosts() }, [])

    return (
        <LayoutWrapper navigation={navigation}>
            <View style={styles.page}>
                <Pressable onPress={() => navigation.navigate('post-register')}style={styles.floatingButton}>
                    <MaterialIcons name="edit" size={24} color="#FFF"/>
                </Pressable>

                <FlatList
                    data={posts}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: screenHeight * .25}}
                    ListHeaderComponent={<DevCarousel />}
                    renderItem={({ item }) => (
                        <Post data={item} key={item.id}/>
                    )}
                    />
            </View>
        </LayoutWrapper>
    )
}

export default HomePage;
