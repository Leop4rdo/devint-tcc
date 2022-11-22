import { NavigationProp } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

import styles from './style'
import * as projectService from '../../../services/project.service'
import ProjectCard from "./ProjectCard";
import IProject from "../../../interfaces/IProject";

const ProfileProjectsSection : React.FC<{ navigation : any, devId ?: string }> = ({ navigation, devId }) => {
    const [projects, setProjects] = useState<IProject[]>([])

    const getProjects = async () => {
        if (!devId) return

        const res = await projectService.listByDev(devId)

        console.log(res)

        setProjects(res.data)
    }

    useEffect(() => { getProjects() }, [devId])

    return (
        <>
            <View style={{ flexDirection : 'column', alignItems : 'center'}}>
                <Pressable onPress={() => navigation.navigate('project-register')} style={styles.button}>
                    <Text style={styles.buttonText}>Novo Projeto</Text>
                </Pressable>

                {
                    projects.map((p) => 
                        <ProjectCard 
                            key={p.id}
                            data={p} 
                            onMemberPress={(id) => 
                                navigation.navigate('profile', { devId : id })
                            }
                        />
                    )
                }
            </View>
        </>
    )

}

export default ProfileProjectsSection