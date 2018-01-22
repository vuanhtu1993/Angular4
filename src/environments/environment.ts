// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDhD42zHVP8YzELtIf_TTHcmkQbN2pzqAs',
    authDomain: 'angular4-final.firebaseapp.com',
    databaseURL: 'https://angular4-final.firebaseio.com',
    projectId: 'angular4-final',
    storageBucket: '',
    messagingSenderId: '107447201422'
  }
};
