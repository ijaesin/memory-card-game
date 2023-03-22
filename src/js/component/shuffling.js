class Shuffling {
  constructor() {
    this.data = ["mura", "gary", "binky", "licat", "javadog"];
    this.parent = document.querySelector(".list-card");
  }

  setUp() {
    this.shufflingCards();
  }

  shufflingCards() {
    let dataDouble = this.data.concat(this.data);

    while (dataDouble.length) {
      const randomNumber = Math.floor(Math.random() * dataDouble.length);
      this.generateCards(dataDouble[randomNumber]);

      dataDouble.splice(randomNumber, 1);
    }
  }

  generateCards(item) {
    const element = document.createElement("li");
    element.classList.add(item);
    element.dataset.name = item;
    this.parent.appendChild(element);
  }
}

export default Shuffling;
