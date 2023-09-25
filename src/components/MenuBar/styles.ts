import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { cor } from '@/themes/cor'

export const Container = styled.div`
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  margin: 0 auto;

  .bar {
    background-color: ${cor.blue[4]};
    border-radius: 0 20px 20px 0;
    width: 16rem;

    .link {
      padding: 10px;
      margin-top: 10rem;
      color: #fff;

      gap: 1rem;

      .active {
        color: ${cor.orange[1]};
        font-weight: 700;

        svg {
          color: ${cor.orange[1]};
        }
      }
    }
  }

  .component {
    flex: 1;
  }
`

export const link = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    color: ${cor.orange[1]};

    h4 {
      font-weight: 600;
    }

    svg {
      color: rgba(212, 251, 131, 1);
    }
  }
`
