import React, {useState} from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';

export default function Quill(){
    const [quillValue, setQuillValue] = useState<any>('')

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    

    return (
            <ReactQuill className="bg-white h-full w-full" 
                theme="snow" value={quillValue} onChange={setQuillValue} 
                modules={modules}
                formats={formats}
            />
    )
}