const mongoose = require('mongoose');

//schema definied in user file being imported here
const User = require("./mongoose_user");


//Setup connection with locally installed MongoDB
mongoose.connect('mongodb://localhost:27017/yourDB')
.then(() => console.log('Connected to DB'))
.catch(err => console.error('Error connecting to DB:', err));

//Commands
run()
async function run() {
    try{
        //Creating a new user method 1
    const user1 = new User({name: "Rahul", age: 20});
    await user1.save();
    console.log(user1);
    console.log("User1 saved!");

    //Creating a new user method 2
    const user2 = await User.create({name: "Urza", age: 20});
    console.log(user2);
    console.log("User2 saved!");

    //Replacing value of a field
    const user3 = await User.create({name: "Tanu", age: 20});
    user3.age = 21;
    await user3.save();
    console.log(user3);
    console.log("User3 saved!");

    //Object with multiple fields
    const user4 = await User.create({
        name: "Rahul", age: 20,    
        email: "rahul@gmail.com", 
        createdAt: new Date(), 
        updatedAt: new Date(),
        bestFriend: user1._id,
        hobbies: ["Reading", "Coding"],
        address: {
            city: "Pune",
            state: "Maharashtra",
            zip: 110001
        }
    });
    console.log(user4);
    console.log("User4 saved!");
    }
    catch(err){
        console.error(err.message);
    }
    finally{
        mongoose.connection.close();
    }
}



//Queries
run()
async function run()
{
    try{
        const user = await User.find({age:20})
        console.log("Query result\n")
        console.log(user)
    }
    catch(e){
        console.log(e.me)
    }
}