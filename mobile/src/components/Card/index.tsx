import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, SafeAreaView } from "react-native";
import { View, Image,Text, Pressable} from "react-native";

import style from "./style";



const Card: React.FC = () => {

    const collaborator = [
        {
            id: 1,
            name: 'ana',
           
          
        },
        {
            id: 2,
            name: 'ana',
     
        },
        {
            id: 3,
            name: 'ana',
           
        },
        {
            id: 4,
            name: 'ana',
        },
        {
            id: 1,
            name: 'ana',
           
          
        },
        {
            id: 2,
            name: 'ana',
     
        },
        {
            id: 3,
            name: 'ana',
           
        },
        {
            id: 4,
            name: 'ana',
        },   {
            id: 1,
            name: 'ana',
           
          
        },
        {
            id: 2,
            name: 'ana',
     
        },
        {
            id: 3,
            name: 'ana',
           
        },
        {
            id: 4,
            name: 'ana',
        },   {
            id: 1,
            name: 'ana',
           
          
        },
        {
            id: 2,
            name: 'ana',
     
        },
        {
            id: 3,
            name: 'ana',
           
        },
        {
            id: 4,
            name: 'ana',
        },
       
    ]

    const oneCollaborator = ({item}) => (
        <View style={style.item}>
            <View >
                <Pressable>
                    <Image style={style.avatar}>
                    </Image>
                </Pressable>
        </View>
    
        </View>

    )

   

    return (
       <View style={style.card}>

                <Image style={style.banner}></Image>
            <View style={style.contents}>
                <View style={style.containerProject}>
                    <View style={style.containerTitle}>
                        <Text style={style.title}>Devint Network</Text>
                        <Text style={style.typeProject}>(open source)</Text>
                    </View>

                    <View >
                        <Pressable>
                            <MaterialIcons name="edit" style={style.containerEdit}/>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={style.description}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, centuries.</Text>
                </View>
            </View>

            <View>
                <SafeAreaView>
                    <FlatList
                    data={collaborator}
                    renderItem = {oneCollaborator}
                    horizontal/>
                </SafeAreaView>
             
            </View>

            <View style={style.data}>
                <View >
                    <Pressable style={style.github}>
                        <MaterialIcons name="favorite"  style={style.icon} />
                        <Text style={style.github}>github</Text>
                    </Pressable>
                </View>

                 <View style={style.like}>
                     <Pressable>
                         <MaterialIcons  name="favorite" style={style.icon}/>
                     </Pressable>
                     <Text style={style.like}>100</Text>
                 </View>
                
            </View>

       </View>
    )


}
export default Card