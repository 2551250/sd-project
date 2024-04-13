// Function returns all employees in the database (staff, manager and HR)
async function list() {
  try{
    // Endpoint to get employees
    const endpoint = '/data-api/rest/Employee';
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.value;
  }catch(err){
    console.log(err);
    return "Error";
  }
}

// Function verifies the identity of an employee
async function login(){
  data = await(list());
  if(data === "Error"){
    //TODO add error handling
    return;
  }
  // Get email and password from form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let valid = false;
  // Checks if employee valid
  for(let i = 0; i < data.length; i++){
    const obj = data[i];
    if(obj.EMAIL === email && obj.PASSWORD === password){
      valid = true;
      break;
    }
  }

  console.log(valid);

}