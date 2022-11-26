import { useEffect, useState } from "react"
import {Image, Pressable, Text, View} from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler";
import IDevMinimal from "../../interfaces/IDev";
import * as devService from "../../services/dev.service";
import styles from "./style";

const DevCarousel : React.FC<{ navigation : any }> = ({ navigation }) => {
    const [devs, setDevs] = useState<IDevMinimal[]>([])

    const getDevs = async () => {
        const res = await devService.list({ limit : 32 })
        console.log(res.data)
        setDevs(res.data)
    }

    useEffect(() => { getDevs() }, [])

    return (
        <View style={styles.carousel}>
            <FlatList
                data={devs}
                renderItem={({item}) => 
                    <Pressable onPress={() => navigation.navigate('profile', { devId : item.id})}>
                        <Image source={{uri : item.profilePicUrl}} style={styles.item}/>
                    </Pressable>
                }
                keyExtractor={(dev) => dev.id}
                horizontal
                pagingEnabled
            />
        </View>
    )
}

export default DevCarousel
