const observer = new IntersectionObserver(onIntersectPlans, {
	root: null,
	threshold: 0.3
});

function onIntersectPlans(entries, opts) {
	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			entry.target.textContent = 0;

			$({counter: 0}).animate({counter: entry.target.dataset.value}, {
				duration: 1500,
				easing: 'swing',
				step: function() {
					entry.target.textContent = this.counter.toFixed();
				}
			});
		}
	});
}

const elements = document.querySelectorAll('.plan-minutes');

elements.forEach((element) => {
	observer.observe(element);
});