import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { View, Image, Text, Pressable} from "react-native";
import { color } from "react-native-reanimated";
import IProject from "../../../../interfaces/IProject";
import colors from "../../../../styles/colors";

import style from "./style";

import * as projectService from '../../../../services/project.service'
import { AuthContext } from "../../../../store/context/Auth.context";
import { A } from "@expo/html-elements";
import { useNavigation } from "@react-navigation/native";

interface IProjectCardProps {
    data : IProject
    onMemberPress : (id : string) => void
    onEditPress ?: () => void
}

const ProjectCard: React.FC<IProjectCardProps> = ({ data, onMemberPress, onEditPress }) => {
    const [hearted, setHearted] = useState(false);
    const authContext = useContext(AuthContext)

    const navigation = useNavigation()

    const toggleHeart = () => {
        projectService.toggleHeart(data.id!)
        setHearted(!hearted)
    }

    const getHeartAmount = () => {
        if (data.hearts!.includes(authContext?.userData.id) && !hearted)
            return data.hearts?.length! -1;
        if (!data.hearts!.includes(authContext?.userData.id) && hearted)
            return data.hearts?.length! +1;
        else
            return data.hearts?.length!;
    }

    useEffect(() => setHearted(data.hearts!.includes(authContext?.userData.id)), [data])

    return (
       <View style={style.card}>
            { data.bannerURI && 
                <Pressable onPress={() => navigation.navigate('project-details' as never, { projectId : data.id} as never)}>
                    <Image source={{ uri : data.bannerURI}} style={style.banner} />
                </Pressable>
            }
            <View style={style.contents}>
                <View style={style.containerProject}>
                    <Pressable onPress={() => navigation.navigate('project-details' as never, { projectId : data.id} as never)} style={style.containerTitle}>
                        { data.openSource && <Text style={style.typeProject}>(open source)</Text> }
                        <Text style={style.title}>{data.name}</Text>
                    </Pressable>

                    <View >
                        <Pressable onPress={onEditPress}>
                            <MaterialIcons  name="edit" size={24} color={colors.GRAY}/>
                        </Pressable>
                    </View>
                </View>

                {
                    data.desc &&
                    <Pressable onPress={() => navigation.navigate('project-details' as never, { projectId : data.id} as never)}>
                        <Text style={style.description}>{data.desc}</Text>
                    </Pressable>
                }
            </View>

            <Pressable onPress={() => navigation.navigate('project-details' as never, { projectId : data.id} as never)}>
                <FlatList
                    data={data.members}
                    renderItem={({item}) => 
                        <Pressable style={style.member} onPress={() => onMemberPress(item.id)}>
                            <Image style={[style.member, {margin : 0}]}source={{uri : item.profilePicUrl}}/>
                        </Pressable>
                    }
                    pagingEnabled
                    horizontal
                />
            </Pressable>

            <View style={style.data}>
                <View >
                    <View style={style.github}>
                        <Image style={{width : 24, height : 24, marginRight : 8}} source={require("../../../../../assets/github-icon-gray.png")} />
                        <A href={data.githubRepository?.url} style={style.github}>github</A>
                    </View>
                </View>

                <Pressable style={style.like} onPress={toggleHeart}>
                    <Text style={[style.like, {marginRight : 8}]}>{getHeartAmount()}</Text>
                    <MaterialIcons name="favorite" color={(hearted ? colors.PRIMARY : colors.GRAY)} size={24}/>
                </Pressable>
            </View>

       </View>
    )


}
export default ProjectCard
