import React, { useRef } from 'react'

import { Button } from '@/components/Button'
import { CadastroAvitidade } from '@/components/CadastroAvitidade'
import { CadastroGrupo } from '@/components/CadastroGrupo'
import { Contabilidade } from '@/components/Contabilidade'
import { Input } from '@/components/Input'
import { Option } from '@/components/Option'
import { useAtividades } from '@/hooks/atividades'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import * as S from './styles'

const option = ['algo', 'outra coisa', 'marta']

export function Cadastro() {
  const ref = useRef<FormHandles>(null)
  const atividade = useAtividades()

  const [modalContabil, setModalContabil] = React.useState(false)
  const [modalAtividade, setModalAtividade] = React.useState(false)
  const [modalGrupo, setModalGrupo] = React.useState(false)

  const handleSubmit = React.useCallback(async (data: any) => {
    console.log(data)
  }, [])

  const atividades = React.useMemo(() => {
    const ativi = atividade.all.data || []

    return ativi.map((h) => h.DESCRICAO)
  }, [atividade.all.data])

  return (
    <S.Container>
      <S.modal className="modal" isOpen={modalContabil}>
        <Contabilidade closed={() => setModalContabil(false)} />
      </S.modal>

      <S.modal isOpen={modalAtividade}>
        <CadastroAvitidade closed={() => setModalAtividade(false)} />
      </S.modal>

      <S.modal isOpen={modalGrupo}>
        <CadastroGrupo closed={() => setModalGrupo(false)} />
      </S.modal>

      <Form>
        <div className="box">
          <div className="row">
            <Input label="Nome fantasia" name="nome_fantasia" />
            <Input label="Insc. Estadual" name="insc_stadual" />
            <S.sizeInpu size="16rem">
              <Input label="Cli. Desde" name="cli_esde" type="date" />
            </S.sizeInpu>
          </div>

          <div className="row">
            <Input label="CNPJ" name="cnpj" />
            <Input label="Razão social" name="Razao_ocial" />

            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
              <p>Ativo</p>
              <input
                style={{ height: '1.8rem', width: '1.8rem' }}
                type="checkbox"
              />
            </div>
          </div>

          <div className="row">
            <div style={{ flex: 1 }}>
              <p>Atividades</p>
              <Option
                option={atividades}
                edit
                pres={() => setModalAtividade(true)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p>Grupos</p>
              <Option pres={() => setModalGrupo(true)} />
            </div>

            <div style={{ flex: 1 }}>
              <Input name="recisao" label="Recisão" />
            </div>
          </div>
        </div>

        <div className="box">
          <h3>Endereço Comercial</h3>

          <div className="row">
            <S.sizeInpu size={'17rem'}>
              <Input mask="cep" label="CEP" name="cep" />
            </S.sizeInpu>

            <Input label="Cidade" name="cidade" />

            <S.sizeInpu size="6rem">
              <Input label="UF" name="uf" />
            </S.sizeInpu>
          </div>

          <div className="row">
            <Input label="bairro" name="bairro" />
            <Input label="Logradouro" name="logradouro" />

            <S.sizeInpu size="9rem">
              <Input label="Nº" name="name" />
            </S.sizeInpu>
          </div>

          <S.sizeInpu size="14.5rem">
            <Input label="Complemento" name="complemento" />
          </S.sizeInpu>
        </div>

        <div className="box">
          <h3>Endereço para combrança</h3>

          <div className="row">
            <S.sizeInpu size={'17rem'}>
              <Input mask="cep" label="CEP" name="cep" />
            </S.sizeInpu>

            <Input label="Cidade" name="cidade" />

            <S.sizeInpu size="6rem">
              <Input label="UF" name="uf" />
            </S.sizeInpu>
          </div>

          <div className="row">
            <Input label="bairro" name="bairro" />
            <Input label="Logradouro" name="logradouro" />

            <S.sizeInpu size="9rem">
              <Input label="Nº" name="name" />
            </S.sizeInpu>
          </div>

          <S.sizeInpu size="14.5rem">
            <Input label="Complemento" name="complemento" />
          </S.sizeInpu>
        </div>

        <div className="box">
          <h3>Identificação da empresa contratante</h3>

          <S.sizeInpu size="19rem">
            <p>Origem</p>
            <Option />
          </S.sizeInpu>

          <div className="row">
            <div style={{ flex: 1 }}>
              <p>Implantação, Treinamento, Acompanhamento</p>
              <Option edit />
            </div>
            <div style={{ flex: 1 }}>
              <p>Mensal Sofware</p>
              <Option edit />
            </div>
            <div style={{ flex: 1 }}>
              <p>Indicado por</p>
              <Option edit />
            </div>
          </div>

          <div className="row">
            <div style={{ flex: 1 }}>
              <p>Módulos ativos</p>
              <Option edit />
            </div>

            <div style={{ flex: 1 }}>
              <p>Desenvolvimento e customizações</p>
              <Option edit />
            </div>

            <div style={{ flex: 1 }} />
          </div>
        </div>

        <div className="box">
          <h3>Responsável legal</h3>

          <div className="row">
            <Input name="nome_responsavel" label="Nome do resonsável" />
            <Input name="name" label="Estado civil" />
          </div>

          <div className="row">
            <S.sizeInpu size="12.5rem">
              <Input name="celular" label="Celular" />
            </S.sizeInpu>

            <S.sizeInpu size="12.5rem">
              <Input name="telefone" label="Telefone" />
            </S.sizeInpu>

            <Input name="email" label="E-mail" />

            <S.sizeInpu size="16rem">
              <Input name="rg" label="RG" />
            </S.sizeInpu>
          </div>

          <div className="row">
            <Input name="Cargo" label="cargo" />

            <S.sizeInpu size="16rem">
              <Input type="date" name="dt_nascimento" label="Dt. nacimento" />
            </S.sizeInpu>
          </div>
        </div>

        <div className="box">
          <h3>Responsável financeiro</h3>

          <Input name="nome_responsavel" label="Nome do resonsável" />

          <div className="row">
            <Input name="fi_email" label="E-mail" />
            <S.sizeInpu size="12.5rem">
              <Input name="fi_celular" label="Celular" />
            </S.sizeInpu>

            <S.sizeInpu size="12.5rem">
              <Input name="fi-telefone" label="Telefone" />
            </S.sizeInpu>
          </div>
        </div>

        <div className="box">
          <h3>Responsável departamento de tecnologia da informação (T.I)</h3>

          <Input name="nome_responsavel" label="Nome do resonsável" />

          <div className="row">
            <Input name="ti_email" label="E-mail" />
            <S.sizeInpu size="12.5rem">
              <Input name="ti_celular" label="Celular" />
            </S.sizeInpu>

            <S.sizeInpu size="12.5rem">
              <Input name="ti_telefone" label="Telefone" />
            </S.sizeInpu>
          </div>
        </div>

        <div className="box">
          <h3>Responsável pela contabilidade</h3>

          <div style={{ flex: 1 }}>
            <p>Contadores</p>
            <Option pres={() => setModalContabil(true)} edit />
          </div>

          <div className="row">
            <Input label="Contato" name="contato" />
            <Input label="Departamento" name="departamento" />
          </div>

          <div className="row">
            <S.sizeInpu size="16rem">
              <Input label="Celular" name="celular" />
            </S.sizeInpu>
            <S.sizeInpu size="16rem">
              <Input label="Telefone" name="telefone" />
            </S.sizeInpu>
            <Input label="E-mail" name="email" />
          </div>
        </div>

        <div className="box">
          <h3>Senha de acesso ao aplicativo</h3>

          <Input label="Senha" name="senha" />
        </div>
      </Form>
    </S.Container>
  )
}
