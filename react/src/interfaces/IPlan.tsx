export default interface IPlan {
	readonly id: number;
	price: number;
	time: number;
	key_features: string[];
	onClick?: Function;
}