export default class FieldTypeSplitter {
  constructor({ text }) {
    this.text = text;
  }

  split() {
    const [type, ...configArray] = this.text.split(/{([a-z0-9|,]+)}/);
    return [type].concat(configArray.slice(0, 1));
  }
}