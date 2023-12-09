import * as S from './styles'
import Planet from '../../../assets/svg/world.svg'
import Thermometer from '../../../assets/icons/thermometer.svg'
import Montain from '../../../assets/icons/montain.svg'
import Audience from '../../../assets/icons/audience.svg'
import User from '../../../assets/icons/user.svg'
import Films from '../../../assets/icons/films.svg'

export const CardPlanet = () => {
  return (
    <S.Wrapper>
      <S.Contianer>

        <S.Header>
          <S.ContentPlanet>
            <img src={Planet} alt="" />
            <div className='planet-text'>
              <p>Planet:</p>
              <h3>Tatooine</h3>
            </div>
          </S.ContentPlanet>

          <S.Description>
            <S.Item>
              <img src={Thermometer} alt="" />
              <p>Climate: <span>Arid</span></p>
            </S.Item>
            <S.Item>
              <img src={Montain} alt="" />
              <p>Terrain: <span>Desert</span></p>
            </S.Item>
            <S.Item>
              <img src={Audience} alt="" />
              <p>Population: <span>20000</span></p>
            </S.Item>
          </S.Description>
        </S.Header>

        <S.Card>
          <S.Title>
            <img src={User} alt="" />
            <span>Residents:</span>
          </S.Title>

          <S.People>
            <span>spaneople01,People01,People01,People01,People01,
              People01,People01,People01,People01,People01,People01,
            </span>
          </S.People>
        </S.Card>

        <S.Card>
          <S.Title>
            <img src={Films} alt="" />
            <p>Films (5):</p>
          </S.Title>

          <S.People>
            <p>People01,People01,People01,People01,People01,
              People01,People01,People01,People01,People01,People01,
            </p>
          </S.People>
        </S.Card>
      </S.Contianer>

    </S.Wrapper>
  )
}