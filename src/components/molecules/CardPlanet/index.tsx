import * as S from './styles'
import Thermometer from '../../../assets/icons/thermometer.svg'
import Montain from '../../../assets/icons/montain.svg'
import Audience from '../../../assets/icons/audience.svg'
import User from '../../../assets/icons/user.svg'
import Films from '../../../assets/icons/films.svg'
import { planetes } from './mock'
import { useEffect, useState } from 'react'
import { IFilms } from './types'



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
  films: Array<string>
  // created: string
  // edited: string
  // url: string
}



export const CardPlanet = ({ name, climate, terrain, population, films }: ICardProps) => {
  const [movies, setMovies] = useState<IFilms[]>([])

  function returnPlanetImage(name: string): string {
    const result = planetes.find(e => e.name === name)
    return result?.image;
  }

  async function listMovies(movies: Array<string>) {
    try {
      const filmPromises = movies.map(async (film) => {
        const response = await fetch(film);
        return response.json();
      });

      const films = await Promise.all(filmPromises)
      setMovies(films)


    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }


  }

  useEffect(() => {
    films.length > 0 && listMovies(films)
  }, [])

  return (
    <S.Wrapper>
      <S.Contianer>

        <S.Header>
          <S.ContentPlanet>
            <img src={returnPlanetImage(name)} alt="" />
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
              spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01 spaneople01
            </span>
          </S.People>
        </S.Card>

        <S.Card>
          <S.Title>
            <img src={Films} alt="" />
            <p>Films ({movies.length}):</p>
          </S.Title>

          <S.People>
            <span>
              {movies.length > 0 && movies.map(m => `${m.title}, `)}
            </span>
          </S.People>
        </S.Card>
      </S.Contianer>

    </S.Wrapper>
  )
}