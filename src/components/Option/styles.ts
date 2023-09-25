import styled from 'styled-components'

import { cor } from '@/themes/cor'

export const Container = styled.select`
  width: 100%;
  height: 2rem;
  border-radius: 8px;
  background-color: ${cor.blue[1]};
  padding-left: 10px;

  option {
  }
`

export const box = styled.div`
  flex-direction: row;
  gap: 5px;
  width: 100%;

  align-items: flex-end;

  svg {
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`
