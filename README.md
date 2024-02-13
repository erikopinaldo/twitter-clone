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

## Lessons learned
As I initially mentioned, this project was used to learn about Redux. 

When I started, the idea of Redux made sense -- constantly lifting state up and sharing it back down through multiple layers of children can add unnecessary effort. Why not use a way to make state accessible from any component no matter where they are in the tree? 

While initially reading through [Redux's official docs](https://redux.js.org/tutorials/essentials/part-1-overview-concepts), I have to admit the lack of context was causing me to lose focus. The docs started off with general terminology explanations, which makes sense in hindsight, but I generally have trouble understanding concepts when they are taken out of their contexts. Where are we putting these actions in the codebase? What about the action creators? The reducers? 

Once I reached the practical examples shown in the docs, I _really_ started learning and getting things. 

Ohh ok this is starting to make sense! 
1. Initialize your store in a separate store file.
    * The store is what actually houses your app's shared state 
    * You also list out what reducers should have the ability to update the state in this store
    * These reducers are separated by "slice"
2. Where are these reducers coming from? This is coming from a file called a `slice`. These slices represent different features present in your app and contain all of the Redux action and reducer logic for that particular feature, so you will end up having multiple slices in your codebase. For example, in my Twitter clone, I've got a `users` slice that's separate from my `posts` slice. 
   * In each of these slices, you define the logic that is used to update the store. For example, if a particular reducer defined in the `posts` slice "hears" that a certain action, `postAdded`, is dispatched from the UI, then it will go and update the state for our `posts` and add a new post.
3. Ok so you need a reducer to be triggered by a dispatched action in order for the reducer to update a particular slice of the store. How do you dispatch an action from the UI? 
   * The answer: within your components! If you're looking into Redux, you already know that you can define event handlers from within your components.  These event handlers can be written to "dispatch" actions that trigger your previously defined reducers. These actions are made available to you via the `useDispatch` function from Redux Toolkit. For example, if a user clicks a certain part of your UI, you can call `useDispatch(ACTION_NAME)` to trigger a specific reducer. 
4. Finally, each of your components can access your Redux state/store via the `useSelector` function, also provided to you via Redux Toolkit. You can specify which slice in particular you want to access. This looks like `useSelector(GLOBAL_STATE => GLOBAL_STATE.SLICE_NAME)`

### Note
It's worth noting that you shouldn't be using Redux for all of your app's logic, or even at all depending on your app structure. If any of the following is true, then you should consider skipping out on Redux or larger state management solutions as a whole: 
* A particlar component's rendering and behaviour depends on state that is inherent only to that specific component, and that state is not used anywhere else. 
  * This is a good argument against using any Redux logic within this component. 
  * A good example is a component that only handles UI changes that don't make sense to store globally (e.g. styling changes for this one specific component). 
* There isn't much state sharing in general amongst your components.
  * This is a good argument against using Redux at all in your project. 

Aside from not having the reasons to use Redux, what would dissuade you from using it? Well, it's just more work at the end of the day. While Redux Toolkit has seriously streamlined the work, there is still a good amount of boilerplate you need to write to get Redux set up. If you don't absolutely need the state sharing, best to skip out doing all of that extra work in the first place. 

## Opportunities

Redux-learning-specific:
* Fetch data from an API or backend via something like RTK Query
* Improve repo organization
  * I know teams that have separate files for reducers, actions, etc. Would be worth looking into that for improved repo navigation and readability

General app functionality:
* Reply functionality
* Search functionality
* Profile pages
* Follow functionality