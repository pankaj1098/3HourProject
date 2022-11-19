function saveToLocalStorage(event){
    event.preventDefault();
    const unique=Math.floor(1000*Math.random());
    const ammount=event.target.ammount.value;
    const Description=event.target.Description.value;
    const Type=event.target.Type.value;
    const obj = {
        unique,
        ammount,
        Description,
        Type
    }
    localStorage.setItem(obj.unique,JSON.stringify(obj));
    showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})
function showNewUserOnScreen(user){
    document.getElementById('ammount').value = '';
    document.getElementById('Description').value = '';
    document.getElementById('Type').value = '';
    
        const parentNode= document.getElementById('users');
        const childHTML = `<li id='${user.unique}'>'${user.ammount}' - '${user.Description}'-'${user.Type} <button onclick=editUserDetails('${user.unique}','${user.ammount}','${user.Description}','${user.Type}')>Edit</button><button onclick=deleteUser('${user.unique}')>Delete</button></li>`;
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    
    }
    
    function editUserDetails(unique,ammount, Description,Type){
    
        document.getElementById('ammount').value = ammount;
        document.getElementById('Description').value = Description;
        document.getElementById('Type').value=Type;
        deleteUser(unique)
     }
    
    // delete user abc@gmail.com
    function deleteUser(unique){
        localStorage.removeItem(unique);
        removeUserFromScreen(unique);
    }
    
    function removeUserFromScreen(ammount){
        const parentNode = document.getElementById("users");
        const childNodeToBeDeleted= document.getElementById(ammount);
       if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
       }
    }
    let addExpense=document.getElementById(unique);
    addExpense.style.color=green;
