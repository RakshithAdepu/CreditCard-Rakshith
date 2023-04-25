import {useState} from 'react'

import {
  MainContEle,
  CreditCardCont,
  HeadingEle,
  ImgEle,
  NumberEle,
  CardHolderName,
  CardHolderNameEle,
  FormCont,
  FormDetailsEle,
  PaymentMethodHeading,
  InputNumEle,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <>
      <MainContEle>
        <CreditCardCont>
          <HeadingEle>CREDIT CARD</HeadingEle>
          <ImgEle data-testid="creditCard">
            <NumberEle>{number}</NumberEle>
            <CardHolderName>CARDHOLDER NAME</CardHolderName>
            <CardHolderNameEle>{name}</CardHolderNameEle>
          </ImgEle>
        </CreditCardCont>
        <FormCont>
          <FormDetailsEle>
            <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
            <InputNumEle
              type="text"
              placeholder="Card Number"
              onChange={onChangeNumber}
            />
            <InputNumEle
              type="text"
              placeholder="CardHolder Name"
              onChange={onChangeName}
            />
          </FormDetailsEle>
        </FormCont>
      </MainContEle>
    </>
  )
}

export default CreditCard
