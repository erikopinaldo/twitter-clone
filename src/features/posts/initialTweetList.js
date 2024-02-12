import { sub } from 'date-fns'

const initialTweetList = [
    
    {
        id: '3',
        content: "Just finished a deep dive into the latest JavaScript framework. Excited to implement what I've learned into our projects! #JavaScript #webdevelopment",
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
        content: "Reflecting on the power of collaboration in tech. When we come together, we can achieve amazing things. #collaboration #techcommunity",
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
        content: "Attended a fascinating webinar on AI ethics today. It's crucial to consider the implications of our technology on society. #AIethics #techforgood",
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
        content: "Taking a break from coding to enjoy some quality time with family. Remembering to prioritize what matters most. #familytime #worklifebalance",
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
        content: "Started experimenting with containerization for our application deployment. Exciting times ahead! #containerization #DevOps",
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
        content: "Just published a new blog post sharing insights from our latest project. Check it out and let me know your thoughts! #blogging #techinsights",
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
        content: "Celebrating a successful product launch with the team today! Hard work pays off. #productlaunch #teamwork",
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
        content: "Enjoying the challenge of optimizing our app's performance. Every optimization brings us closer to excellence. #performanceoptimization #appdevelopment",
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
        content: "Attended a virtual conference on cybersecurity best practices. Security is everyone's responsibility. #cybersecurity #securityawareness",
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
        content: "Reflecting on the importance of accessibility in tech. Let's build inclusive products for all users. #accessibility #techforgood",
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
        content: "Just finished a coding marathon fueled by coffee and determination. Feels good to make progress! #codingmarathon #caffeinepowered",
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
        content: "Just finished a coding marathon fueled by coffee and determination. Feels good to make progress! #codingmarathon #caffeinepowered",
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
        content: "Taking a moment to appreciate the beauty of clean code. It's like poetry in motion. #cleancode #codingart",
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
        content: "Excited to mentor a new intern joining our team this summer. Paying it forward in the tech community. #mentorship #techcommunity",
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
        content: "Just upgraded our server infrastructure to handle increased traffic. Ready to scale for growth! #serverupgrade #scalability",
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
        content: "Reflecting on the importance of continuous learning in tech. There's always something new to discover. #continuouslearning #techskills",
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
        content: "Celebrating diversity in tech today and every day. Our differences make us stronger. #diversityintech #inclusion",
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
        content: "Started using a new project management tool to streamline our workflows. Efficiency is key! #projectmanagement #productivity",
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
        content: "Just finished a code review session with the team. Collaboration breeds excellence. #codereview #teamwork",
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
        content: "Attended an inspiring tech meetup last night. Grateful for the connections made and knowledge shared. #techmeetup #networking",
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
        content: "Reflecting on the evolution of technology and its impact on our lives. It's a remarkable journey. #technology #innovation",
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
        content: "Celebrating the completion of a challenging project milestone. Persistence pays off! #projectmilestone #achievementunlocked",
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
        content: "Enjoying some downtime with a good book on software design patterns. Always room for learning. #codingbook #designpatterns",
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
        content: "Just deployed a new feature based on user feedback. Customer satisfaction is our top priority. #userfeedback #customersuccess",
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
        content: "Thrilled to announce our team's contribution to an open-source project. Giving back to the community. #opensource #community",
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
        content: "Taking a moment to appreciate the supportive tech community. We're all in this together. #techcommunity #support",
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
        content: "Just attended a workshop on agile leadership. Empowering teams for success. #agileleadership #leadershipdevelopment",
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
        content: "Reflecting on the power of resilience in tech. Every setback is an opportunity for growth. #resilience #growthmindset",
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