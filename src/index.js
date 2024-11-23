import "./styles.css";
import { Dropdown } from "./dropdown";

function readOption(btn) {
    return btn.innerText;
}

const dropdown = new Dropdown(document.querySelector(".dropdown"), readOption);
