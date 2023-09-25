import React from 'react'

import { Form } from '@unform/web'

import { Input } from '../Input'
import * as S from './styles'

interface I {
  closed: () => void
}

export function Contabilidade({ closed }: I) {
  return (
    <S.Container>
      <h2>Cadastro de Contabilidade</h2>
      <S.box>
        <Form>
          <h3>Dados do escritório</h3>
          <S.row>
            <Input label="Razão social" name="razao_social" />

            <S.size size="16rem">
              <Input label="CNPJ" name="cnpj" mask="cpf" />
            </S.size>
          </S.row>

          <S.row>
            <Input label="Responsável" name="nome_responsavel" />

            <S.size size="16rem">
              <Input label="Nº CRC" name="crc" />
            </S.size>

            <S.size size="16rem">
              <Input label="UF CRC" name="uf_crc" />
            </S.size>
          </S.row>

          <S.row>
            <Input label="Nº Município-IBGE" name="n_municipio_ibge" />
            <Input label="Inscrição municipal" name="insc_municipal" />
            <Input label="Inscrição Estadual" name="insc_estadual" />
          </S.row>

          <S.row>
            <Input label="Nº Banco" name="n_banco" />
            <Input label="Agência" name="agencia" />
            <Input label="conta" name="name" />
          </S.row>

          <h3 style={{ marginTop: '2rem' }}>
            Endereço e contato do escritório contábil
          </h3>

          <S.row>
            <S.size size="16rem">
              <Input label="CEP" name="cep" />
            </S.size>
            <Input label="Cidade" name="cidade" />

            <S.size size="5rem">
              <Input label="UF" name="uf" />
            </S.size>
          </S.row>

          <S.row>
            <Input label="Logradouro" name="logradouro" />
            <S.size size="20rem">
              <Input label="Complemento" name="complemento" />
            </S.size>

            <S.size size="5rem">
              <Input label="Nº" name="numero" />
            </S.size>
          </S.row>

          <Input label="Bairro" name="bairro" />

          <h3 style={{ marginTop: '2rem' }}>Contato</h3>

          <S.row>
            <Input label="E-mail" name="email" />
            <Input label="Site" name="site" />
          </S.row>

          <S.row>
            <Input label="Celular" name="celular" />
            <Input label="Telefone" name="telefone" />
            <Input label="Telefone" name="Telefone" />
          </S.row>

          <S.boxButton>
            <S.row>
              <button onClick={closed}>CANCELAR</button>
              <button>SALVAR</button>
            </S.row>
          </S.boxButton>
        </Form>
      </S.box>
    </S.Container>
  )
}
