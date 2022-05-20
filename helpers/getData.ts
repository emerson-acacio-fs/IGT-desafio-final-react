import axios from "axios"
import { mergeObjs } from "./mergeObjs"

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

interface ITime {
  time: string
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
  const { data } = await axios.get<IData[]>(`http://localhost:3001/${year}`)
  const flatData = data.map(({ partidas }) => partidas).flat()
  let timesList: string[] = []
  flatData.forEach((partida) => {
    timesList.push(partida.mandante)
    timesList.push(partida.visitante)
  })
  timesList = [...new Set<string>(timesList)]

  const results: ITime[] = []
  timesList.forEach((time) => {
    data[data.length - 1].partidas.forEach((partida) => {
      if (partida.visitante === time) {
        results.push({
          time,
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
      }
      if (partida.mandante === time) {
        results.push({
          time,
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
      }
    })
  })
  return results
}
