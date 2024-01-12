function addForm(){

    let containerElem = document.querySelector(".container")
    let tableForm = document.querySelector("#tableForm")
    if (!tableForm){
        let formDiv = `<div id="tableForm" class="row bg-light shadow mb-3 py-3">
        <form  >
            <label class="form-label">Nama</label>
            <input name="newName" class="form-control" type="text" placeholder="masukkan nama anda"> <br>
            <label class="form-label">Role</label>
            <input name="newRole" class="form-control" type="text"> <br>
            <label class="form-label" >Availability</label>
            <input name="newAvail" class="form-control" type="text"> <br>
            <label class="form-label">Usia</label>
            <input class="form-control" type="number"> <br>
            <label class="form-label">Lokasi</label>
            <input name="newLocation" class="form-control" type="text"> <br>
            <label class="form-label">Years Experience</label>
            <input name="newExp" class="form-control" type="number"> <br>
            <label class="form-label">Email</label>
            <input name="newEmail" class="form-control" type="email"> <br>
            <button type="button" onclick="replaceData()" class="btn btn-success w-100">SUBMIT</button>
        </form>
    
    </div>`
        containerElem.insertAdjacentHTML("beforeend",formDiv)
    }
   
}

function replaceData(){
    let obj = {
        "fullName" : "newName",
        "oldRole" : "newRole",
        "oldAvail" : "newAvail",
        "oldLocation" : "newLocation",
        "oldExp" : "newExp",
        "oldEmail" : "newEmail"
    }

    for (item in obj){
        console.log(item)
        let oldItem = document.getElementsByName(item)
        let newItem = document.getElementsByName(obj[item])
        console.log(oldItem)
        console.log(newItem)
        if (newItem[0].value.length > 0){
            oldItem[0].innerHTML = newItem[0].value
        }
    
    }
    
    let tableForm = document.getElementById("tableForm")
    tableForm.remove()

}