import IArticleProps from "./IArticle"
import IBadgeProps from "./IBadge"
import ICompanyProps from "./ICompany"
import IDevProps from "./IDev"
import IProjectProps from "./IProject"
import ISeniorityProps from "./ISeniority"
import ISkillProps from "./ISkill"
import ISocialLinkProps from "./ISocialLink"


export interface IUserProps extends IDevProps, ICompanyProps {
    role : number
}

export const userRoles = {
    DEV : 0,
    COMPANY : 1,
}