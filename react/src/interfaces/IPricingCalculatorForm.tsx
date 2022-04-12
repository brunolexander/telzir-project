interface IPricingCalculatorFormData {
	planId: number;
	destinationPhoneId: number;
	sourcePhoneId: number;
	callDuration: number;
}

interface IPricingCalculatorFormInputs {
	planId: boolean;
	destinationPhoneId: boolean;
	sourcePhoneId: boolean;
	callDuration: boolean;
}

export type {
	IPricingCalculatorFormData,
	IPricingCalculatorFormInputs
}