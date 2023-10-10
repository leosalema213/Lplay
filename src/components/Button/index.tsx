import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({ title, children, type, onClick, to, variant }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        title={title}
        type={type}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
export default Button
