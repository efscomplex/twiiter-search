import { useEffect } from 'react'
import { fromEvent } from 'rxjs'
import { map, filter, debounceTime, distinct } from 'rxjs/operators'

const HEIGHT = {
   get win(){ return document.documentElement.clientHeight },
   get scroll(){ return document.documentElement.scrollHeight },
}

function useInfinityScroll({
	callToService,
	thresold = 300,
	setLoading = () => true,
	loading
}) {
	const scroller = () =>
		fromEvent(window, 'scroll').pipe(
			filter(() => !loading),
			map(() => window.scrollY),
			filter((scroll) => HEIGHT.scroll - scroll - HEIGHT.win < thresold),
			debounceTime(200),
			distinct()
		)

	useEffect(() => {
		scroller().subscribe(async (e) => {
			await callToService()
			console.log(loading)
		})
	})
}

export default useInfinityScroll