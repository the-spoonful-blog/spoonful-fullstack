const {posts, users} = require('./seedData.js');
const {sequelize} = require('./db');
const {User, Post} = require('./models/index');

const seed = async () => {
    try{
        // drop and recreate tables per model definitions
        await sequelize.sync({force: true});

        // insert data
        await Promise.all(users.map(user => User.create(user)));
        await Promise.all(posts.map(post => Post.create(post)));

        console.log("db has been populatd!")
    }catch(error){
        console.log(error)
    }
        
   
}




seed();