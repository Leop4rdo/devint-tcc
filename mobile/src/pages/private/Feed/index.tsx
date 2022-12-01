import {MaterialIcons} from "@expo/vector-icons";
import { ActivityIndicator, FlatList, Pressable, RefreshControl, Text, View } from "react-native"
import DevCarousel from "../../../components/DevCarousel";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import Post from "../../../components/Post";
import styles from "./style";
import {useEffect, useState} from "react";
import * as postService from "../../../services/post.service"
import {screenHeight} from "../../../styles/utils";
import CommentModal from "../../../components/CommentModal";
import {useIsFocused} from "@react-navigation/native";
import { IPostListItem } from "../../../interfaces/IPost";

const FeedPage : React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [isRefreshing, setRefreshing] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState("")
    const [activeSidebarItem, setActiveSidebarItem] = useState(0)

    const isFocused = useIsFocused()


    const getPosts = async () => {
        const { data }= await postService.list({ 
            offset : posts.length, 
            limit : 24, 
            order : route?.params?.feedType || "random"
        })

        
        const newPosts = data.filter((post : IPostListItem) => !posts.find((_) => post.id === _.id))

        setPosts([...posts, ...newPosts])
    }

    const refreshPosts = async () => {
        setRefreshing(true)

        const { data } = await postService.list({ 
            limit : 24,
            order : route?.params?.feedType || "RANDOM"
        })

        setPosts(data)

        setRefreshing(false)
    }

    const getActiveSidebarItem = () => {
        const feedType = route?.params?.feedType || ''
        console.log(route?.param?.feedType)
        if (feedType.toUpperCase() == 'LATEST')
            setActiveSidebarItem(2)
        else if (feedType.toUpperCase() == 'TRENDING')
            setActiveSidebarItem(1)
        else
            setActiveSidebarItem(0)

    }
 
    useEffect(() => { setPosts([]); getPosts(), getActiveSidebarItem() }, [isFocused])

    return (
        <LayoutWrapper activeSidebarItem={activeSidebarItem} navigation={navigation} focused={isFocused}>

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
                    ListHeaderComponent={<DevCarousel navigation={navigation}/>}
                    ListFooterComponent={<ActivityIndicator />}
                    renderItem={({ item }) => (
                        <Post 
                            openProfile={() => navigation.navigate('profile', { devId : item.writter.id})}
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

export default FeedPage;
