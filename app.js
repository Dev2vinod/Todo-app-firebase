

    //moment().format('LT')

    import {
        collection, addDoc,db,doc, onSnapshot,query, where,getDocs ,orderBy,
        deleteDoc 
    } from './firebase.js';

 
 const userInput =document.getElementById("userInput");
 const list =document.getElementById("list");
 const fbResult =document.getElementById("fbResult");

 userInput.addEventListener("keydown",async(e)=>{
    // console.log("key code",e.keyCode)
    if(e.keyCode =="13" ){
        console.log("userInput",userInput.value)

 
        try{

            const todoRef = await addDoc(collection(db, "todos"), {
                userInput:userInput.value,
                time:moment().format('LT')
              });
              console.log("Document todos id in db with ID: ", todoRef.id);

//               list.innerHTML += `<li ${todoRef.id}>${userInput.value} 
                

//               <span>${moment().format('LT')}</span>
//               <button onclick="editBtn(this,'${todoRef.id}')">Edit</button>
//               <button onclick="deleteBtn(this,'${todoRef.id}')">Delete</button>
//              </li>
// `

             userInput.value= ''

            //  window. editBtn =editBtn;
            //  window.deleteBtn =deleteBtn;
            }

            catch (error){
                
                console.log(error,"error in add todo value")
            }
    
        
       
      
      
      
      
        }
 })



  
  // delete btn ka function

   const deleteBtn =async(k,id)=>{
       console.log(k,"id-->",id)
       
       try {
           
           await deleteDoc(doc(db, "todos", id));
           console.log("delbtn",k.parentNode.remove())
        //    getAllTodoFb()


    } catch (error) {
        console.log(error,"error in delete todos")
    }
   }

   // edit btn ka function
   const editBtn =(m)=>{
    console.log("edit bnt" ,m.parentNode.childNodes[0])
    console.log(m.parentNode.childNodes[0].data)

    m.parentNode.childNodes[0].data =prompt("hello put ")

   }


   // get all todos from firebase in real time


    const getAllTodoFb =async()=>{


        try {

            const q = query(collection(db, "todos"),orderBy("time", "asc"), );

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());

         let card =     `<li ${doc.id}>${doc.data().userInput} 
                

              <span>${moment().format('LT')}</span>
              <button onclick="editBtn(this,'${doc.id}')">Edit</button>
              <button onclick="deleteBtn(this,'${doc.id}')">Delete</button>
             </li>
`


fbResult.innerHTML += card


        window. editBtn =editBtn;
        window.deleteBtn =deleteBtn;

            });

            
            
        } catch (error) {
            

            console.log(error,"error from get all todos")
        }



    }

    getAllTodoFb()
  