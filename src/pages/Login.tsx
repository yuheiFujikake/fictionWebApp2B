import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>ようこそ</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>ログイン</IonCardTitle>
            <IonCardSubtitle>このアプリケーションにログインする</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol><IonInput label="ID" placeholder="User Name"></IonInput></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput label="PASS" placeholder="User Name" type='password'></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton>ログイン</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default Login;
