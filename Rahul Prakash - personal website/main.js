danger.style.display = 'none';
success.style.display = 'none';
noemail.style.display = 'none';
noname.style.display = 'none';
function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    var sub = document.getElementById('sub');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    const noemail = document.getElementById('noemail');
    const noname = document.getElementById('noname');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let rege = /^([a-zA-Z]){2,20}$/;
    let s = email.value;
    let n = Name.value;
   
    if(Name.value === '' || email.value === '' ||  msg.value === '' || sub.value === ''){
        danger.style.display = 'block';
    }
    else if(rege.test(n) && regex.test(s)){
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
            sub.value = '';
        }, 2000);
        
        success.style.display = 'block';
    } else {
        if(rege.test(n) == false ){
            noname.style.display = 'block';
        }
        if(regex.test(s) == false){
            noemail.style.display = 'block';
        }
        } 
        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
            noemail.style.display = 'none';
            noname.style.display = 'none';
        }, 4000);

}