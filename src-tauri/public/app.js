const options = {
    modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
};

const editor1 = new JSONEditor(document.getElementById('editor1'), {
    ...options,
    mode: 'text',
    onChangeText: function (jsonString) {
        editor2.updateText(jsonString);
    }
});

const editor2 = new JSONEditor(document.getElementById('editor2'), {
    ...options,
    mode: 'tree',
    onChangeText: function (jsonString) {
        editor1.updateText(jsonString);
    }
});

const sample = {
    'array': [1, 2, 3],
    'boolean': true,
    'null': null,
    'number': 123,
    'object': {'a': 'b', 'c': 'd'},
    'string': 'Hello World'
};

editor1.set(sample);
editor2.set(sample);
