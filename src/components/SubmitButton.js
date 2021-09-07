import React from 'react'
import styled from 'styled-components'

const SubmitButtonWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Button = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: 0%;
  background-color: #3a5174;
  font-weight: bold;
  color: white;
`

export default function SubmitButton() {
    return (
        <SubmitButtonWrapper>
            <Button type="submit">Submit</Button>
        </SubmitButtonWrapper>
    )
}
