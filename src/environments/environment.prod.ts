import {firebaseEnvironmentPorduction} from '../environmentsKeys/firebase.prod';

const keys = firebaseEnvironmentPorduction.firebase;

export const environment = {
  production: true,
  firebase: {
    apiKey:             keys.apiKey,
    authDomain:         keys.authDomain,
    databaseURL:        keys.databaseURL,
    projectId:          keys.projectId,
    storageBucket:      keys.storageBucket,
    messagingSenderId:  keys.messagingSenderId
  }
};
