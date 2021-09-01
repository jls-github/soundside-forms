import React from 'react'

export default function GeneralMemberForm() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="gospel-conversations" >How many gospel conversations did you have this week?</label> <br />
            <input type="number" name="gospel-conversations"/>
        </form>
    )
}
