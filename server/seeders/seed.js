const db = require('../config/connection');

const {User, Task} = require('../models');




// users have the following values:
// picture
// username
// email
// password
// description
// skills list (array)

// tasks have the following values:
// id
// name
// description
// current funding
// owning user
// assigned user