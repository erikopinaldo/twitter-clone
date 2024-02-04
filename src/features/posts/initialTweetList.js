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
        id: '3',
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
        id: '4',
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
        id: '5',
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
        id: '6',
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
        id: '7',
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
        id: '8',
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
        id: '9',
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
        id: '10',
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
        id: '11',
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
        id: '12',
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
        id: '13',
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
        id: '14',
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
        id: '15',
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
        id: '16',
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
        id: '17',
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
        id: '18',
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
        id: '19',
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
        id: '20',
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
        id: '21',
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
        id: '22',
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
        id: '23',
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
        id: '24',
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
        id: '25',
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
        id: '26',
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
        id: '27',
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
        id: '28',
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
        id: '29',
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
        id: '30',
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