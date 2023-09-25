import React from 'react'
import { Link } from 'react-router-dom'

import { House, User } from '@phosphor-icons/react'

import * as S from './styles'

interface I {
  children: React.ReactNode
}

export function MenuBar({ children }: I) {
  const links = [
    {
      path: '/board',
      name: 'DashBoard',
      icon: <House weight="duotone" />,
    },

    {
      path: '/cadastro',
      name: 'Cadastro de cliente',
      icon: <User weight="duotone" />,
    },
  ]
  return (
    <S.Container>
      <div className="bar">
        <div className="link">
          {links.map((h) => (
            <S.link
              key={h.name}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to={h.path}
            >
              <h4>{h.name}</h4>
            </S.link>
          ))}
        </div>
      </div>

      <div className="component">{children}</div>
    </S.Container>
  )
}
