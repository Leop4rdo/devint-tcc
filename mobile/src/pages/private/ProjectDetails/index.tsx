import View from "@expo/html-elements/build/primitives/View"
import { useIsFocused } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import LayoutWrapper from "../../../components/shared/LayoutWrapper"
import { IPostListItem } from "../../../interfaces/IPost"
import { screenHeight } from "../../../styles/utils"
import Post from "../../../components/Post"
import CommentModal from "../../../components/CommentModal"

import styles from './style'
import * as postService from '../../../services/post.service'

const ProjectDetailsPage : React.FC<{ route:any, navigation: any }> = ({ route, navigation }) => {
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [refreshing, setRefreshing] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState("")


    const isFocused = useIsFocused()
    
    const getPosts = async () => {
        if (!route.params.projectId)
            return

        const { data }= await postService.listProjectPosts(route.params.projectId, { 
            offset : posts.length, 
            limit : 24, 
            order : 'latest'
        })

        
        const newPosts = data.filter((post : IPostListItem) => !posts.find((_) => post.id === _.id))

        setPosts([...posts, ...newPosts])
    }

    const refreshPosts = async () => {
        setRefreshing(true)

        if (!route.params.projectId)
            return


        const { data } = await postService.listProjectPosts(route.params.projectId, { 
            limit : 24,
            order : route?.params?.feedType || "RANDOM"
        })

        setPosts(data)

        setRefreshing(false)
    }

    useEffect(() => { refreshPosts() }, [isFocused])

    return (
        <LayoutWrapper activeSidebarItem={-1} navigation={navigation} focused={isFocused}>

            <View style={styles.page}>

                <FlatList
                    data={posts}
                    onRefresh={refreshPosts}
                    refreshing={refreshing}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: screenHeight * .1}}
                    onEndReached={getPosts}
                    onEndReachedThreshold={.1}
                    ListHeaderComponent={<ProjectDetailsHeader />}
                    ListFooterComponent={<ActivityIndicator />}
                    renderItem={({ item }) => (
                        <Post 
                            openProfile={() => navigation.navigate('profile', { devId : item.writter.id})}
                            openProject={() => navigation.navigate('project-details', { projectId : item.project?.id})}
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

const ProjectDetailsHeader : React.FC = () => {
    return (
        <View></View>
    )
}

export default ProjectDetailsPage
