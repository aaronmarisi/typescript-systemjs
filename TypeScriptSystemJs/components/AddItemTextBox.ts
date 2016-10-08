function AddItemTextBox(element) {
    this.element = element;
}

AddItemTextBox.prototype.render = function () {
    var _this = this;
    this.element.type = 'text';
    this.element.placeholder = 'Type and Press Enter';
    this.element.onkeypress = function (e) {
        if ((e.which == 13 || e.keyCode == 13) && _this.onItemEntered) {
            _this.onItemEntered(_this.element.value);
            return false;
        }
        return true;
    };
};

AddItemTextBox.prototype.clearText = function () {
    this.element.value = '';
};

export default AddItemTextBox;