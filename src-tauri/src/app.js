import 'jsoneditor/src/scss/jsoneditor.scss';
import JSONEditor from 'jsoneditor';


const editor = new JSONEditor(document.getElementById('editor'), {
    mode: 'code',
    modes: ['code', 'preview'],
    onChangeText: function (jsonString) {
        inspector.updateText(jsonString);
    }
});

const inspector = new JSONEditor(document.getElementById('inspector'), {
    mode: 'tree',
    modes: ['tree', 'form', 'view'],
    onChangeText: function (jsonString) {
        editor.updateText(JSON.stringify(JSON.parse(jsonString), null, 2));
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

editor.set(sample);
inspector.set(sample);
