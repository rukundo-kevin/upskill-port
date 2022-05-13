document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    validateInput(e.target);
})

function filterForm(form){
    form = [...form.children];
    let inputEl = [];
        form.forEach(el=>{
            [...el.children].filter(ele=>{
                if (ele.nodeName == 'INPUT' || ele.nodeName == 'TEXTAREA') {  
                    inputEl.push(ele);
                }
            })
        }) 
   
    return inputEl;
}

function isEmpty(formElements){
    let c = 0;
    formElements.forEach(el=>{
       let elementValue = el.value.replace(/ /g,'');
        elementValue.length < 2?c++:c;
    })
    return c>0?true:false;
}

function displayError(message){
    document.querySelector('div.error').innerHTML = message;
    document.querySelector('div.error').style.display = 'block';
}

function validateInput(form){
      let formEle = filterForm(form);
     
        if (form.id == 'contact-form') {
            if(!isEmpty(formEle)){
                let name = document.querySelector('#name').value,
                email = document.querySelector('#email').value,
                subject = document.querySelector('#subject').value,
                message = document.querySelector('#message').value;
                if (name.length > 5 && subject.length > 5 && message.length > 10) {
                    addQuery(name,email,subject,message);

                }else{
                    displayError('Field contents below minimum');
                }
            }else{
                displayError('Please fill all fields before submitting.');
            }
     }
}

