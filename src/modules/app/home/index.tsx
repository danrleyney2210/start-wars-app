import * as S from './styles'
import Api from 'service/api'
import Planet from '../../../assets/image/planet.png'
import Search from '../../../assets/svg/search.svg'
import Weapon from '../../../assets/svg/Weapon.svg'
import Filter from '../../../assets/icons/setting.svg'
import Arrow from '../../../assets/icons/arrowDown.svg'
import StartWars from '../../../assets/svg/starWars.svg'
import ArrowLeft from '../../../assets/icons/arrowLeft.svg'

import { Button } from 'components/atomos/Button'
import { Input } from 'components/atomos/Input'
import { CardPlanet } from 'components/molecules/CardPlanet'
import { Loading } from 'components/atomos/Loading'
import { useState } from 'react'
import { Footer } from 'components/molecules/Footer'
import { toast } from 'react-toastify'
import { IPlanet } from './types'

export const Home = () => {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState<IPlanet | null>()
  const [nameSearch, setNameSearch] = useState('')

  async function search() {
    try {
      setLoad(true)
      const allPlanets = await Api.get('/planets')
      if (allPlanets.data) {
        const planet = allPlanets.data.results.find((planet: IPlanet) => planet.name === nameSearch)
        if (planet) {
          toast.success("Planeta encontrado!")
          setData(planet)
          setLoad(false)
        } else {
          toast.error("Planeta não encontrado, tente novamente!")
          setLoad(false)
        }
      }
    } catch (error) {
      setLoad(false)
      toast.error('Algun erro inesperado, tente novamente!');
    }
  }

  return (
    <S.Wrapper>

      <S.Container>

        <S.Header>
          <p>Planet search</p>
          <img src={StartWars} alt="" />
        </S.Header>

        {
          data ? (
            <S.SearchResult>
              <CardPlanet
                name={data.name}
                climate={data.climate}
                terrain={data.terrain}
                population={data.population}
              />
              <S.ArrowBack onClick={() => setData(null)}>
                <img src={ArrowLeft} alt="" />
                <span>Voltar</span>
              </S.ArrowBack>
            </S.SearchResult>
          ) : (
            <S.Content>
              <div className='content-main'>
                <img className='image-main' src={Planet} alt="planet" />
              </div>
              <S.Info>
                <S.ContentInfo>
                  <p>Discover all the information about Planets of the Star Wars Saga</p>

                  <Input
                    value={nameSearch}
                    onChange={(e) => setNameSearch(e.target.value)}
                    placeholder='Enter the name in the planet'

                  />
                  <Button
                    text='Search'
                    variant={'primary'}
                    icon={<img src={Search} alt='search' />}
                    onClick={() => search()}
                  />
                  <S.Filter>
                    <S.Item>
                      <img src={Filter} alt='filter' />
                      <span>Filter</span>
                    </S.Item>
                    <S.Item>
                      <img src={Arrow} alt="" />
                      <span>Name</span>
                    </S.Item>
                    <S.Item>
                      <img src={Arrow} alt="" />
                      <span>Population</span>
                    </S.Item>
                  </S.Filter>

                </S.ContentInfo>
              </S.Info>
              <img src={Weapon} alt="" className='weapon-img' />
            </S.Content>
          )
        }

      </S.Container>

      <Footer />

      {load && <Loading />}

    </S.Wrapper>
  )
}