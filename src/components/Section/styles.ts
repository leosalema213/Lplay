import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Products/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.grey : colors.black};
  }
  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
