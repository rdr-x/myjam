'use client'
import { type ComponentProps, useState, useCallback } from 'react'
import useClipboard from 'react-use-clipboard'
import { ShareIcon } from '@/components/Icons'
import ToolTip from '@/components/Tooltip'
import FunctionButton from '@/modules/FunctionBtn'

interface ClipBoardProps {
  content: string
}

const ClipBoard: React.FC<ComponentProps<'button'> & ClipBoardProps> = ({
  content,
}) => {
  const [isCopied, copy] = useClipboard(content, { successDuration: 1000 })
  const [isHovering, setIsHovering] = useState(false)
  const handleMoseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  return (
    <ToolTip text={'copied'} trigger="hover" controledOpen={isCopied}>
      <FunctionButton
        curPath={isHovering}
        onClick={copy}
        onMouseEnter={handleMoseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ShareIcon curPath={isHovering} />
      </FunctionButton>
    </ToolTip>
  )
}

export default ClipBoard
