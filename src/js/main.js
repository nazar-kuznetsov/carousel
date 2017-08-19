function Slider(settings) {
  this.prev = document.querySelector(settings.prev);
  this.next = document.querySelector(settings.next);
  this.slider = document.querySelector(settings.slider);

  this.len = this.slider.children.length;
  this.count = 0;

  this.next.addEventListener('click', this.slideNext.bind(this));
  this.prev.addEventListener('click', this.slidePrev.bind(this));
}


Slider.prototype.slideNext = function () {
  this.count++;
  this.slideCheck.call(this);
  this.slider.style.transform = "translateX(-" + this.count + "00%)";

};


Slider.prototype.slidePrev = function () {
  this.count--;
  this.slideCheck.call(this);
  this.slider.style.transform = "translateX(-" + this.count + "00%)";
};


Slider.prototype.slideCheck = function () {

  if (this.count >= this.len) {
    this.count = 0;
  } else if (this.count < 0) {
    this.count = this.len - 1;
  }

};
  


new Slider ({
  prev: ".slider__controll #prev",
  next: ".slider__controll #next",
  slider: ".slider__list"
});