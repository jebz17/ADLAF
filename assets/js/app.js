
const content = document.getElementById('content-text');
const quill = new Quill('#editor', {
    modules: {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean']
        ]
    },
    placeholder: 'Texto...',
    theme: 'snow'
});

const handledAddClause = (text) => {
    const isSelected = quill.getSelection();
    if (isSelected) {
        const positionCursor = isSelected.index;
        const lengthWord = isSelected.length;
        if (lengthWord > 0) {
            quill.deleteText(positionCursor, lengthWord);
        }
        quill.insertText(positionCursor, `${ text };`, 'bold', true); 
    }
}

