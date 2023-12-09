import * as S from './styles'
import Logo from '../../../assets/svg/logo.svg'
import Planet from '../../../assets/image/planet.png'
import Search from '../../../assets/svg/search.svg'
import Weapon from '../../../assets/svg/Weapon.svg'
import Filter from '../../../assets/icons/setting.svg'
import Arrow from '../../../assets/icons/arrowDown.svg'
import StartWars from '../../../assets/svg/starWars.svg'
import ArrowLeft from '../../../assets/icons/arrowLeft.svg'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { CardPlanet } from 'components/CardPlanet'
import { Loading } from 'components/Loading'
import { useState } from 'react'
import Api from 'service/api'

export const Home = () => {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState<String | null>()
  const [nameSearch, setNameSearch] = useState('')

  async function search() {
    try {
      setLoad(true)
      const response = await Api.get('/planets/1')
      if (response.data) {
        setData(response.data)
        setLoad(false)
        return
      }
    } catch (error) {
      setLoad(false)
      console.error(error)
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
              <CardPlanet />
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

        {load && <Loading />}





      </S.Container>
      <S.Footer>
        <p>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
        <S.Divider />
        <img src={Logo} alt="" />
      </S.Footer>


    </S.Wrapper>
  )
}