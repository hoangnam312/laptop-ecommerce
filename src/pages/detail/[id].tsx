import DetailPage from '@/component/DetailPage'
import { useRouter } from 'next/router'
import React from 'react'

const DetailScreen = () => {
  const router = useRouter()

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="max-w-[1024px]">
        <DetailPage />
      </div>
    </div>
  )
}

export default DetailScreen