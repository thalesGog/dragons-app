import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  height: 100vh;
  a,
  label,
  input,
  button {
    padding: 6px 0 6px 0;
  }
  a {
    color: ${({theme}) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }
  button {
    margin-top: 18px;
    margin-bottom: 24px;
  }
  input {
    margin-top: 8px;
    font-size: 1rem;
    text-indent: 0.8rem;
    padding: 0.8rem 0;
    outline: none;
    width: 100%;
    border: 1px solid #dddce0;
    border-radius: 2px;
    transition: border-color 0.15s;
    font-weight: 400;
    box-sizing: border-box;
    height: 50px;
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 600;
  }
  img {
    max-width: 70px;
    margin: 0 auto;
  }
`

export default Form
