import * as S from './styled'

interface IButtonPros {
  text: string
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'warning'
}

export const Button = ({ icon, text, variant }: IButtonPros) => {
  return (
    <S.Button type='button' variant={variant}>
      {icon}
      {text}
    </S.Button>
  )
}