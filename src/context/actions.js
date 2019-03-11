// import firebase from 'firebase';
// import _ from 'lodash';

// export function setUser(user) {
//   const {
//     username, firstName, lastName, email, gender,
//   } = user;
//   return firebase.database().ref(`users/${username}`).set({
//     username,
//     firstName: firstName || 'Unknown',
//     lastName: lastName || 'Unknown',
//     email: email || null,
//     gender: gender || 'male',
//   }).then(v => console.log(v));
// }

// export function getUser(username, callback) {
//   const userRef = firebase.database().ref(`users/${username}`);
//   userRef.on('value', (snapshot) => {
//     if (!snapshot.exists()) {
//       // Create user
//       setUser({ username });
//     }
//     if (_.isFunction(callback)) callback(snapshot.val());
//   });
// }

// export function logUserOff(username) {
//   return firebase.database().ref(`users/${username}`).off();
// }

// export const a = 1;
