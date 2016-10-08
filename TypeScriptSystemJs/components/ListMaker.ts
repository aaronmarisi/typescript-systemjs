import AddItemTextBox from './AddItemTextBox'
import List from './List'

function ListMaker(element) {
    this.element = element;
}

ListMaker.prototype.render = function () {
    var _this = this;

    var textInput = document.createElement('INPUT');
    this.textBox = new AddItemTextBox(textInput);
    this.textBox.render();

    var ul = document.createElement('UL');
    this.list = new List(ul);
    this.list.render();

    this.textBox.onItemEntered = function (text) {
        _this.list.addItem(text);
        _this.textBox.clearText();
    };

    this.element.appendChild(textInput);
    this.element.appendChild(ul);
};

export default ListMaker;