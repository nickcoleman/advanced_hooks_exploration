import React, { Fragment, useContext } from "react"
import Context from "../context"

function MessageBoard() {
  const {
    state: { messages },
  } = useContext(Context)

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
