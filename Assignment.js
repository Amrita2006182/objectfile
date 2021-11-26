function Person(firstname, lastname, officeAddress)
{
    this.firstName = firstname;
    this.lastName = lastname;
    this.Office_Address = officeAddress;
}

const firstperson = new Person('Amrita', 'Kumari', 'Google, USA');
const secondperson = new Person('Vishal', 'Kumar','Amazon, Banglore');
const thirdperson = new Person('raj','kumar','Paytm, canada');

console.log(" FIRSTPERSON  : " + firstperson.firstName+" "+firstperson.lastName+" "+firstperson.Office_Address);
console.log(" SECONDPERSON  : " + secondperson.firstName+" "+secondperson.lastName+" "+secondperson.Office_Address);
console.log(" THIRDPERSON  : " + thirdperson.firstName+" "+thirdperson.lastName+" "+thirdperson.Office_Address);