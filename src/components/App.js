import React, { useReducer, useEffect } from "react"

import reducer, { initialState } from "../state/reducer"
import Context from "../context"
import PubSub from "../pubsub"

import PublishMessage from "./PublishMessage"
import MessageBoard from "./MessageBoard"
import SetUsername from "./SetUsername"

const pubsub = new PubSub()

// setTimeout(() => {
//   pubsub.publish({
//     type: "foo",
//     value: "bar",
//   })
// }, 1000)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        console.log("messageObject", messageObject)
        const { message, channel } = messageObject
        dispatch(message)
      },
    })
  }, [])

  console.log("state", state)
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <SetUsername />
      <PublishMessage />
      <MessageBoard messages={state.messages} />
    </Context.Provider>
  )
}

export default App
