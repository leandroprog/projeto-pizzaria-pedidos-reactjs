import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDVj5h0WspihtzXgi5AwmB0U7Blgy_h0-k',
  authDomain: 'projeto-pizzaria-126f6.firebaseapp.com',
  databaseURL: 'https://projeto-pizzaria-126f6.firebaseio.com',
  projectId: 'projeto-pizzaria-126f6',
  storageBucket: 'projeto-pizzaria-126f6.appspot.com',
  messagingSenderId: '976720996792',
  appId: '1:976720996792:web:534f908676c96ddb65474d',
  measurementId: 'G-QN8FQ0TFR6'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
