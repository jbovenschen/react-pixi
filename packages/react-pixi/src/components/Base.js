class Base {
  constructor() {
    this.children = [];
  }

  appendChild(child) {
    // add a child to the list to be rendered
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }
}

export default Base;