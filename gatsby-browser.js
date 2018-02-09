import React from 'react'
import ReleaseProvider from './src/utils/ReleaseProvider'

exports.wrapRootComponent = ({ Root }) => {
  return () => (
    <ReleaseProvider>
      {Root}
    </ReleaseProvider>
  )
}