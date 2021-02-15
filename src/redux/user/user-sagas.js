import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user-types';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user-actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(call(signOutFailure, e));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user, { displayName });
    const userSnapshot = yield userRef.get();
    yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signUpFailure(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
