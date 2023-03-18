import React, {useState, useEffect, useRef, useCallback} from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ aling: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

export default function TextEditor(){
    const wrapperRef: any = useCallback((wrapper: any) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } })
    }, [])

    return (
        <div ref={wrapperRef}
        className="container bg-white w-full h-96">
        </div>
    )
}