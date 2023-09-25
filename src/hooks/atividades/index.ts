import { api } from '@/services/api'
import { schemeRoutes } from '@/services/schemeRoutes'
import { useQuery } from '@tanstack/react-query'

async function getAtividades() {
  const rs = await api.get(schemeRoutes.atividades.listAll)

  return rs.data
}

export function useAtividades() {
  const all = useQuery({
    queryKey: ['atividades-all'],
    queryFn: getAtividades,
  })

  return { all }
}
