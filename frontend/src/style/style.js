import styled from 'styled-components'

const MainCustom = styled.main`
  display: flex;
  flex-direction: row;
  margin: auto 50px;
  justify-content: space-around;

  @media(max-width: 950px){
    flex-direction: column;
  }
`

const HeaderCustom = styled.header`
  height: 70px;
  width: 100%;
  background-color: #cecece;

  @media(max-width: 600px){
    width: 140%;
  }
`
export { HeaderCustom, MainCustom }