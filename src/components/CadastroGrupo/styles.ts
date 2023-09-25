import styled, { css } from 'styled-components'

import { cor } from '@/themes/cor'

interface I {
  selected: boolean
}

export const Container = styled.div`
  flex: 1;
  width: 70%;
  margin: 0 auto;
  padding: 3rem;
  background-color: #ebebeb;
  border-radius: 8px;

  border: 1px solid;

  .head {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    .box {
      gap: 4rem;
      flex-direction: row;
    }
    button {
      display: flex;
      height: 2cap;
      background-color: ${cor.blue[4]};
      color: #fff;

      align-items: center;
      justify-content: center;

      gap: 5px;
    }

    svg {
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`

export const button = styled.button`
  width: 20rem;
  padding: 20px;

  background-color: ${cor.orange[2]};
  color: #fff;
  align-items: center;
  justify-content: center;

  margin: 2.5rem auto;
`

export const box = styled.div`
  flex: 1;
  flex-direction: row;

  gap: 4rem;

  align-items: flex-end;

  padding: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px 2px ${cor.dark[30]};

  border: 2px solid
    linear-gradient(90deg, ${cor.blue[1]} 60%, rgba(217, 217, 217, 0) 100%);
  margin-top: 2rem;

  button {
    padding: 1rem 2rem;
  }
`

export const content = styled.div<I>`
  padding: 5px;

  border-bottom: 1px solid ${cor.blue[1]};
  transition: 0.4s;

  flex-direction: row;

  ${(h) =>
    h.selected &&
    css`
      background: linear-gradient(
        90deg,
        ${cor.blue[2]} 0%,
        ${cor.blue[1]} 60%,
        rgba(217, 217, 217, 0) 100%
      );
    `}

  justify-content: space-between;

  div {
    flex-direction: row;
    gap: 2rem;

    button {
      background-color: transparent;
    }
  }

  &:hover {
    background: linear-gradient(
      90deg,
      ${cor.blue[2]} 0%,
      ${cor.blue[1]} 60%,
      rgba(217, 217, 217, 0) 100%
    );
    cursor: pointer;
  }
`

export const view = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;

  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.91);
  border-radius: 8xp;
  flex: 1;
  overflow: scroll;
`
