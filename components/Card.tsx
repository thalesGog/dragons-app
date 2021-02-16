import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.125rem;
  background: #fff;
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  p,
  h3 {
    margin: 8px;
  }
`

export default Card
