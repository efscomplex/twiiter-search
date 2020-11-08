import { useEffect, useState } from 'react'

interface Options {
	targetId: string
}
const defOpts = {
	rootMargin: '0px',
	threshold: 1.0
}
function useIntersectionObserver(callback: any, targetId: string) {
	const [observer] = useState(new IntersectionObserver(callback, defOpts))

	useEffect(() => {
		const target = document.getElementById(targetId)
		target && observer.observe(target)
	}, [targetId, observer])

	return {
		observer
	}
}

export default useIntersectionObserver
