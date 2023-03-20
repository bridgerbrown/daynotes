import React, {useState, useEffect, useRef, useCallback} from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"
import dynamic from "next/dynamic";
import { io } from 'socket.io-client'

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
    const [socket, setSocket] = useState<any>()
    const [quill, setQuill] = useState<any>()

    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s)

        return () => {
            s.disconnect()
        }
    }, [])

    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta: any) => {
            quill.updateContents(delta)
        }
        socket.on('receive-changes', handler)

        return () => {
            socket.off('receive-changes', handler)
        }
    }, [socket, quill])


    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta: any, oldDelta: any, source: any) => {
            if (source !== 'user') return
            socket.emit("send-changes", delta)
        }
        quill.on('text-change', handler)

        return () => {
            quill.off('text-change', handler)
        }
    }, [socket, quill])

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
        setQuill(q)
        // document.getElementById("editor")?.addEventListener("mouseover", showToolbar)
        // document.getElementById("editor")?.addEventListener("mouseleave", hideToolbar)
    }, [])

    return (
        <div ref={wrapperRef}
        id="editor"
        className="editorContainer bg-white w-full h-96">
        </div>
    )
}