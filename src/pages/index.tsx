import React from "react"

import { IonInput, IonItem } from '@ionic/react';

export default function Home() {
  return (
    <div style={{ margin: "2em"}}>
    Hello Gatsby with ionic
      <IonItem>
        <IonInput value="sample" placeholder="Enter Input"> </IonInput>
      </IonItem>
    </div>
  );
}

