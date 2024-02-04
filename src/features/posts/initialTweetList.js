import { sub } from 'date-fns'

const initialTweetList = [
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
    },
]

export default initialTweetList