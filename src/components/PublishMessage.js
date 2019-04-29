import React, { useState } from "react"

import { newMessage } from "../state/actions"

function PublishMessage(props) {
  const { dispatch } = props
  const [text, setText] = useState("")

  const updateText = event => {
    setText(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === "Enter") publishMesage()
  }

  const publishMesage = () => {
    setText("")
    dispatch(newMessage(text))
  }

  return (
    <div>
      <h3>Got Something To Say!</h3>
      <input
        type="text"
        value={text}
        onChange={updateText}
        onKeyPress={handleKeyPress}
      />{" "}
      <button onClick={publishMesage}>Publish It!</button>
    </div>
  )
}

export default PublishMessage
