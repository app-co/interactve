import styled, { css } from 'styled-components'

import { cor as color, cor } from '@/themes/cor'

type PropsInput = {
  isFocus: boolean
  isFid: boolean
  isErro?: boolean
}

export const Box = styled.div`
  width: 100%;

  P {
    margin-left: 5px;
  }
`

export const Container = styled.div<PropsInput>`
  display: flex;
  width: 100%;
  border-radius: 9px;
  border: 1px solid ${color.orange[1]};
  background: rgba(203, 215, 241, 0.16);
  height: 30px;
  padding-left: 10px;
  justify-content: center;

  ${(h) =>
    h.isFocus &&
    css`
      border: 2px solid ${cor.orange[2]};
    `}

  ${(h) =>
    h.isFid &&
    css`
      border: 2px solid ${color.orange[3]};
    `}

    ${(h) =>
    h.isErro &&
    css`
      border: 2px solid #c90606;
      color: #c90606;
    `}

  input {
    flex: 1;
    color: ${cor.blue[4]};
    background-color: transparent;
  }
`

export const error = styled.p`
  position: relative;
  color: ${color.red[10]};
`
