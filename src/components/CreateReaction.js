import React from "react"

import { REACTION_OBJECTS } from "../state/types"

function CreateReaction() {
  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map(({ type, emoji }) => {
        return <span key={type}>{emoji}</span>
      })}
    </div>
  )
}

export default CreateReaction
