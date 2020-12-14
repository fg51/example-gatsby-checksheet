import React, { useState } from "react"
import { IonInput } from "@ionic/react"

export const InputSerialMs: React.FC = () => {
  const [text, setText] = useState<string>("M4K21")

  return (
    <IonInput
      value={text}
      placeholder="M4K20A01"
      onIonChange={e => setText(e.detail.value!)}
    ></IonInput>
  )
}

export const InputSerialPump: React.FC = () => {
  const [text, setText] = useState<string>()

  return (
    <IonInput
      value={text}
      placeholder=""
      onIonChange={e => setText(e.detail.value!)}
    ></IonInput>
  )
}

//export default {InputSerialMs, InputSerialPump};
