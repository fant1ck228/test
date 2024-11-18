document.querySelectorAll('.detailsButton').forEach(button => {
    button.addEventListener('click', () => {
        const detailsContainer = button.closest('li').querySelector('.episodeDetails');
        if (detailsContainer.classList.contains('showDetails')) {
            detailsContainer.classList.remove('showDetails');
        } else {
            detailsContainer.classList.add('showDetails');
        }
    });
});

