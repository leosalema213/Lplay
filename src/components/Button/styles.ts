import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  font-size: 16px;
  font-wight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-wight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`
