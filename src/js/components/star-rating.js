export function initStarRating() {
    const $rating = document.querySelectorAll('.star-rating');

    if ($rating.length > 0) {
        $rating.forEach(item => {
            const $ratingBar = item.querySelector('.star-rating__active');
            const ratingValue = item.querySelector('.star-rating__value').dataset.starRatingValue || item.querySelector('.star-rating__value').textContent;

            const value = (ratingValue * 10) * 2;

            $ratingBar.style.width = value + '%';
        })
    }
}
initStarRating();