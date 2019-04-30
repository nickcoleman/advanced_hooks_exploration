import React, { useState } from "react"
import { useAppContext } from "./hooks"
import { newMessage } from "../state/actions"

function PublishMessage() {
  // const { dispatch } = useAppContext()
  const {
    pubsub: { publish },
  } = useAppContext()
  const [text, setText] = useState("")

  const updateText = event => {
    setText(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === "Enter") publishMesage()
  }

  const publishMesage = () => {
    setText("")
    publish(newMessage(text))
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
