import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.125rem;
  background: #fff;
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  max-height: 100px;
  font-size: 1.25rem;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: all 300ms ease 0s;
  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: ${({theme}) => theme.colors.secondary};
    margin-top: 8px;
  }
  hr {
    width: 100%;
  }
  &:hover {
    box-shadow: 4px 8px ${({theme}) => theme.colors.primary};
  }
`

export default Item
