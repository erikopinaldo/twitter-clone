import { sub } from 'date-fns'

const initialTweetList = [
    
    {
        id: '3',
        content: 'Hello world! This is Kevin!',
        user: '1',
        date: sub(new Date(), { minutes: 20000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 18000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 15000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 13000 }).toISOString(),
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
        content: 'Hello world! This is Kevin!',
        user: '1',
        date: sub(new Date(), { minutes: 12000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 10000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 9000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 8000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 7500 }).toISOString(),
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
        content: 'Hello world! This is Kevin!',
        user: '1',
        date: sub(new Date(), { minutes: 7000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 6500 }).toISOString(),
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
        date: sub(new Date(), { minutes: 6000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 5500 }).toISOString(),
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
        date: sub(new Date(), { minutes: 5000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 4500 }).toISOString(),
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
        content: 'Hello world! This is Kevin!',
        user: '1',
        date: sub(new Date(), { minutes: 4000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 3500 }).toISOString(),
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
        date: sub(new Date(), { minutes: 3000 }).toISOString(),
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
        date: sub(new Date(), { minutes: 2500 }).toISOString(),
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
        date: sub(new Date(), { minutes: 2000 }).toISOString(),
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
        content: 'Hello world! This is Kevin!',
        user: '1',
        date: sub(new Date(), { minutes: 1500 }).toISOString(),
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
        date: sub(new Date(), { minutes: 100 }).toISOString(),
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
        date: sub(new Date(), { minutes: 800 }).toISOString(),
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
        date: sub(new Date(), { minutes: 600 }).toISOString(),
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
        date: sub(new Date(), { minutes: 500 }).toISOString(),
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
        date: sub(new Date(), { minutes: 200 }).toISOString(),
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
        id: '30',
        content: 'Hello world! This is Kevin!',
        user: '1',
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