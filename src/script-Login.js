async function list() {
  try{
    const endpoint = '/data-api/rest/Employee';
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.value;
  }catch{
    return "Error";
  }
}

async function login(){
  data = await(list());
  if(data === "Error"){
    return;
  }
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let valid = false;
  for(let i = 0; i < data.length; i++){
    const obj = data[i];
    if(obj.EMAIL === email && obj.PASSWORD === password){
      valid = true;
      break;
    }
  }

  console.log(valid);

}