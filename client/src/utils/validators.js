const validator = ({
    pic=null,
    name="",
    rollNumber="",
    department="",
    year="",
    address="",
    contact="",
    email="",
    resume=null
})=>{
    if(pic===null || name.length===0 || rollNumber.length === 0 || department.length === "" || year.length === 0 || address.length === 0 || (contact.length<10 || /[a-zA-Z]/.test(contact)) || email.length === 0 || resume===null){
        window.alert("Enter valid details")
        return false
    }
    return true
}

export default validator