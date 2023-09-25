import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface I extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

export function Button({ title = 'SALVAR', ...rest }: I) {
  return (
    <S.Container {...rest}>
      <h4>{title}</h4>
    </S.Container>
  )
}
