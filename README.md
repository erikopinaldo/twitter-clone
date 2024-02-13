# Twitter clone
Frontend for a Twitter clone using Redux for state management. Project was used to learn more about Redux. 

**Link to project:** https://twitter-clone-erikopinaldo.vercel.app/

![Twitter clone demo](/public/twitter_clone.gif)

## How it's made

### Features
* Add new tweet 
* Like tweet
* Retweet 
  * Retweets show up for other users 
* Switch users without auth (used for testing)

**Tech used:** React, Redux, [Primitive UI](https://taniarascia.github.io/primitive/)

### Components
* Nav bar (currently non-functional)
* User selection drop-down menu
  * This allows you to view the timeline based on the user you select. For example, if you select Tianna and retweet something, you will see the **Retweet** button change to an "active" state. However, the retweeted  item will not show up in your feed unless you switch users. 
* New tweet form
  * Allows you to send out a new tweet attributed to the user selected in the user selection drop-down menu
* New tweet modal
  * Appears when you click the `Post` button present in the nav bar (desktop) or the `+` button at the bottom right of the screen (mobile)
  * Modal fills entire screen on mobile
* Tweet feed
  * Shows all tweets from all users, including retweets 
* Tweet action buttons 
  * Reply (currently non-functional)
  * Retweet: creates a retweet entity and tracks number of retweets
  * Like: tracks number of likes 
* Search bar (currently non-functional)
* Right pane
  * Contains supplementary cards present in Twitter proper: the `Subscribe to Premium`, `What's happening`, and `Who to follow` cards

### State management 
There are currently 3 main categories of data tracked by Redux's state management logic: users, tweets, and currently selected user (from the user drop-down menu)

#### 1. Users slice
This is currently a read-only set of users, so there are no user-related reducers/actions. 

#### 2. Tweets slice
There are 2 types of tweets currently stored in the `postsSlice`: tweets and retweets. 

The tweet entity has a shape like this: 
```
{
    id: '1',
    content: 'Hello!',
    user: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
        heart: {
            count: 0,
            users: [],
        },
        retweet: {
            count: 0,
            users: [],
        },
        reply: {
            count: 0,
            users: [],
        },
    }
}
```
The retweet entity has a shape like this: 
```
{
    id: nanoid(),
    date: new Date().toISOString(),
    user: currentUser.id,
    retweets_id: post.id,
    retweets: post
}
``` 
The `postsSlice` has these reducers: 

* `postAdded`: add new tweet to store
* `retweetAdded`: add new retweet to store
  * Currently references the entire parent tweet object 
* `retweetRemoved`: removes target retweet from store 
* `reactionAdded`: increments the count of replies/retweets/likes for a target tweet. Reaction counts are stored within the tweet object, along with an array containing the users that actioned the tweet
* `reactionRemoved`: decrements the count of replies/retweets/likes for a target tweet. Also removes the user who actioned the tweet from the reaction-user array for the target tweet

#### 3. Current user slice

This feature tracks the currently selected user so that the correct user can be attributed to newly added tweets, retweets, and likes. 

The `currentUserSlice` contains the reducer `currentUserSelected`, which updates the currently selected user. 