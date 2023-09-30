import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import React from 'react'

const getEntry = async (id) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where:{
      userId_id:{
        id,
        userId:user.id,
      }
    },
  })
  return entry
}

const EntryPage = async ({params}) => {
  const entry = await getEntry(params.id)
  return (
    <div className='w-full h-full'>
      <Editor entry={entry} />
    </div>
  )
}

export default EntryPage