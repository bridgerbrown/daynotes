import React, {useState, useEffect, useRef, useCallback} from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"
import dynamic from "next/dynamic";
import { io } from 'socket.io-client'

const SAVE_INTERVAL_MS = 2000
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
    const [socket, setSocket] = useState<any>()
    const [quill, setQuill] = useState<any>()
    const { documentId, noteActivated } = props

    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s)

        return () => {
            s.disconnect()
        }
    }, [])

    useEffect(() => {
        if(noteActivated){
            if (socket == null || quill == null) return

            socket.once("load-document", (document: any) => {
                document !== null ? () => props.setNoteActivated(true) : () => props.setNoteActivated(false) 
                quill.setContents(document)
                quill.enable()
            })
    
            socket.emit('get-document', documentId)
        }
    }, [socket, quill, documentId, props, noteActivated])

    useEffect(() => {
        if(noteActivated){
            if (socket == null || quill == null) return

            const interval = setInterval(() => {
                socket.emit('save-document', quill.getContents())
            }, SAVE_INTERVAL_MS)
    
            return () => {
                clearInterval(interval)
            }
        }
    }, [socket, quill, noteActivated])

    useEffect(() => {
        if(noteActivated){
            if (socket == null || quill == null) return

            const handler = (delta: any) => {
                quill.updateContents(delta)
            }
            socket.on('receive-changes', handler)
    
            return () => {
                socket.off('receive-changes', handler)
            }
        }
    }, [socket, quill, noteActivated])


    useEffect(() => {
        if(noteActivated){
            if (socket == null || quill == null) return

            const handler = (delta: any, oldDelta: any, source: any) => {
                if (source !== 'user') return
                socket.emit("send-changes", delta)
            }
            quill.on('text-change', handler)
    
            return () => {
                quill.off('text-change', handler)
            }
        }
    }, [socket, quill, noteActivated])

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
        <div className='shadow-lg mt-6 w-full bg-moduleHeaderBg pt-4 pb-12 border border-moduleBorder/20 rounded-md'>
            <header className="bg-moduleHeaderBg flex items-center pb-4 px-6 border-b border-moduleHeaderBorder/20">
                <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-xl uppercase">
                    Notes
                </h2>
                <div className='text-moduleHeader/50 flex items-center'>
                <button className='ml-6 text-sm flex items-center justify-center text-center w-6 h-6 pb-0.5 rounded-full border border-moduleHeader/50'>
                    +
                </button>
                <p className=' text-xs pl-2'>
                    Add game
                </p>
                </div>
            </header>
            <div className='h-[9in] text-black font-light bg-moduleContentBg w-full'>
                <div ref={wrapperRef}
                id="editor"
                className="editorContainer bg-white w-full h-96">
                </div>
            </div>
        </div>
    )
}