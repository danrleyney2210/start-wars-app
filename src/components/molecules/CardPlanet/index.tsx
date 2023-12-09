import * as S from './styles'
import Planet from '../../../assets/svg/world.svg'
import Thermometer from '../../../assets/icons/thermometer.svg'
import Montain from '../../../assets/icons/montain.svg'
import Audience from '../../../assets/icons/audience.svg'
import User from '../../../assets/icons/user.svg'
import Films from '../../../assets/icons/films.svg'

interface ICardProps {
  name: string
  // rotation_period: string
  // orbital_period: string
  // diameter: string
  climate: string
  // gravity: string
  terrain: string
  // surface_water: string
  population: string
  // residents: Array<string>
  // films: Array<string>
  // created: string
  // edited: string
  // url: string
}

export const CardPlanet = ({ name, climate, terrain, population }: ICardProps) => {
  return (
    <S.Wrapper>
      <S.Contianer>

        <S.Header>
          <S.ContentPlanet>
            <img src={Planet} alt="" />
            <div className='planet-text'>
              <p>Planet:</p>
              <h3>{name}</h3>
            </div>
          </S.ContentPlanet>

          <S.Description>
            <S.Item>
              <img src={Thermometer} alt="" />
              <p>Climate: <span>{climate}</span></p>
            </S.Item>
            <S.Item>
              <img src={Montain} alt="" />
              <p>Terrain: <span>{terrain}</span></p>
            </S.Item>
            <S.Item>
              <img src={Audience} alt="" />
              <p>Population: <span>{population}</span></p>
            </S.Item>
          </S.Description>
        </S.Header>

        <S.Card>
          <S.Title>
            <img src={User} alt="" />
            <span>Residents:</span>
          </S.Title>

          <S.People>
            <span>
              spaneople01,People01,People01,People01,People01,
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