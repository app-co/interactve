import Modal from 'react-modal'
import styled from 'styled-components'

import { cor } from '@/themes/cor'

interface ISize {
  size: string | number
}

export const Container = styled.div`
  flex: 1;

  padding: 20px;
  overflow: scroll;

  .box {
    flex: 1;
    margin: 0 auto;
    max-width: 70rem;

    padding: 20px;
    gap: 1.5rem 1.5rem;
    border: 1px solid ${cor.blue[2]};
    margin-bottom: 2rem;
    border-radius: 1rem;

    background: rgba(217, 217, 217, 0.05);
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.91);

    h3 {
      color: ${cor.orange[1]};
    }
    .row {
      flex-direction: row;
      align-items: center;
      /* justify-content: space-between; */

      gap: 2rem;
    }
  }

  .modal {
  }
`

export const modal = styled(Modal)`
  background-color: #b4b4b4c4;
  flex: 1;

  padding: 2rem;
`

export const sizeInpu = styled.div<ISize>`
  width: ${(h) => h.size};
`

export const button = styled.div``
