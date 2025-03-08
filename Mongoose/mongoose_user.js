const mongoose = require('mongoose');

//defining schema
const userSchema = new mongoose.Schema({
    //key value pair=> key is name of field and value is type of field

    //name is required field
    name: {type: String, required: true, immutable: true},        

    //age is number field with min and max value
    age: {type: Number, min: 1, max: 100,

        //custom validation
        validate:
        {
            validator: v=> v%2==0,
            message: props=>`${props.value} is an even number`
        }
    },      

    //email is required and unique field
    email: {type: String, required: true, unique: true, minlength: 10, maxlength: 25},      

    //Default value for createdAt field
    createdAt: {type: Date, default: Date.now},     
    //Default value for updatedAt field
    updatedAt: {type: Date, default: Date.now},   
    
    //Reference to another object in the database
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"     
    },  
    
    //Array of strings
    hobbies: [String],      
    
    //Nested object
    address: {                                      
        city: String,
        state: String,
        zip: Number
    }
});


//different schema for address
const addressSchema = new mongoose.Schema({
    city: String,
    state: String,
    zip: Number
});
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,      //email is required field
        lowercase: true      //email will be stored in lowercase, can make uppercase using uppercase: true
    },
    address: addressSchema
});


//methods
userSchema.methods.sayHi = function ()
{
    console.log(`Hi, my name is ${this.name}`)
}


//static method
userSchema.static.findByName = function(name)
{
    return this.where({name: new RegExp(name,'i')})     //'i' indicates case insesnsitive
}

//Virtual Property based on existing properties
userSchema.virtual('namedEmail').get(function()
{
    return `${this.name} <${this.email}>`
})

//model created being exported
module.exports = mongoose.model('User', userSchema);
