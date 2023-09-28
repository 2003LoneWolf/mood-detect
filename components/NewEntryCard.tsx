'use client'
import { cretaeNewEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'
import React from 'react'


const NewEntryCard = () => {
  const router = useRouter()

  const handeOnClick= async ()=>{
    const data = await cretaeNewEntry()
    router.push(`/journal/${data.id}`)

  }
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="px-4 py-4 sm:p-6 " onClick={handeOnClick}>
            <span>New Entry</span>
        </div>
    </div>
  )
}

export default NewEntryCard