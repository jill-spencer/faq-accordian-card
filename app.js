const questions = document.querySelectorAll('.single-question');

questions.forEach((question) => {
	const btn = question.querySelector('.question-title');

	btn.addEventListener('click', () => {
		questions.forEach((item) => {
			// console.log(item);
			console.log(item.title);
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});
