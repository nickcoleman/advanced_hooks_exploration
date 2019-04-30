import React, { Fragment } from "react"
import { useAppContext } from "./hooks"

function MessageBoard() {
  const {
    state: { messages },
  } = useAppContext()

  const renderMessages = () => {
    return messages.map(({ id, text, timestamp }) => {
      return (
        <div key={id}>
          <h4>{new Date(timestamp).toLocaleString()}</h4>
          <div>{text}</div>
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
