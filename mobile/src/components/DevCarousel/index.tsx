import { useEffect, useState } from "react"
import {Image, Text, View} from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler";
import IDevMinimal from "../../interfaces/IDev";
import * as devService from "../../services/dev.service";
import styles from "./style";

const DevCarousel : React.FC = () => {
    const [devs, setDevs] = useState<IDevMinimal[]>([])

    const getDevs = async () => {
        const res = await devService.list({ limit : 32 })

        setDevs(res.data)
    }

    useEffect(() => { getDevs() }, [])

    return (
        <View style={styles.carousel}>
            <FlatList
                data={devs}
                renderItem={({item}) => 
                    <Image source={{uri : item.profilePicUrl}} style={styles.item}/>
                }
                keyExtractor={(dev) => dev.id}
                horizontal
                pagingEnabled
            />
        </View>
    )
}

export default DevCarousel
