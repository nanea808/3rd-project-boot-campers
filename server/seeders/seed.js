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
            const { _id, taskAuthor, assignedUser, watchingUsers, fundingUsers } = await Task.create(taskSeeds[index]);

            // update authoring user's list of created tasks
            const authors = await User.findOneAndUpdate(
                { username: taskAuthor  },
                {
                    $addToSet: {
                        createdTasks: _id
                    }
                }
            );
            
            // update assigned user's list of assigned tasks
            const assigned = await User.findOneAndUpdate(
                { username: assignedUser},
                {
                    $addToSet: {
                        assignedTasks: _id
                    }
                }
            );

            // cycle through the array of watching users
            // update each watching user's list of watched tasks
            for (let jndex = 0; jndex < watchingUsers.length; jndex++) {
                const watchingUser = await User.findOneAndUpdate(
                    { username: watchingUsers[jndex]},
                    {
                        $addToSet: {
                            watchedTasks: _id
                        }
                    }
                )
            };

            // cycle through the array of funding users
            // update each funding user's list of funded tasks
            // update each funding user's funding for that task
            for (let jndex = 0; jndex < fundingUsers.length; jndex++) {
                const fundingUser = await User.findOneAndUpdate(
                    { username: fundingUsers[jndex].username},
                    {
                        $addToSet: {
                            fundedTask: _id,
                            funding: fundingUsers[jndex].funding
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