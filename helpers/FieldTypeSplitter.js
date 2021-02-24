export default class FieldTypeSplitter {
  constructor({ text }) {
    this.text = text;
  }

  split() {
    const [type, ...configArray] = this.text.split(/({[a-z0-9|,]+})/);
    const config = configArray[0] ?? "";
    return [type, config];
  }
}