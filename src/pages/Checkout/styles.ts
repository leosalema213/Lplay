import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}
type TagButtonProps = {
  isActive: boolean
}
export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    width: 100%;
  }
`
export const TabButton = styled.button<TagButtonProps>`
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preta)};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
export const Button = styled.button`
  background-color: ${cores.verde};
  border: 2px solid ${cores.verde};
  color: ${cores.branca};
  font-size: 16px;
  font-wight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`
