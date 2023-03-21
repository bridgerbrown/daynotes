import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { v4 as uuidV4 } from 'uuid'

const EditorNoSSR = dynamic(() => import('../../components/text-editor/text-editor'), { ssr: false })

export default function Test() {
  const router = useRouter()
  const { id: documentId } = uuidV4()


  return (
    <div className=''>
      <p>Post: {documentId}</p>
      <EditorNoSSR documentId={documentId} />
    </div>
  )
}
