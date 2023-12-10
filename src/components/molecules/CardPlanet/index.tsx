import * as S from './styles'
import Thermometer from '../../../assets/icons/thermometer.svg'
import Montain from '../../../assets/icons/montain.svg'
import Audience from '../../../assets/icons/audience.svg'
import User from '../../../assets/icons/user.svg'
import Films from '../../../assets/icons/films.svg'
import { planetes } from './mock'
import { useEffect, useState } from 'react'
import { ICardProps, IFilms, IResidents } from './types'


export const CardPlanet = ({ name, climate, terrain, population, films, residents }: ICardProps) => {
  const [movies, setMovies] = useState<IFilms[]>([])
  const [peoples, setPeoples] = useState<IResidents[]>([])
  const [loadFilm, setLoadFilm] = useState(false)
  const [loadResident, setLoadResident] = useState(false)

  function returnPlanetImage(name: string): string {
    const result = planetes.find(e => e.name === name)
    return result?.image;
  }

  async function listMovies(movies: Array<string>) {
    try {
      setLoadFilm(true)
      const filmPromises = movies.map(async (film) => {
        const response = await fetch(film);
        return response.json();
      });

      const films = await Promise.all(filmPromises)
      setMovies(films)
      setLoadFilm(false)

    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoadFilm(false)
      throw error;
    }
  }

  async function listResidents(residents: Array<string>) {
    try {
      setLoadResident(true)
      const peoples = residents.map(async (p) => {
        const response = await fetch(p);
        return response.json();
      });

      const films = await Promise.all(peoples)
      setPeoples(films)
      setLoadResident(false)

    } catch (error) {
      console.error("Error fetching people:", error);
      setLoadResident(false)
      throw error;
    }
  }

  useEffect(() => {
    films.length > 0 && listMovies(films)
    residents.length > 0 && listResidents(residents)
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
              {listResidents.length > 0 && peoples.map(p => `${p.name}, `)}
              {listResidents.length === 0 && !loadResident && 'Nenhum morador'}
              {loadResident && 'Carregando...'}
            </span>
          </S.People>
        </S.Card>

        <S.Card>
          <S.Title>
            <img src={Films} alt="" />
            <p>Films ({movies?.length}):</p>
          </S.Title>

          <S.People>
            <span>
              {movies.length > 0 && movies.map(m => `${m.title}, `)}
              {movies.length === 0 && !loadFilm && 'Nenhum Filme'}
              {loadFilm && 'Carregando...'}
            </span>
          </S.People>
        </S.Card>
      </S.Contianer>

    </S.Wrapper>
  )
}