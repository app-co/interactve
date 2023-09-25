import { PencilLine } from '@phosphor-icons/react'

import * as S from './styles'

interface I {
  option: string[]
  edit?: boolean
  pres: () => void
}

export function Option({ option = [], edit, pres }: I) {
  return (
    <S.box>
      <S.Container>
        {option.map((h) => (
          <option key={h} value="">
            <h4>{h}</h4>
          </option>
        ))}
      </S.Container>
      {edit && <PencilLine onClick={pres} size={30} />}
    </S.box>
  )
}
