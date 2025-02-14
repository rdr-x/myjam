'use client'
import { useSearchParams } from 'next/navigation'
import { MediaPlayer } from '@/components/MediaPlayer'

const LivePage: React.FC = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  const streamKey = searchParams.get('streamKey')
  const chatid = searchParams.get('chatid')
  const id = searchParams.get('id')
  // if (!streamKey) return <div></div>

  return (
    <MediaPlayer
      chatid={chatid}
      title={title ?? ''}
      streamKey={streamKey ?? ''}
      id={id ?? ''}
    />
  )
}

export default LivePage
