import React, { useMemo, useCallback, memo } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = memo(({ quillRef, htmlContent, setHtmlContent }) => {

    const modules = useMemo(
        () => ({
            toolbar: { // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image", "video"],
                ],

            },
        }), []);

    const formats = useMemo(() => [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "size",
        "color",
        "list",
        "bullet",
        "indent",
        "align",
        "image",
        "video"
    ], []);

    const editorStyles = useMemo(() => ({
        height: '600px', // QuillEditor 높이를 400px로 설정
        marginLeft: '188px',
        width:'80%',
    }), []);

    return (
        <div style={editorStyles}>
            <ReactQuill
                ref={quillRef}
                value={htmlContent}
                onChange={setHtmlContent}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="내용을 입력하세요"
                style={{height:'550px', marginBottom:'0'}}
            />
        </div>
    )
})

export default QuillEditor;