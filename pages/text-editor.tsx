import Quill from '@/components/text-editor/quill'
import React from 'react'

export default function TextEditor(){
    return(
        <div className='w-screen min-h-screen bg-slate-900'>
            <Quill />
        </div>
    )
}