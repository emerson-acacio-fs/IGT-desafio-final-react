import axios from "axios"

export interface IPontuacao {
  gols_fora_casa: number
  empates_fora_casa: number
  total_jogos: number
  gols_casa: number
  jogos_fora_casa: number
  vitorias_casa: number
  derrotas_casa: number
  total_pontos: number
  empates_casa: number
  pontos_fora_casa: number
  total_gols_sofridos: number
  total_vitorias: number
  vitorias_fora_casa: number
  total_derrotas: number
  pontos_casa: number
  derrotas_fora_casa: number
  total_gols_marcados: number
  jogos_casa: number
  total_empates: number
}

export interface ITime {
  nome: string
  E: number
  S: number
  GC: number
  GP: number
  D: number
  V: number
  P: number
}

interface IPartidas {
  visitante: string
  resultado: string
  data_partida: string
  pontuacao_geral_mandante: IPontuacao
  placar_visitante: number
  hora_partida: string
  mandante: string
  placar_mandante: number
  estadio: string
  pontuacao_geral_visitante: IPontuacao
}
interface IData {
  partidas: IPartidas[]
  numero: number
}

export async function getData(year: number): Promise<ITime[]> {
  try {
    const { data } = await axios.get<IData[]>(`http://localhost:3001/${year}`)

    const results: ITime[] = []

    data[data.length - 1].partidas.forEach((partida) => {
      results.push({
        nome: partida.visitante,
        E: partida.pontuacao_geral_visitante.total_empates,
        S:
          partida.pontuacao_geral_visitante.total_gols_marcados -
          partida.pontuacao_geral_visitante.total_gols_sofridos,
        GC: partida.pontuacao_geral_visitante.total_gols_sofridos,
        GP: partida.pontuacao_geral_visitante.total_gols_marcados,
        D: partida.pontuacao_geral_visitante.total_derrotas,
        V: partida.pontuacao_geral_visitante.total_vitorias,
        P: partida.pontuacao_geral_visitante.total_pontos,
      })

      results.push({
        nome: partida.mandante,
        E: partida.pontuacao_geral_mandante.total_empates,
        S:
          partida.pontuacao_geral_mandante.total_gols_marcados -
          partida.pontuacao_geral_mandante.total_gols_sofridos,
        GC: partida.pontuacao_geral_mandante.total_gols_sofridos,
        GP: partida.pontuacao_geral_mandante.total_gols_marcados,
        D: partida.pontuacao_geral_mandante.total_derrotas,
        V: partida.pontuacao_geral_mandante.total_vitorias,
        P: partida.pontuacao_geral_mandante.total_pontos,
      })
    })

    return results.sort(function (a, b) {
      return b.P - a.P
    })
  } catch (err) {
    return []
  }
}
