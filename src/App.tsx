import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Form } from '@unform/web'

import { Input } from './components/Input'
import { MenuBar } from './components/MenuBar'
import { Cadastro } from './pages/Cadastro'
import { Home } from './pages/Home'

function App() {
  const client = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <MenuBar>
          <Cadastro />
        </MenuBar>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
