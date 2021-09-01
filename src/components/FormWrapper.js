import React from 'react'
import styled from 'styled-components'

export default function FormWrapper({children}) {

    const FormWrapperDiv = styled.div`
      margin-left: 1rem;
      margin-right: 1rem;
    `

    return (
        <FormWrapperDiv>
            {children}
        </FormWrapperDiv>
    )
}
