'use client'
import { useSearchParams } from 'next/navigation'
import { MediaPlayer } from '@/components/MediaPlayer'

const LivePage: React.FC = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  const streamKey = searchParams.get('streamKey')

  return <MediaPlayer title={title ?? ''} streamKey={streamKey ?? ''} />
}

export default LivePage
