import React from 'react'
import dynamic from 'next/dynamic'

const EditorNoSSR = dynamic(() => import('../components/text-editor/text-editor'), { ssr: false })

export default function Test() {
  return (
    <div className=''>
      <EditorNoSSR />
    </div>
  )
}
