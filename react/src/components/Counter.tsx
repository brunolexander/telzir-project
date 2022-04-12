import { animate } from "framer-motion"
import { LegacyRef, MutableRefObject, useEffect, useRef } from "react"
import ICounter from "../interfaces/ICounter"

const Counter = ({ from, to }: ICounter): JSX.Element => {
	const spanRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		const span = spanRef.current

		if (span) {

			const controls = animate(from, to, {
				duration: 2,
				ease: 'easeInOut',
				onUpdate(value) {
					span.textContent = value.toFixed()
				}
			})

			return function cleanup() {
				controls.stop()
			}
		}
		
		
	}, [from, to])

	return (
		<span ref={ spanRef } />
	)
}

export default Counter