import Banner from '../../components/Banner'
import ProdctsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProdctsList
        isLoading={isLoadingSale}
        games={onSaleGames}
        title="Promoçoes"
        background="gray"
        id="on-sale"
      />
      <ProdctsList
        isLoading={isLoadingSoon}
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
      />
    </>
  )
}

export default Home
