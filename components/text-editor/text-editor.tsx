import React, {useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function TextEditor(){
    const [text, setText] = useState<string>("")

    return (
        <div className="flex justify-center ">
            <div className="flex justify-center">
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onChange={(e: any, editor: any) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                />
            </div>
        </div>
    )
}