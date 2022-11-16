import { useEffect, useState } from "react"
import { ActivityIndicator, Pressable, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { IPost, IPostListItem } from "../../../interfaces/IPost"
import CommentModal from "../../CommentModal"
import Post from "../../Post"

import * as postService from '../../../services/post.service';
import { useIsFocused } from "@react-navigation/native"
import colors from "../../../styles/colors"
import ButtonComponent from "../../shared/Button"

const ProfilePostSection : React.FC<{ navigation : any, devId : string }> = ({ navigation, devId }) => {
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [selectedPostId, setSelectedPostId] = useState('')

    const isFocused = useIsFocused()

    const getPosts = async () => {
        if (!devId) return

        const { data }= await postService.listByDev(devId)

        if (!data) return
        
        const newPosts = data.filter((post : IPostListItem) => !posts.find((_) => post.id === _.id))

        setPosts([...posts, ...newPosts])
    }


    useEffect(() => { setPosts([]); getPosts() }, [isFocused, devId])

    return (
        <>
            <View style={{ flexDirection : 'column', alignItems : 'center'}}>
                {
                    posts.map((p) => 
                        <Post 
                            openProfile={() => navigation.navigate('profile', { devId : p.writter.id})}
                            openComments={() => setSelectedPostId(p.id)} 
                            data={p} 
                            key={p.id}
                        />
                    )
                }
            </View>
            { 
                selectedPostId && 
                <CommentModal 
                    postId={selectedPostId} 
                    onClose={() => setSelectedPostId('')}
                />
            }
        </>
    )
}

export default ProfilePostSection