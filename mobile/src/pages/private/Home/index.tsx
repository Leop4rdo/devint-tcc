import {MaterialIcons} from "@expo/vector-icons";
import { ActivityIndicator, FlatList, Pressable, RefreshControl, Text, View } from "react-native"
import DevCarousel from "../../../components/DevCarousel";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import Post from "../../../components/Post";
import styles from "./style";
import {useEffect, useState} from "react";
import IPostListItem from "../../../interfaces/IPost";
import * as postService from "../../../services/post.service"
import {screenHeight} from "../../../styles/utils";
import CommentModal from "../../../components/CommentModal";
import {useIsFocused} from "@react-navigation/native";

const HomePage : React.FC<{ navigation : any }> = ({navigation}) => {
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [isRefreshing, setRefreshing] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState("")

    const isFocused = useIsFocused()

    const getPosts = async () => {
        const { data }= await postService.list({ offset : posts.length, limit : 24 })
        
        const newPosts = data.filter((post : IPostListItem) => !posts.find((_) => post.id === _.id))

        setPosts([...posts, ...newPosts])
    }

    const refreshPosts = async () => {
        setRefreshing(true)

        const { data } = await postService.list({ limit : 24 })

        setPosts(data)

        setRefreshing(false)
    }

    useEffect(() => { setPosts([]); getPosts() }, [isFocused])

    return (
        <LayoutWrapper navigation={navigation}>

            <View style={styles.page}>
                <Pressable onPress={() => navigation.navigate('post-register')}style={styles.floatingButton}>
                    <MaterialIcons name="edit" size={24} color="#FFF"/>
                </Pressable>

                <FlatList
                    data={posts}
                    onRefresh={refreshPosts}
                    refreshing={isRefreshing}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: screenHeight * .1}}
                    onEndReached={getPosts}
                    onEndReachedThreshold={.1}
                    ListHeaderComponent={<DevCarousel />}
                    ListFooterComponent={<ActivityIndicator />}
                    renderItem={({ item }) => (
                        <Post 
                            openComments={() => setSelectedPostId(item.id)} 
                            data={item} 
                            key={`${item.id}-${Math.random()**999}`}
                        />
                    )}
                    />

                { selectedPostId && <CommentModal postId={selectedPostId} onClose={() => setSelectedPostId('')}/>}
            </View>
        </LayoutWrapper>
    )
}

export default HomePage;
