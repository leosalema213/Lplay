import ProdctsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGamesQuery,
  useGetSporsGamesQuery
} from '../../services/api'

const Categoties = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGameQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGameQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSporsGamesQuery()

  return (
    <>
      <ProdctsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProdctsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProdctsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProdctsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProdctsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categoties
