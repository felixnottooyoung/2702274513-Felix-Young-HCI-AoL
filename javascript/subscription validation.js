const register = document.getElementById("register")

register.addEventListener("submit", (e)=>{
    const name = document.getElementById("name");
    const email_address = document.getElementById("email_address")
    const date_of_birth = document.getElementById("date_of_birth")
    const male = document.getElementById("male")
    const female = document.getElementById("female")
    const tnc = document.getElementById("tnc")

    let valueOfDate = new Date(date_of_birth.value)
    e.preventDefault()
    if(name.value == 0){
        alert("Nama tidak boleh kosong")
    }
    else if(!email_address.value.includes("@") || !email_address.value.includes(".com")){
        alert("Format e-mail tidak tepat")
    }
    else if(date_of_birth.value == "" || date_of_birth.value == null || !(valueOfDate.getFullYear() >= 1970 && valueOfDate.getFullYear() <= 2010)){
        alert("Tahun lahir harus di antara 1970 dan 2010")
    }
    else if(!male.checked && !female.checked){
        alert("Jenis kelamin harus dipilih")
    }
    else if(!tnc.checked){
        alert("Syarat dan ketentuan harus disetujui")
    }
})