import React from "react"

import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonListHeader,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonPage,
  IonTitle,
  IonToggle,
  IonIcon,
} from "@ionic/react"

import "@ionic/react/css/core.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"
import "@ionic/react/css/normalize.css"

import "@ionic/react/css/padding.css"
import "@ionic/react/css/text-alignment.css"

import { pencil } from "ionicons/icons"

import { InputSerialMs, InputSerialPump } from "../components/InputSerialMs"

import { IconPencil } from "../components/IconPencil"

export default function Home() {
  return (
    <IonPage>
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
    </IonPage>
  )
}
