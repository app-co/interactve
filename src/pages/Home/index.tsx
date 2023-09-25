import { Input } from '@/components/Input'
import { Form } from '@unform/web'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Form>
        <Input name="name" placeholder="Nome fantasia" />
      </Form>
    </S.Container>
  )
}
