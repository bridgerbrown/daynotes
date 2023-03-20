import React from 'react'
import { v4 as uuidV4 } from 'uuid'
import { useRouter } from 'next/router'

export default function Note() {
    const router = useRouter()
    const { id } = router.query

    router.push(`/note/${uuidV4()}`)
    return (
        <div>
            
        </div>
    )
}
