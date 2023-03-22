class EventCard {
  constructor() {
    this.cards = document.querySelector(".list-card");
    this.cardEl = [];
  }

  setUp() {
    this.bindEvents();
  }

  bindEvents() {
    this.cards.addEventListener("click", (event) => {
      const elClicked = event.target;

      if ((elClicked.targetName = "LI")) {
        if (this.cardEl.length < 2 && this.cardEl[0] !== elClicked) {
          this.cardEl.push(elClicked);
          elClicked.classList.add("on");

          if (this.cardEl.length === 2) {
            setTimeout(() => {
              this.cardEl.forEach((item) => {
                if (
                  this.cardEl[0].dataset.name === this.cardEl[1].dataset.name
                ) {
                  item.style.visibility = "hidden";
                } else {
                  item.classList.remove("on");
                }
              });

              this.cardEl.splice(0);
            }, 500);
          }
        }
      }
    });
  }
}

export default EventCard;
