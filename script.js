class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.thumb = '';

        this.init()
    }
    activeSlide(index) {
        this.active = index;

        this.items.forEach(function(item) {
            item.classList.remove('--active')

        })
        this.thumbItems.forEach(function(item) {
            item.classList.remove('active');
        })
        this.items[index].classList.add('--active');
        this.thumbItems[index].classList.add('active');
        this.autoSlide();

    }
    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        }
    }
    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);

        }
    }
    addThumbItems() {
        var self = this;
        this.items.forEach(function() {
            self.thumb.innerHTML += '<span></span>'
        });
        this.thumbItems = Array.from(this.thumb.children);

    }
    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next);
        const prevBtn = this.slide.querySelector('.slide-prev');
        prevBtn.addEventListener('click', this.prev);

    }
    autoSlide() {
        var self = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function() {
            self.next();

        }, 5000)
    }
    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.addThumbItems();

        this.activeSlide(0);


        this.addNavigation();
    }
}

new SlideStories('slide');