import React from 'react'

import { cor } from '@/themes/cor'
import { PencilLine, PlusCircle, Trash, XCircle } from '@phosphor-icons/react'
import { Form } from '@unform/web'

import { Input } from '../Input'
import * as S from './styles'

type T = 'create' | 'view' | 'edit'

const descri = ['colaction', 'descricao', 'move']

interface I {
  closed: () => void
}

export function CadastroGrupo({ closed }: I) {
  const [selectType, setSelectType] = React.useState<T>('view')
  const [selectItem, setSlectItem] = React.useState(null)

  const handleSubmit = React.useCallback(async (data: string) => {
    setSelectType('view')
    setSlectItem(null)

    console.log(data)
  }, [])

  return (
    <S.Container>
      <div className="head">
        <div className="box">
          <h3>Atividades</h3>
          <button onClick={() => setSelectType('create')}>
            <PlusCircle size={25} weight="duotone" color={cor.orange[1]} />
            ADICIONAR
          </button>
        </div>

        <div
          style={{ flexDirection: 'row', gap: '1rem', alignItems: 'center' }}
        >
          <h4>SAIR</h4>
          <XCircle
            onClick={() => {
              closed()
              setSlectItem(null)
            }}
            size={45}
            color={cor.red[10]}
          />
        </div>
      </div>

      {selectType === 'view' && (
        <S.view>
          {descri.map((h) => (
            <S.content
              selected={selectItem === h}
              onClick={() => setSlectItem(h)}
              key={h}
            >
              <h4>{h}</h4>

              {selectItem === h && (
                <div className="row">
                  <button>
                    <Trash color={cor.red[10]} size={25} weight="duotone" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectType('edit')
                    }}
                  >
                    <PencilLine
                      color={cor.orange[1]}
                      size={25}
                      weight="duotone"
                    />
                  </button>
                </div>
              )}
            </S.content>
          ))}
        </S.view>
      )}

      {selectType === 'create' && (
        <Form onSubmit={handleSubmit}>
          <S.box>
            <Input label="Descrição" name="descricao" />

            <button type="submit">SALVAR</button>
          </S.box>
        </Form>
      )}

      {selectType === 'edit' && (
        <Form
          initialData={{
            descricao: selectItem,
          }}
          onSubmit={handleSubmit}
        >
          <S.box>
            <Input label="Descrição" name="descricao" />

            <button type="submit">SALVAR</button>
          </S.box>
        </Form>
      )}
    </S.Container>
  )
}
