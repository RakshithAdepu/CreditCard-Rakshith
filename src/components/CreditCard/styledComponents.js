import styled from 'styled-components'

export const MainContEle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`

export const CreditCardCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3b4b69;
  height: 100vh;
  background-size: cover;
  width: 50vw;
`

export const HeadingEle = styled.h1`
  color: white;
  text-decoration: underline #ffd773;
`

export const ImgEle = styled.div`
  border: 1px solid transparent;
  border-radius: 50px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  padding-left: 20px;
`

export const NumberEle = styled.p`
  color: white;
  font-size: 70px;
`

export const CardHolderName = styled.p`
  color: white;
`

export const CardHolderNameEle = styled.p`
  color: white;
`

export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  background-size: cover;
  width: 50vw;
`

export const FormDetailsEle = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 5px 5px 5px lightblue;
`

export const PaymentMethodHeading = styled.h1`
  color: #475569;
  font-weight: bold;
`

export const InputNumEle = styled.input`
  border: 1px solid #475569;
  border-radius: 7px;
  width: 30vw;
  height: 9vh;
`
