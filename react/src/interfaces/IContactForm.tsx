interface IContactFormData {
	name: number;
	phone: number;
	email: number;
	subject: number;
	message: number;
}

interface IContactFormInputs {
	name: boolean;
	phone: boolean;
	email: boolean;
	subject: boolean;
	message: boolean;
}

export type {
	IContactFormData,
	IContactFormInputs
}