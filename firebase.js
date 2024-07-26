



    


    


    // NOTE POINT

//1.getFirestore initialize the db in your project  const db = getFirebstore(app)

 // 2. collection--> to make collection referrnce --> collection(db,"users")
 // 3. doc-->to make document refrence-->doc(db,"user","---id---")
 // 4. addDoc--> to add document to the collection and generate uinque itself--> addDoc(db,"users",{your data is here})

 //5. getDocs -->to get all documents in the collection --> getDocs(collection(db,"users"))

 // 6. deleteDoc--> to delete a single document under collection -->
  // deleteDoc(doc(db,"users",'---id---'))

  // 7. setDoc --> to add/update document under the collecton ---> setDoc(doc(),{})

  // 8. getDoc --> to get a single document from collection --> getDoc(doc())
  
    

    // Import the functions you need from the SDKs you need
    import { initializeApp,getApp  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

    // firebase firestore
    import { getFirestore ,collection, addDoc,getDocs ,query, where,doc, setDoc ,getDoc,Timestamp,serverTimestamp,onSnapshot ,orderBy,updateDoc,increment,deleteDoc
  
  
    } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  



     // firebase real time database
     import {getDatabase 


     } from  "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
  
  
     /// fire storage paart
  
     import { getStorage ,ref ,uploadBytes ,uploadBytesResumable, getDownloadURL,listAll ,deleteObject 
  
  
      } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
  
  
      // fire base auth
    import {getAuth ,
       createUserWithEmailAndPassword,
       onAuthStateChanged ,
       signInWithEmailAndPassword ,
       signOut ,updateProfile 
  
  
    } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  
 
  
    const firebaseConfig = {
      apiKey: "AIzaSyAtlby0Myb4XRtKHtX0EllJsNRSoWZ6Svo",
      authDomain: "store-data-ba338.firebaseapp.com",
      projectId: "store-data-ba338",
      storageBucket: "store-data-ba338.appspot.com",
      messagingSenderId: "743729553629",
      appId: "1:743729553629:web:59507db6aa0334ac9dbb34"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);
    const database = getDatabase(app);
    // console.log(database,"database")
    
    
    
  // console.log(storaa Q1`ge,"db==>",db,"auth==>",auth,"i sm storage part")
  
  
  export{
    initializeApp,getApp,
    getFirestore ,collection, addDoc,getDocs ,query, where,
    getStorage ,ref ,uploadBytes ,uploadBytesResumable, getDownloadURL,listAll ,deleteObject ,
    getAuth ,
       createUserWithEmailAndPassword,
       onAuthStateChanged ,
       signInWithEmailAndPassword ,
       signOut ,updateProfile , 
       doc, setDoc ,db,getDoc,Timestamp,serverTimestamp,onSnapshot ,orderBy,updateDoc,increment,deleteDoc
  

  }
  
  
  
  
  
    
  
    
 