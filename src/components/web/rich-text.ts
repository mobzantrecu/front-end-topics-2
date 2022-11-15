import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit";

@customElement("rich-text")
export class RichText extends LitElement {
  @property({ attribute: "text-value" })
  textValue = "";

  render() {
    return html` <div>${this.textValue}</div> `;
  }
}
