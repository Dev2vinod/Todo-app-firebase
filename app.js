


 
 const userInput =document.getElementById("userInput");
 const list =document.getElementById("list");

 userInput.addEventListener("keydown",(e)=>{
    // console.log("key code",e.keyCode)
    if(e.keyCode =="13" ){
        console.log("userInput",userInput.value)

        list.innerHTML += `<li>${userInput.value} 
                
                <span>2:22 PM</span>
                <button onclick="editBtn(this)">Edit</button>
                <button onclick="deleteBtn(this)">Delete</button>
            </li>
  `

        userInput.value= ''

        window. editBtn =editBtn;
        window.deleteBtn =deleteBtn;

    }
 })

  
  // delete btn ka function

   const deleteBtn =(k)=>{
    console.log("delbtn",k.parentNode.remove())
   }

   const editBtn =(m)=>{
    console.log("edit bnt" ,m.parentNode.childNodes[0])
    console.log(m.parentNode.childNodes[0].data)

    m.parentNode.childNodes[0].data =prompt("hello put ")

   }
  