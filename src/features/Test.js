import { useState } from 'react'

export const Test = () => {
  const [personName] = useState('Pedro Oliveira')

  return (
    <div>
      <p>Ola, meu nome é {personName}</p>
    </div>
  )
}
