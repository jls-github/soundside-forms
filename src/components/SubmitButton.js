import React from 'react'
import styled from 'styled-components'

const SubmitButtonWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export default function SubmitButton() {
    return (
        <SubmitButtonWrapper>
            <button type="submit">Submit</button>
        </SubmitButtonWrapper>
    )
}
