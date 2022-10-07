import { useEffect, useState } from "react"
import {Image, Text, View} from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { IDevMinimal } from "../../interfaces/IDev"
import * as devService from "../../services/dev.service";
import styles from "./style";

const DevCarousel : React.FC = () => {
    const [devs, setDevs] = useState<IDevMinimal[]>([])

    const getDevs = async () => {
        const res = await devService.list({ limit : 10 })

        setDevs(res.data)
    }

    useEffect(() => { getDevs() }, [])

    return (
        <View style={styles.carousel}>
            <ScrollView horizontal>
                {devs?.map((dev) => 
                    <Image key={dev.id} source={{uri : dev.profilePicUrl}} style={styles.item}/>
                )}
            </ScrollView>
        </View>
    )
}

export default DevCarousel
