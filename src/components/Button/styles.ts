import styled from 'styled-components'

import { cor } from '@/themes/cor'

export const Container = styled.button`
  width: 20rem;
  padding: 0.6rem 3rem;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  color: #fff;

  margin: 0 auto;

  background-color: ${cor.orange[2]};

  h4 {
    font-weight: 600;
  }
`
