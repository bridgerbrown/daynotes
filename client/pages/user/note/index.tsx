import { useRouter } from 'next/router'
import React from 'react'
import { v4 as uuidV4 } from 'uuid'

export default function NoteIndex() {
    const router = useRouter()
    console.log(uuidV4())
  return (
    <div>
      
    </div>
  )
}
