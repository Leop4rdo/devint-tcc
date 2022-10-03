export const userRoles = {
	DEV: 0,
	COMPANY: 1,
};

export default interface IAuthProps {
	id?: string;
	email: string;
	emailConfirmed: boolean;
	password: string;
	role: number;
	enabled: boolean;
}
