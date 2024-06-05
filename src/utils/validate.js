export const checkValidData = (email, password,name)=>{
const isEmailCorrect = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isPasswordCorrect = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
const isNameCorrect = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

if(!isEmailCorrect) return "Email ID is not valid"
if(!isPasswordCorrect) return "Password is not valid"
if(!isNameCorrect) return "Name is not valid"

return null;
}