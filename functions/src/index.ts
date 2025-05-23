/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onCall} from "firebase-functions/v2/https";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onCall({cors:
  [/web-page-sandbox\.firebaseapp\.com$/]}, (event) => {
  return {message: "Hello World!"};
});
