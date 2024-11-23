export class Dropdown {
    constructor(container, readOption) {
        this.container = container;
        this.visible = false;
        this.readOption = readOption;
        this.handleOptionButtons.bind(this)(this.readOption.bind(this));
        const button = this.container.querySelector(".display-btn");
        button.addEventListener("click", (event) => {
            this.toggleDisplay.bind(this)();
        });
    }

    toggleDisplay() {
        this.visible ^= true;
        this.container.classList.toggle("menu-hidden");
        this.container.classList.toggle("menu-visible");

        const list = this.container.querySelector("ul");
        list.classList.toggle("hidden");
    }

    handleOptionButtons(readOption) {
        const buttons = this.container.querySelectorAll(".option");
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const value = readOption(btn);
                this.selectHandler.bind(this)(value);
                this.toggleDisplay.bind(this)();

            })
        })
    }

    selectHandler(value) {
        const resultElement = this.container.querySelector(".selection-box").querySelector("p");
        resultElement.innerText = value;
    }
}