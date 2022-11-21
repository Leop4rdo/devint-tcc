import Select from "components/shared/Select";
import ICareerProps from "interfaces/ICareerFocus";
import { IDev } from "interfaces/IDev";
import ISeniorityProps from "interfaces/ISeniority";
import ISkillProps from "interfaces/ISkill";
import React, { useEffect, useState } from "react";
import { dateMask } from "utils/masks";
import * as devService from "../../../services/dev.service";
import DetailCard from "./detailCard";
import InfoItem from "./infoItem";
import SkillToken from "./skillToken";

interface IDetailSectionProps {
	data: IDev;
	canEdit: boolean;
	onFinishEditing: (data: IDev) => void;
}

const genderOptions = [
	{ label: "Masculino", value: "m" },
	{ label: "Feminino", value: "f" },
	{ label: "Outro", value: "o" },
];

const DetailSection: React.FC<IDetailSectionProps> = (props) => {
	const [careerFocusOptions, setCareerFocusOptions] = useState<
		{ label: string; value: string }[]
	>([]);
	const [seniorityOptions, setSeniorityOptions] = useState<
		{ label: string; value: string }[]
	>([]);
	const [allSkills, setAllSkills] = useState<ISkillProps[]>([]);
	const [data, setData] = useState({ ...props.data });

	const [editing, setEditing] = useState({
		about: false,
		careerFocus: false,
		seniority: false,
		currentJob: false,
		skills: false,
	});

	const getGender = (gender: string) => {
		if (!gender) return "o";

		if (gender.toLocaleLowerCase() == "f") return "Feminino";
		else if (gender.toLocaleLowerCase() == "m") return "Masculino";
		else return "Outro";
	};

	const toggleEditing = (key: keyof typeof editing) => {
		if (editing[key]) props.onFinishEditing(data);

		setEditing({
			...editing,
			[key]: !editing[key],
		});
	};

	const handleChange = (value: string, key: keyof typeof data) => {
		setData({
			...data,
			[key]: value,
		});
	};

	const handleSelectChange = (
		value: string,
		key: keyof typeof data,
		options: any[]
	) => {
		const selected = options.find((o) => o.value == value);

		console.table({
			value,
			key,
		})

		setData({
			...data,
			[key]: {
                id : selected.value,
                name : selected.label
            },
		});
	};

	const getCareerFocusOptions = async () => {
		const res = await devService.listCareerFocus();

		setCareerFocusOptions(
			res.data.map((c: ICareerProps) => {
				return {
					value: c.id,
					label: c.name,
				};
			})
		);
	};

	const getSeniorityOptions = async () => {
		const res = await devService.listSeniorities();

		setSeniorityOptions(
			res.data.map((c: ISeniorityProps) => {
				return {
					value: c.id,
					label: c.name,
				};
			})
		);
	};

	const getAllSkills = async () => {
		const res = await devService.listSkills();

		setAllSkills(res.data);
	};

	const addSkill = (id: string) => {
		const newSkill = allSkills.find((s) => s.id == id);

		if (!newSkill) alert("Erro ao adicionar skill!");

		setData({
			...data,
			skills: [...data.skills, newSkill!],
		});
	};

	const removeSkill = (id: string) => {
		setData({
			...data,
			skills: data.skills.filter((s) => s.id != id),
		});
	};

	useEffect(() => {
		getCareerFocusOptions();
		getSeniorityOptions();
		getAllSkills();
	}, []);

	if (!props.data) return <span>loading...</span>;

	return (
		<>
			<DetailCard
				title="Contato"
				headerIcon="forum"
				canEdit={props.canEdit}
                
			>
				<InfoItem icon="mail" value={data.email} />
			</DetailCard>

			<DetailCard
				title="Sobre"
				headerIcon="info"
				onEditPress={() => toggleEditing("about")}
				canEdit={props.canEdit}
				editing={editing.about}
			>
				<InfoItem
					icon="today"
					value={data.birthday}
					onChangeText={(text) =>
						handleChange(dateMask(text), "birthday")
					}
					editing={editing.about}
				/>
				<InfoItem
					icon="person"
					value={editing.about ? data.gender : getGender(data.gender)}
					options={genderOptions}
					onChangeText={(text) => handleChange(text, "gender")}
					editing-={editing.about}
				/>
				<InfoItem
					imageUri={"./public/assets/icons/github.svg"}
					value={data.githubUsername}
					editing={editing.about}
					onChangeText={(text) =>
						handleChange(text, "githubUsername")
					}
				/>
			</DetailCard>

			<DetailCard
				title="Foco de carreira"
				headerIcon="center_focus_strong"
				onEditPress={() => toggleEditing("careerFocus")}
				editing={editing.careerFocus}
			>
				<InfoItem
					value={
						editing.careerFocus
							? data.careerFocus?.id || ""
							: data.careerFocus?.name || "Não informado"
					}
					editing={editing.careerFocus}
					options={careerFocusOptions}
					onChangeText={(event) =>
						handleSelectChange(
							event.target.value,
							"careerFocus",
							careerFocusOptions
						)
					}
				/>
			</DetailCard>

			<DetailCard
				title="Senioridade"
				headerIcon="school"
				onEditPress={() => toggleEditing("seniority")}
				editing={editing.seniority}
				canEdit={props.canEdit}
			>
				<InfoItem
					value={
						editing.seniority
							? data.autoDeclaredSeniority?.id || ""
							: data.autoDeclaredSeniority?.name ||
							  "Não informado"
					}
					editing={editing.seniority}
					options={seniorityOptions}
					onChangeText={(event) =>
						handleSelectChange(
							event?.target.value,
							"autoDeclaredSeniority",
							seniorityOptions
						)
					}
				/>
			</DetailCard>

			<DetailCard
				headerIcon="star"
				title="Habilidades"
				onEditPress={() => toggleEditing("skills")}
				editing={editing.skills}
				canEdit={props.canEdit}
			>
				{editing.skills && (
					<Select onChange={(e : any) => addSkill(e.target.value)}>
						<option value='' disabled label="Selecionar uma skill" />
						{allSkills
							.filter(
								(skill) =>
									!data.skills.find((s) => s.id == skill.id)
							)
							.map((skill) => (
								<option	value={skill.id} key={skill.id}>{skill.name}</option>
							))}
					</Select>
				)}

				<div className="token-container">
					{data.skills.map((skill) => (
						<>
							<SkillToken
								data={skill}
								editing={editing.skills}
								onRemove={removeSkill}
							/>
						</>
					))}
				</div>
			</DetailCard>
		</>
	);
};

export default DetailSection;
