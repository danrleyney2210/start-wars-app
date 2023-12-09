import * as S from './styles'
import Logo from '../../../assets/svg/logo.svg'
import Planet from '../../../assets/image/planet.png'
import Search from '../../../assets/svg/search.svg'
import Weapon from '../../../assets/svg/Weapon.svg'
import Filter from '../../../assets/icons/setting.svg'
import Arrow from '../../../assets/icons/arrowDown.svg'
import StartWars from '../../../assets/svg/starWars.svg'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { CardPlanet } from 'components/CardPlanet'

export const Home = () => {
  return (
    <S.Wrapper>

      <S.Container>

        <S.Header>
          <p>Planet search</p>
          <img src={StartWars} alt="" />
        </S.Header>

        <CardPlanet />
        {/* <S.Content>
          <div className='content-main'>
            <img className='image-main' src={Planet} alt="planet" />
          </div>
          <S.Info>
            <S.ContentInfo>
              <p>Discover all the information about Planets of the Star Wars Saga</p>

              <Input placeholder='Enter the name in the planet' />
              <Button
                text='Search'
                variant={'primary'}
                icon={<img src={Search} alt='search' />}
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
        </S.Content> */}
        <S.Footer>
          <p>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
          <S.Divider />
          <img src={Logo} alt="" />
        </S.Footer>
      </S.Container>


    </S.Wrapper>
  )
}