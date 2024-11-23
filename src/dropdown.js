export class Dropdown {
    constructor(container) {
        this.container = container;
        const button = this.container.querySelector(".display-btn");
        button.addEventListener("click", (event) => {
            this.toggleDisplay.bind(this)();
        });
    }

    toggleDisplay() {

        this.container.classList.toggle("menu-hidden");
        this.container.classList.toggle("menu-visible");

        const list = this.container.querySelector("ul");
        list.classList.toggle("hidden");
    }
}