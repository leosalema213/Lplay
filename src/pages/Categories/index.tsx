import ProdctsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGamesQuery,
  useGetSporsGamesQuery
} from '../../services/api'
import { Game } from '../Home'

const Categoties = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSporsGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProdctsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProdctsList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProdctsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProdctsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProdctsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categoties
