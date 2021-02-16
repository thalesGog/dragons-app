import styled from 'styled-components'

const Button = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  line-height: 1.33333;
  min-width: 10rem;
  color: #fff;
  background-color: #6400e4;
  border-color: transparent;
  border: 2px solid transparent;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    color: #6400e4;
    background-color: transparent;
    border: 2px solid #6400e4;
  }
`

export default Button
