const db = require("../config/connection");

const { User, Task } = require("../models");

const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await Task.deleteMany({});
        await User.create(userSeeds);

        for (let index = 0; index < taskSeeds.length; index++) {
            const { _id, taskAuthor, assignedUser, watchingUsers } = await Task.create(taskSeeds[index]);

            // define taskAuthor for tasks
            const authors = await User.findOneAndUpdate(
                { username: taskAuthor  },
                {
                    $addToSet: {
                        createdTasks: _id
                    }
                }
            );
            
            // define assignedUser for tasks with assigned users
            const assigned = await User.findOneAndUpdate(
                { username: assignedUser},
                {
                    $addToSet: {
                        assignedTasks: _id
                    }
                }
            );

            for (let index = 0; index < watchingUsers.length; index++) {
                const watchingUser = await User.findOneAndUpdate(
                    { username: watchingUsers[index]},
                    {
                        $addToSet: {
                            watchedTasks: _id
                        }
                    }
                )
            }

        }


    } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);
});