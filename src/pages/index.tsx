import React from "react"
import { useState } from "react"

import {
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonListHeader,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonPage,
  IonTitle,
  IonToggle,
  IonHeader,
} from "@ionic/react"

import "@ionic/react/css/core.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"
import "@ionic/react/css/normalize.css"

import "@ionic/react/css/padding.css"
import "@ionic/react/css/text-alignment.css"

import { InputSerialMs, InputSerialPump } from "../components/InputSerialMs"

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
        <IonList>
          <IonListHeader>メインベース組立</IonListHeader>

          <IonCard>
            <IonCardTitle>締結</IonCardTitle>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>加工日</IonLabel> <IonInput />
                  <IconPencil />
                </IonItem>
                <IonItem>
                  <IonLabel>ベース製造番号</IonLabel> <IonInput />
                  <IconPencil />
                </IonItem>
                <IonItem>
                  <IonToggle />
                  <IonLabel>止めねじ</IonLabel>
                </IonItem>
                <IonItem>
                  <IonToggle />
                  <IonLabel>80degC昇温</IonLabel>
                </IonItem>
                <IonItem>
                  <IonToggle />
                  <IonLabel>冷却</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>モータ製造番号</IonLabel>
                  <IonInput />
                  <IconPencil />
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardTitle>ベアリング組み込み</IonCardTitle>
            <IonCardContent>
              <IonItem>
                <IonToggle />
                <IonLabel>ベアリング製造番号</IonLabel> <IonInput />
                <IconPencil />
              </IonItem>
            </IonCardContent>
          </IonCard>
        </IonList>

        <form className="ion-padding" onSubmit={handleSubmit}>
          <IonLabel>Name:</IonLabel>
          <IonInput
            type="text"
            value={text}
            onIonChange={event => setText(event.detail.value!)}
          />
          <IonButton className="ion-margin-top" type="submit" expand="block">
            送信
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  )
}
