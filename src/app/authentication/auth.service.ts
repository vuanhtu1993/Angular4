import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  token: string;

  constructor(private firebaseAuth: AngularFireAuth,
              private fireStore: AngularFirestore,
              private router: Router) {
    this.firebaseAuth.authState
    // .switchMap(user => {
    //   if (user) {
    //     return this.fireStore.doc(`users/${user.uid}`).valueChanges();
    //   } else {
    //     return Observable.of(null);
    //   }
    // })
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }

  signUp(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.getToken();
      })
      .catch(error => {
        console.log('Something went wrong:', error.message);
      });
  }

  logIn(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.getToken();
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logOut() {
    this.firebaseAuth
      .auth
      .signOut()
      .then(() => {
        this.token = '';
        this.router.navigate(['/auth/login']);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken(true)
      .then((token) => {
        this.token = token;
        console.log(this.token);
      });
  }
}
