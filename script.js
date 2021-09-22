const birthdate = document.querySelector("#birthdate");
const luckynum = document.querySelector("#luckynum");
const btn = document.querySelector("#check-btn");
const output = document.querySelector("#result");
const yayyGif=document.querySelector("#yayy-gif");
const oopsGif=document.querySelector("#oops-gif");

let sum = 0;

yayyGif.style.display="none";
oopsGif.style.display="none";

btn.addEventListener("click", () => {
  if((birthdate.value && luckynum.value)===0){
    output.innerText="Please enter valid Birthdate and lucky number";
}
birthdatenum = (birthdate.value).replaceAll("-", "");

for (let i = 0; i < birthdatenum.length; i++) {
    sum += Number(birthdatenum.charAt(i));
}
  
if (sum % (luckynum.value) === 0)
{
  output.innerText = "Yayy! your birthday is lucky!";
    yayyGif.style.display="inline-block";
    oopsGif.style.display="none";
}   
else
{
  output.innerText = "Oops! your birthday is not lucky!";
  yayyGif.style.display="none";
  oopsGif.style.display="inline-block";
}
sum=0;
});