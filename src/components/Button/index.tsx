import * as S from './styled'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'warning'
}

export const Button: React.FC<IButtonProps> = ({ icon, text, variant = 'primary', ...rest }) => {
  return (
    <S.Button type='button' variant={variant} {...rest}>
      {icon}
      {text}
    </S.Button>
  )
}


