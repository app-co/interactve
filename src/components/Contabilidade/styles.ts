import styled from 'styled-components'

import { cor } from '@/themes/cor'

interface ISize {
  size: string
}

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 10px;
  height: 80%;
  background-color: #ebebeb;
  padding: 20px 4rem;

  h2 {
    margin-bottom: 2rem;
  }
`

export const box = styled.div`
  border: 1px solid ${cor.blue[2]};
  height: 100%;
  overflow: scroll;

  border-radius: 10px;
  padding: 2rem;
  gap: 1rem;
`

export const row = styled.div`
  flex: 1;
  gap: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const size = styled.div<ISize>`
  width: ${(h) => h.size};
`

export const boxButton = styled.div`
  width: 50%;
  margin: 2rem auto;

  button {
    padding: 10px 20px;
    min-width: 8rem;
    background-color: ${cor.red[10]};
    color: #fff;
    font-family: 'Kinit';
    font-weight: 600;

    width: 15rem;

    & + button {
      background-color: ${cor.blue[3]};
    }
  }
`
