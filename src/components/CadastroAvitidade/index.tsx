import React from 'react'

import { IAtividades } from '@/dtos'
import { useAtividades } from '@/hooks/atividades'
import { api } from '@/services/api'
import { schemeRoutes } from '@/services/schemeRoutes'
import { cor } from '@/themes/cor'
import {
  PencilLine,
  PlusCircle,
  Trash,
  UserCirclePlus,
  XCircle,
} from '@phosphor-icons/react'
import { Form } from '@unform/web'

import { Input } from '../Input'
import * as S from './styles'

type T = 'create' | 'view' | 'edit'

interface I {
  closed: () => void
}

export function CadastroAvitidade({ closed }: I) {
  const atividades = useAtividades()
  const [selectType, setSelectType] = React.useState<T>('view')
  const [selectItem, setSlectItem] = React.useState<IAtividades>(
    {} as IAtividades,
  )

  const handleSubmit = React.useCallback(async (data: string) => {
    setSelectType('view')
    setSlectItem({} as IAtividades)

    await api
      .post(schemeRoutes.atividades.create, data)
      .then((h) => atividades.all.refetch())
  }, [])

  const allAtividades = atividades.all?.data || []

  const handleUpdate = React.useCallback(
    async (data) => {
      try {
        const dt = {
          DESCRICAO: data.DESCRICAO,
          id_atividade: selectItem.id_atividade,
        }
        await api.put(schemeRoutes.atividades.update, dt)

        setSlectItem({} as IAtividades)
        setSelectType('view')
        atividades.all.refetch()
      } catch (err) {
        console.log(err)
      }
    },
    [atividades.all, selectItem],
  )

  if (atividades.all.isLoading) {
    return (
      <div style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <h2>carregando...</h2>
      </div>
    )
  }

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
              setSlectItem({} as IAtividades)
            }}
            size={45}
            color={cor.red[10]}
          />
        </div>
      </div>

      {selectType === 'view' && (
        <S.view>
          {allAtividades.map((h) => (
            <S.content
              selected={selectItem === h.id_atividades}
              onClick={() => setSlectItem(h)}
              key={h.id_atividades}
            >
              <h4>{h?.DESCRICAO}</h4>

              {selectItem?.DESCRICAO === h?.DESCRICAO && (
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
            <Input label="Descrição" name="DESCRICAO" />

            <button type="submit">SALVAR</button>
          </S.box>
        </Form>
      )}

      {selectType === 'edit' && (
        <Form
          initialData={{
            DESCRICAO: selectItem.DESCRICAO,
          }}
          onSubmit={handleUpdate}
        >
          <S.box>
            <Input label="Descrição" name="DESCRICAO" />

            <button type="submit">SALVAR</button>
          </S.box>
        </Form>
      )}
    </S.Container>
  )
}
