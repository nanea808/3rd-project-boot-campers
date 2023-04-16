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
            const { _id, taskAuthor, assignedUser } = await Task.create(taskSeeds[index]);
            const authors = await User.findOneAndUpdate(
                { username: taskAuthor  },
                {
                    $addToSet: {
                        createdTasks: _id
                    }
                }
            );

            const assigned = await User.findOneAndUpdate(
                { username: assignedUser},
                {
                    $addToSet: {
                        assignedTasks: _id
                    }
                }
            );
        }


    } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);
});