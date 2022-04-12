export default interface ICallRate {
	readonly id: number;
	readonly source_id: number;
	readonly destination_id: number;
	cost_per_minute: number;
}