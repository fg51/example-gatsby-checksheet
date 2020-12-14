import React from "react"

import { IconPencil } from "../components/IconPencil"

import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonListHeader,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonToggle,
} from "@ionic/react"

export const MainBase: React.FC = () => {
  return (
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
  )
}

export default MainBase
