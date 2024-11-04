function imageSlider() {
    return {
        currentIndex: 0,
        images: ['images/card1.png', 'images/card2.png', 'images/card3.png'],
        autoScroll() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
            }, 3000);
        }
    }
}