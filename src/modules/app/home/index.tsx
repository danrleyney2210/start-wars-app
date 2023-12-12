import * as S from './styles'
import Api from 'service/api'
import Planet from '../../../assets/image/planet.png'
import Search from '../../../assets/svg/search.svg'
import Weapon from '../../../assets/svg/Weapon.svg'
import Filter from '../../../assets/icons/setting.svg'
import StartWars from '../../../assets/svg/starWars.svg'
import ArrowLeft from '../../../assets/icons/arrowLeft.svg'

import { Button } from 'components/atomos/Button'
import { Input } from 'components/atomos/Input'
import { CardPlanet } from 'components/molecules/CardPlanet'
import { Loading } from 'components/atomos/Loading'
import { ChangeEvent, useState } from 'react'
import { Footer } from 'components/molecules/Footer'
import { toast } from 'react-toastify'
import { IPlanet } from './types'
import { RadioInput } from 'components/atomos/RadioInput'

export const Home = () => {
  const [load, setLoad] = useState(false)
  const [typeFilter, setTipeFilter] = useState('Name')
  const [data, setData] = useState<IPlanet | null>()
  const [valueSearch, setValueSearch] = useState('')

  async function search() {
    try {
      setLoad(true)
      const allPlanets = await Api.get('/planets')

      if (allPlanets.data) {
        const result = typeFilter === 'Name' ? allPlanets.data.results.find((planet: IPlanet) => planet.name === valueSearch) : allPlanets.data.results.find((planet: IPlanet) => planet.population === valueSearch)

        if (result) {
          toast.success(`${typeFilter === 'Name' ? 'Planeta' : 'População'} encontrado!`)
          setData(result)
          setLoad(false)
        } else {
          toast.error(`${typeFilter === 'Name' ? 'Planeta' : 'População'} não encontrado, tente novamente!`)
          setLoad(false)
        }
      }
    } catch (error) {
      setLoad(false)
      toast.error('Algun erro inesperado, tente novamente!');
    }
  }

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTipeFilter(e.target.value);
  };

  function goBack() {
    localStorage.clear()
    setData(null)
    setValueSearch('')
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
                residents={data.residents}
                films={data.films}
                name={data.name}
                climate={data.climate}
                terrain={data.terrain}
                population={data.population}
              />
              <S.ArrowBack onClick={() => goBack()}>
                <img src={ArrowLeft} alt="" />
                <span>Voltar</span>
              </S.ArrowBack>
            </S.SearchResult>
          ) : (
            <S.Content>
              <div className='content-main'>
                <img className='image-main' src={Planet} alt="planet" />
              </div>
              <form action="">
                <S.Info>
                  <S.ContentInfo>
                    <p>Discover all the information about Planets of the Star Wars Saga</p>
                    <Input
                      id='searchPlanet'
                      value={valueSearch}
                      onChange={(e) => setValueSearch(e.target.value)}
                      placeholder={`Enter the ${typeFilter} in the planet`}
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
                        <span className='filter'>Filter</span>
                      </S.Item>
                      <S.Item>
                        <RadioInput
                          id='name'
                          text='Name'
                          name='filter'
                          onChange={handleRadioChange}
                          checked={typeFilter === 'Name'}
                        />
                      </S.Item>
                      <S.Item>
                        <RadioInput
                          id='population'
                          text='Population'
                          name='filter'
                          onChange={handleRadioChange}
                          checked={typeFilter === 'Population'}
                        />
                      </S.Item>
                    </S.Filter>
                  </S.ContentInfo>
                </S.Info>
              </form>
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