import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProdctsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProdctsList
          games={onSaleGames}
          title="Promoçoes"
          background="gray"
          id="on-sale"
        />
        <ProdctsList
          games={soonGames}
          title="Em Breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
