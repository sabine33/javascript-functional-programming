const users = [{
    firstName: 'Bobo',
    lastName: 'Flakes'
    }, {
    firstName: 'Lawrence',
    lastName: 'Shilling'
    }, {
    firstName: 'Anon',
    lastName: 'User'
    }];
    
    
    const getValueFromObject=(obj,key)=>obj[key];
    const uppercase=(str)=>str.toUpperCase();
    const reverse=(str)=>str.split("").reverse().join("");
    
    const upperAndReverseFirstName=(user)=>reverse(uppercase(getValueFromObject(user,'firstName')))
    
    const upperAndReverseForAll=(arr)=>arr.map(user=>upperAndReverseFirstName(user));
    
    console.log(upperAndReverseForAll(users))
    