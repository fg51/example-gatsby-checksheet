import React from "react"

import { IonInput, IonItem, IonPage, IonTitle } from "@ionic/react"

export default function Home() {
  return (
    <IonPage>
      <IonTitle> Hello Gatsby with ionic </IonTitle>
      <IonItem>
        <IonInput value="sample" placeholder="Enter Input">
          {" "}
        </IonInput>
      </IonItem>
    </IonPage>
  )
}
