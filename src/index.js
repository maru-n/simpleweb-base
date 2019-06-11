import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class  TestClass {
  constructor() {
    this.str = ""
  }

  addString(str) {
    this.str += str
    this.str += " "
  }

  getElement() {
    let element = document.createElement('div')
    element.innerHTML = this.str
    return element
  }
}

let a = new TestClass()
a.addString("test")
a.addString("class")
document.body.appendChild(a.getElement())
