import View from "@expo/html-elements/build/primitives/View"
import { useIsFocused } from "@react-navigation/native"
import React, { useContext, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, Pressable, Text } from "react-native"
import LayoutWrapper from "../../../components/shared/LayoutWrapper"
import { IPostListItem } from "../../../interfaces/IPost"
import { screenHeight } from "../../../styles/utils"
import Post from "../../../components/Post"
import CommentModal from "../../../components/CommentModal"
import IProject from "../../../interfaces/IProject"

import styles from './style'

import * as postService from '../../../services/post.service'
import * as projectService from '../../../services/project.service'
import { MaterialIcons } from "@expo/vector-icons"
import colors from "../../../styles/colors"
import { AuthContext } from "../../../store/context/Auth.context"

const ProjectDetailsPage : React.FC<{ route:any, navigation: any }> = ({ route, navigation }) => {
    const [project, setProject] = useState<IProject>()
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [refreshing, setRefreshing] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState("")


    const isFocused = useIsFocused()
    
    const getProject = async () => {
        if (!route.params.projectId)
            return

        const { data } = await projectService.getById(route.params.projectId)

        setProject(data)
    }

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

    useEffect(() => { getProject(); refreshPosts() }, [isFocused])

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
                    ListHeaderComponent={
                        <ProjectDetailsHeader 
                            data={project}
                            onMemberPress={(devId) => navigation.navigate('profile', { devId })}
                        />
                    }
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

interface ProjectDetailsHeaderProps {
    data ?: IProject
    onMemberPress : (id : string) => void
}

const ProjectDetailsHeader : React.FC<ProjectDetailsHeaderProps> = ({ data, onMemberPress }) => {
    const [hearted, setHearted] = useState(false);
    const authContext = useContext(AuthContext)
    
    const toggleHeart = () => {
        projectService.toggleHeart(data?.id!)
        setHearted(!hearted)
    }
    
    const getHeartAmount = () => {
        if (data?.hearts!.includes(authContext?.userData.id) && !hearted)
            return data.hearts?.length! -1;
        if (!data?.hearts!.includes(authContext?.userData.id) && hearted)
            return data?.hearts?.length! +1;
        else
            return data?.hearts?.length!;
    }

    return (
        <View>
            <View style={styles.titleContainer}>
                <View>
                    { data?.openSource && <Text style={styles.openSource}>(Open Source)</Text>}
                    <Text style={styles.title}>{data?.name}</Text>
                </View>

                <Pressable style={styles.like} onPress={toggleHeart}>
                    <Text style={[styles.like, {marginRight : 8}]}>{getHeartAmount()}</Text>
                    <MaterialIcons name="favorite" color={(hearted ? colors.PRIMARY : colors.GRAY)} size={24}/>
                </Pressable>
            </View>
            
            {
                data?.bannerURI &&
                <Image style={styles.banner} source={{uri : data.bannerURI}} />
            }

            {
                data?.desc &&
                <Text style={styles.desc}>{data.desc}</Text>
            }            
            
            <Text style={styles.memberLabel}>Membros</Text>

            <FlatList
                    data={data?.members}
                    renderItem={({item}) => 
                        <Pressable style={styles.member} onPress={() => onMemberPress(item.id)}>
                            <Image style={[styles.member, {margin : 0}]}source={{uri : item.profilePicUrl}}/>
                        </Pressable>
                    }
                    pagingEnabled
                    horizontal
                />

            <View style={styles.divisor} />
        </View>
    )
}

export default ProjectDetailsPage
