// Project JavaScript Contacts Console

let array = [['1' ,'Yu Parni', 'Female', '+886 111 101010', 'Parniah@TKI.org', true], 
            ['2' ,'Lek Kuwat', 'Male',  '+62 812 242424', 'KuwatRohani@gmail.com', true], 
            ['3' ,'Mbah Pon', 'Male', '+62 813 363636', '-', true]];



let myContacts = (array) => {

    let result = []
    for(let i=0;i<array.length;i++){
        let object ={}
        object.id = array[i][0]
        object.name = array[i][1]
        object.gender = array[i][2]
        object.phoneNumber = array[i][3]
        object.email = array[i][4]
        object.favorite = array[i][5]
        result.push(object)
    }
    return result
}


let filterContact = (contact, filter1, filter2) => {
    let newContact1 = []
    let newContact2 = []
    for(let i=0;i<contact.length;i++){
        if(contact[i].gender === filter1){
            newContact1.push(contact[i])
        }
        else if(contact[i].gender === filter2){
            newContact2.push(contact[i])
        }
    }
    return newContact1
}

console.log(filterContact(myContacts(array), 'Male', 'Female'))

