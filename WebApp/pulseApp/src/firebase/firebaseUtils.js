import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from './firebaseConfig'; 

const db = getDatabase(firebaseApp);

const fetchFirebaseData = (onDataReceived, onError) => {
  const dbRef = ref(db, 'health'); // Specify your data path directly

  // Set up the listener for real-time updates
  const unsubscribe = onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      onDataReceived(data); // Call the callback with the new data
    } else {
      console.log("No data available");
      onDataReceived(null); // Call with null if no data
    }
  }, (error) => {
    console.error("Error fetching data:", error);
    onError(error); // Call the error callback
  });

  // Return the unsubscribe function
  return unsubscribe;
};

export { fetchFirebaseData };
