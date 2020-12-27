// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  _firebase: {
    apiKey: "AIzaSyDTGCc6-FSMaTet6mmbni_OIsjic15w7Ek",
    authDomain: "prueba1-f33dd.firebaseapp.com",
    databaseURL: "https://prueba1-f33dd-default-rtdb.firebaseio.com",
    projectId: "prueba1-f33dd",
    storageBucket: "prueba1-f33dd.appspot.com",
    messagingSenderId: "697549560956",
    appId: "1:697549560956:web:9b5621eac28141a483bdf9",
    measurementId: "G-FQJYP4637J"
  },
  get firebase() {
    return this._firebase;
  },
  set firebase(value) {
    this._firebase = value;
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
