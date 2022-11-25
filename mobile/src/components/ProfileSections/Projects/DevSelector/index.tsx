import { useEffect, useState } from "react"
import { Alert, Image, Pressable, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import IDevMinimal from "../../../../interfaces/IDev"
import FeedbackTextInput from "../../../shared/FeedbackInput"

import styles from "./style"
import * as devService from "../../../../services/dev.service"

interface DevSelectorProps {
    onSelect : (dev : IDevMinimal) => void
    ignoreIds ?: string[]
}

const DevSelector : React.FC<DevSelectorProps> = ({ onSelect, ignoreIds }) => {
    const [devs, setDevs] = useState<IDevMinimal[]>([])
    const [search, setSearch] = useState('')

    const searchDevs = async () => {
        if (search.length == 0) 
            return

        const res = await devService.list({
            search,
            limit : 2,
            ignore : ignoreIds
        })

        setDevs(res.data || [])
    }

    useEffect(() => { searchDevs() }, [search])

    console.log(devs)

    return (
        <View>
            <FeedbackTextInput 
                placeholder="Pesquisar integrantes"
                style={styles.input}
                value={search}
                onChangeText={(text) => setSearch(text)}
            />

            {
                search.length > 0 && devs?.length > 0 &&
                <View style={styles.optionsWrapper}>
                    {
                        devs.map((dev) => 
                            <DevOption 
                                key={dev.id}
                                data={dev} 
                                onPress={() => {
                                    onSelect(dev);

                                    setDevs([])
                                    setSearch('')
                                }} 
                            />
                        )
                    }
                </View>
            }
        </View>
    )
}

interface DevOptionProps {
    data : IDevMinimal
    onPress : () => void
}

const DevOption : React.FC<DevOptionProps> = ({ data, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.devOption}>
            <Image style={styles.devPic} source={{ uri : data.profilePicUrl }} />

            <View>
                <Text style={styles.devName}>{data.name}</Text>
                <Text style={styles.devGithub}>{data.githubUsername}</Text>
            </View>
        </Pressable>
    )
}

export default DevSelector
