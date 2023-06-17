import React, {useState, useEffect, useRef, useCallback} from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"

const SAVE_INTERVAL_MS = 1000
const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

export default function TextEditor(props: any){
  const { setQuill } = props;

    // const showToolbar = () => {
    //     document.querySelector<HTMLElement>(".ql-toolbar")!.style.display = "flex"
    //     document.querySelector<HTMLElement>(".ql-editor")!.style.marginTop = "0px"
    // }

    // const hideToolbar = () => {
    //     document.querySelector<HTMLElement>(".ql-toolbar")!.style.display = "none"
    //     document.querySelector<HTMLElement>(".ql-editor")!.style.paddingTop = "40px"
    // }
    
    const wrapperRef: any = useCallback((wrapper: any) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q: any = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } })
        q.disable()
        q.setText('Loading...')
        setQuill(q)
        // document.getElementById("editor")?.addEventListener("mouseover", showToolbar)
        // document.getElementById("editor")?.addEventListener("mouseleave", hideToolbar)
    }, [])

    return (
        <div className='shadow-lg w-[8.5in] h-[11in] bg-moduleHeaderBg pb-12'>
            <div className='h-[11in] text-black font-light bg-moduleContentBg w-full'>
                <div ref={wrapperRef}
                id="editor"
                className="editorContainer bg-white w-full h-[11in]">
                </div>
            </div>
        </div>
    )
}
