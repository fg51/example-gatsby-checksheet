import React from "react"
import { useState } from "react"

import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonPage,
  IonTitle,
  IonHeader,
} from "@ionic/react"

import "@ionic/react/css/core.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"
import "@ionic/react/css/normalize.css"

import "@ionic/react/css/padding.css"
import "@ionic/react/css/text-alignment.css"

import { InputSerialMs, InputSerialPump } from "../components/InputSerialMs"

import { MainBase } from "../components/MainBase"

import { IconPencil } from "../components/IconPencil"

export default function Home() {
  const [text, setText] = useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + text)
    event.preventDefault()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonTitle> CHECKSHEET </IonTitle>
        <IonList>
          <IonItem>
            <IonLabel>製造番号</IonLabel> <InputSerialMs />
            <IconPencil />
          </IonItem>
          <IonItem>
            <IonLabel>main 製造番号</IonLabel> <InputSerialPump />
            <IconPencil />
          </IonItem>
        </IonList>
      </IonHeader>

      <IonContent class="ion-padding" scrollEvents={true}>
        <MainBase />

        <form className="ion-padding" onSubmit={handleSubmit}>
          <Child text={text} setText={setText} />

          <IonButton className="ion-margin-top" type="submit" expand="block">
            送信
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  )
}


type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

const Child: React.FC<Props> = ({text, setText})=> {
  return (
    <>
      <IonLabel>Name:</IonLabel>
      <IonInput
        type="text"
        value={text}
        onIonChange={event => setText(event.detail.value!)}
      />
    </>
  )
}
