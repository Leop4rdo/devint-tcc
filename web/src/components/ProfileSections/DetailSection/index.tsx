import ICareerProps from "interfaces/ICareerFocus";
import { IDev } from "interfaces/IDev";
import ISeniorityProps from "interfaces/ISeniority";
import ISkillProps from "interfaces/ISkill";
import React, { useEffect, useState } from "react";
import * as devService from '../../../services/dev.service'

interface IDetailSectionProps {
    data : IDev
    canEdit : boolean
    onFinishEditing : (data : IDev) => void
}

const genderOptions = [
    { label : 'Masculino', value : 'm' },
    { label : 'Feminino', value : 'f' },
    { label : 'Outro', value : 'o' }
]

const DetailSection : React.FC<IDetailSectionProps> = (props) => {
    
    const [careerFocusOptions, setCareerFocusOptions] = useState<{ label : string, value : string}[]>([])
    const [seniorityOptions, setSeniorityOptions] = useState<{ label : string, value : string}[]>([])
    const [allSkills, setAllSkills] = useState<ISkillProps[]>([])
    const [data, setData] = useState({ ...props.data })

    const [editing, setEditing] = useState({
        about : false,
        careerFocus : false,
        seniority : false,
        currentJob : false,
        skills : false
    })

    const getGender = (gender : string) => {
        if (gender.toLocaleLowerCase() == 'f') 
            return 'Feminino'
        else if (gender.toLocaleLowerCase() == 'm')
            return 'Masculino'
        else
            return 'Outro'        
    }

    const toggleEditing = (key : keyof typeof editing) => {
        if (editing[key])
            props.onFinishEditing(data)

        setEditing({
            ...editing,
            [key] : !editing[key]
        })
    }

    const handleChange = (value : string, key : keyof typeof data) => {
        setData({
            ...data,
            [key] : value
        })
    }

    const handleSelectChange = (value : string, key : keyof typeof data, options : any[]) => {
        const selected = options.find((o) => o.value == value)

        setData({
            ...data,
            [key] : selected
        })
    }

    const getCareerFocusOptions = async () => {
        const res = await devService.listCareerFocus()

        setCareerFocusOptions(
            res.data.map((c : ICareerProps) => {
                return {
                    value : c.id,
                    label : c.name
                }
            })
        )
    }

    const getSeniorityOptions = async () => {
        const res = await devService.listSeniorities()

        setSeniorityOptions(
            res.data.map((c : ISeniorityProps) => {
                return {
                    value : c.id,
                    label : c.name
                }
            })
        )
    }

    const getAllSkills = async () => {
        const res = await devService.listSkills()

        setAllSkills(res.data)
    }

    const addSkill = (id : string) => {
        const newSkill= allSkills.find((s) => s.id == id)

        if(!newSkill)
            alert("Erro ao adicionar skill!")

        setData({
            ...data,
            skills : [
                ...data.skills,
                newSkill!
            ]
        })
    }

    const removeSkill = (id : string) => {
        setData({
            ...data,
            skills : data.skills.filter((s) => s.id != id)
        })
    }

    useEffect(() => {getCareerFocusOptions(); getSeniorityOptions(); getAllSkills() }, [])

    return (
        <>
            
        </>
    )
}

export default DetailSection;