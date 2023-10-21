'use client'
import { useEffect, useState, useCallback } from 'react'
import QRCode from 'react-qr-code'
import { DOMAIN } from '@/utils/constants'
import { useGetParams, Params } from '@/services/params'

const QR: React.FC = () => {
  const [params, setParams] = useState<Params>({
    chatid: null,
    contractAddr: null,
    creatorAddr: null,
    id: null,
  })
  const getParams = useGetParams()
  const handleParams = useCallback(() => {
    const params = getParams()
    if (!params) return
    setParams(params)
  }, [])

  useEffect(() => {
    handleParams()
  }, [])

  return (
    <div className="flex justify-center items-center">
      <QRCode
        value={`${DOMAIN}view/${params.id}?chatid=${params.chatid}&contractAddr=${params.contractAddr}&creatorAddr=${params.creatorAddr}`}
      />
    </div>
  )
}

export default QR
