import React, {useState, useEffect, useRef, useCallback} from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function TextEditor(){
    const wrapperRef: any = useCallback((wrapper: any) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, { theme: "snow" })
    }, [])

    return (
        <div id="container" ref={wrapperRef}
        className="bg-white w-full h-96">
        </div>
    )
}