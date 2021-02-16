import styled from 'styled-components'

const Navbar = styled.nav`
  border-bottom: 1px solid #10162f;
  background-color: #fff;
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 4px;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    li {
      padding: 8px;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      &:hover {
        color: ${({theme}) => theme.colors.secondary};
      }
    }
  }
  span {
    cursor: pointer;
    &:hover {
      color: ${({theme}) => theme.colors.secondary};
    }
  }
`

export default Navbar
