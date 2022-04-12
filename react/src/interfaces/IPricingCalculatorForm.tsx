interface IPricingCalculatorFormData {
	planTime: number;
	destinationPhoneId: number;
	sourcePhoneId: number;
	callDuration: number;
}

interface IPricingCalculatorFormInputs {
	planTime: boolean;
	destinationPhoneId: boolean;
	sourcePhoneId: boolean;
	callDuration: boolean;
}

export type {
	IPricingCalculatorFormData,
	IPricingCalculatorFormInputs
}