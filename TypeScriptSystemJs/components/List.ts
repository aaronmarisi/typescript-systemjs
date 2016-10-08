function List(element) {
    this.element = element;
    this._noItemClass = 'no-items';
}

List.prototype.addListElement = function (text, className) {
    var li = document.createElement('LI');
    var textElement = document.createTextNode(text);
    li.classList.add(className);
    li.appendChild(textElement);
    this.element.appendChild(li);
};

List.prototype.render = function () {
    this.element.classList.add('list');
    this.addListElement('No Items', this._noItemClass);
};

List.prototype.addItem = function (text) {
    var placeholders = this.element.getElementsByClassName(this._noItemClass);
    if (placeholders.length) {
        this.element.removeChild(placeholders[0]);
    }
    this.addListElement(text, 'list-item');
};

export default List;