import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import closeIcon from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  display: none;
  justify-content: end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${colors.grey};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`
export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGrey};
  }
`
export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 8px 0;
  position: relative;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
  }
`
