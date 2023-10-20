'use client'
import { useSearchParams } from 'next/navigation'
import { MediaPlayer } from '@/components/MediaPlayer'

const LivePage: React.FC = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  const streamKey = searchParams.get('streamKey')
  const chatid = searchParams.get('chatid')
  // if (!streamKey) return <div></div>

  return (
    <MediaPlayer
      chatId={chatid}
      title={title ?? ''}
      streamKey={streamKey ?? ''}
    />
  )
}

export default LivePage
