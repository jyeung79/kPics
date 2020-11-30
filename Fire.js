import uuid from 'uuid';
import { REACT_API_KEY, REACT_AUTH_DOMAIN, REACT_DATABASE_URL, REACT_PROJECT_ID, 
        REACT_STORAGE_BUCKET, REACT_MESSAGING_SENDER_ID, REACT_APP_ID, REACT_MEASUREMENT_ID,
        REACT_COLLECTION_ID } from '@env';

import getUserInfo from './utils/getUserInfo';
import shrinkImageAsync from './utils/shrinkImageAsync';
import uploadPhoto from './utils/uploadPhoto';

const firebase = require('firebase');
//required for side-effects
require('firebase/firestore');

const collectionName = REACT_COLLECTION_ID;

class Fire {
    constructor() {
        firebase.initializeApp({
            apiKey: REACT_API_KEY,
            authDomain: REACT_AUTH_DOMAIN,
            databaseURL: REACT_DATABASE_URL,
            projectId: REACT_PROJECT_ID,
            storageBucket: REACT_STORAGE_BUCKET,
            messagingSenderId: REACT_MESSAGING_SENDER_ID,
            appId: REACT_APP_ID,
            measurementId: REACT_MEASUREMENT_ID
        });
        firebase.analytics();
        firebase.firestore().settings({ timestampsInSnapshots: true });

        firebaseauth().onAuthStateChanged(async user => {
            if (!user) {
                await firebase.auth().signInAnonymously();
            }
        });
    }

    // Download Data
    getPaged = async ({ size, start }) => {
        let ref = this.colleciton.orderBy('timestamp', 'desc').limit(size);
        try {
            if (start) {
                ref = ref.startAfter(start);
            }

            const querySnapshot = await ref.get();
            const data = [];
            querySnapshot.forEach(function(doc) {
                if (doc.exists) {
                    const post = doc.data() || {};

                    //Reduce the name
                    const user = post.user || {};

                    const name = user.deviceName;
                    const reduced = {
                        key: doc.id,
                        name: (name || 'Secret Duck').trim(),
                        ...post,
                    };
                    data.push(reduced);
                }
            });

            const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            return { data, cursor: lastVisible };
        } catch ({ message }) {
            alert(message);
        }
    };

    //Upload Data
    uploadPhotoAsync = async uri => {
        const path = `${collectionName}/${this.uid}/${uuid.v4()}.jpg`;
        return uploadPhoto(uri,path);
    }

    post = async ({ text, image: localUri }) => {
        try {
            const { uri: reducedImage, width, height } = await shrinkImageAsync(
                localUri,
            );

            const remoteUri = await this.uploadPhotoAsync(reducedImage);
            this.collection.add ({
                text,
                uid: this.uid,
                timestamp: this.timestamp,
                imageWidth: width,
                imageHeight: height,
                image: remoteUri,
                user: getUserInfo(),
            });
        } catch({ message }) {
            alert(message);
        }
    };

    //Helpers
    get collection() {
        return firebase.firestore().collection(collectionName);
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;