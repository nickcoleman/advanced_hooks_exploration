import React, { Fragment } from "react"
import { useAppContext } from "./hooks"

import CreateReaction from "./CreateReaction"

function MessageBoard() {
  const {
    state: { messages },
  } = useAppContext()

  const renderMessages = () => {
    return messages.map(({ id, text, timestamp, username }) => {
      return (
        <div key={id}>
          <h4>{new Date(timestamp).toLocaleString()}</h4>
          <div>{text}</div>
          <h4>- {username}</h4>
          <CreateReaction />
          <hr />
        </div>
      )
    })
  }

  return (
    <Fragment>
      <h3>Message Board</h3>
      {renderMessages()}
    </Fragment>
  )
}

export default MessageBoard
