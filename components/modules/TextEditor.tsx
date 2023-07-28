import React, { useCallback } from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

export default function TextEditor(props: any){
  const { setQuill, setLoadingDocument, loadingDocument } = props;
  const loadingCSS: string = `bg-gray-200 opacity-90 transition-opacity w-[93vw] sm:w-[85vw] lg:w-[8.5in] h-[11in] pb-12`;
  const loadedCSS: string = `transition-opacity opacity-100 w-[93vw] sm:w-[85vw] lg:w-[8.5in] h-[11in] pb-12`;


    const wrapperRef: any = useCallback((wrapper: any) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q: any = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } })
        q.disable()
        setLoadingDocument(true);
        setQuill(q)
    }, [])

    return (
      <div className={ loadingDocument ? loadingCSS : loadedCSS }>
        <div className='flex flex-col items-center h-[11in] text-black font-light w-full'>
          <div ref={wrapperRef}
          id="editor"
          className="editorContainer w-full">
          </div>

        </div>
      </div>
    )
}
