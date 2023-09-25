import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { card, cep, cpf, currency, expire, float, number } from '@/utils/mask'
import { useField } from '@unform/core'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  mask?:
    | 'cep'
    | 'price'
    | 'text'
    | 'number'
    | 'expire'
    | 'card'
    | 'float'
    | 'cpf'
  sizeW?: string
  sizeH?: string
}
export function Input({ name, label, mask = 'text', ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInput = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const handleChange = useCallback(
    async (e: React.FormEvent<HTMLInputElement>) => {
      switch (mask) {
        case 'cep':
          return cep(e)

        case 'cpf':
          return cpf(e)

        case 'number':
          return number(e)

        case 'price':
          return currency(e)
        case 'text':
          return e.currentTarget.value.toLocaleUpperCase()

        case 'card':
          return card(e)

        case 'expire':
          return expire(e)

        case 'float':
          return float(e)

        default:
          break
      }

      // if (mask === 'cep') {
      // }

      // if (mask === 'price') {
      //   currency(e)
      // }

      // if (mask === 'number') {
      //   number(e)
      // }

      // if (mask === 'text') {
      //   e.currentTarget.value.toLocaleUpperCase()
      // }

      // if (mask === 'expire') {
      //   expire(e)
      // }
    },
    [mask],
  )

  return (
    <S.Box>
      <p>{label}</p>
      <S.Container isErro={!!error} isFid={isFilled} isFocus={isFocused}>
        <input
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          onKeyUp={handleChange}
          onBlur={handleInput}
          ref={inputRef}
          {...rest}
        />
        <S.error>{error}</S.error>
      </S.Container>
    </S.Box>
  )
}
