import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, SafeAreaView } from "react-native";
import { View, Image, Text, Pressable} from "react-native";
import { color } from "react-native-reanimated";
import IProject from "../../../../interfaces/IProject";
import colors from "../../../../styles/colors";

import style from "./style";

interface IProjectCardProps {
    data : IProject
    onMemberPress : (id : string) => void
}

const ProjectCard: React.FC<IProjectCardProps> = ({ data, onMemberPress }) => {
    return (
       <View style={style.card}>
            <Image source={{ uri : data.bannerURI}} style={style.banner}></Image>
            <View style={style.contents}>
                <View style={style.containerProject}>
                    <View style={style.containerTitle}>
                        <Text style={style.title}>{data.name}</Text>
                        { data.openSource && <Text style={style.typeProject}>(open source)</Text> }
                    </View>

                    <View >
                        <Pressable>
                            <MaterialIcons  name="edit" size={24} color={colors.GRAY}/>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={style.description}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, centuries.</Text>
                </View>
            </View>

            <View>
                <>{console.log(data.members)}
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
                </>
            </View>

            <View style={style.data}>
                <View >
                    <Pressable style={style.github}>
                        <MaterialIcons name="favorite"  style={style.icon} />
                        <Text style={style.github}>github</Text>
                    </Pressable>
                </View>

                <Pressable style={style.like}>
                    <Text style={[style.like, {marginRight : 8}]}>100</Text>
                    <MaterialIcons name="favorite" color={(data.alreadyHearted ? colors.PRIMARY : colors.GRAY)} size={24}/>
                </Pressable>
            </View>

       </View>
    )


}
export default ProjectCard