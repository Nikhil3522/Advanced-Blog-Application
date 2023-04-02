import VK from '../Assets/UserAvatar/VK.jpg';
import Dhoni from '../Assets/UserAvatar/Dhoni.jpg';
import Rohit from '../Assets/UserAvatar/Rohit.jpg';
import Nikhil from '../Assets/UserAvatar/Nikhil.jpg';
import Blog1 from '../Assets/BlogImage/Blog1.jpg';
import Blog2 from '../Assets/BlogImage/Blog2.jpg';
import Blog3 from '../Assets/BlogImage/Blog3.webp';
import Blog4 from '../Assets/BlogImage/Blog4.avif';



export const user = [
    {
        userId: 1,
        userName: "Nikhil",
        avatar: Nikhil,
        blog: [2],
        password: 123
    }, 
    {
        userId: 2,
        userName: "Rohit Sharma",
        avatar: Rohit,
        blog: [4],
        password: 123

    }, 
    {
        userId: 3,
        userName: "Virat Kohli",
        avatar: VK,
        blog: [3],
        password: 123

    }, 
    {
        userId: 4,
        userName: "M.S Dhoni",
        avatar: Dhoni,
        blog: [1],
        password: 123
    }
]

export const Blog = [
    {
        blogId: 1,
        title: "An Inspiration to Many",
        content: "Dhoni was not only known for his cricket but was also very popular for his lengthy wavy hair style. In fact, it had then become a trend that every boy in the country now wanted to adorn the “Dhoni Hairstyle”.",
        image: Blog1,
        author: 4
    },
    {
        blogId: 2,
        title: "How better use of data can improve compliance programs",
        content: "Using technology to aggregate data and unearth insights isn’t new. Countless industries have matured their use of data to uncover deeper business intelligence for competitive advantage. For instance, in the early 2000s, Walmart perfected the science of using data to optimize product assortment, leveraging historic and predictive customer demand models to ensure the right product was in the right place on the store shelves at the right time, maximizing profits in the process. And Major League Baseball used comprehensive data to create the “Baseball Encyclopedia,” a compendium of researched statistics that replaces intuition with empirical data analysis so that winning teams could be built with modest budgets.",
        image: Blog2,
        author: 1
    },
    {
        blogId: 3,
        title: "Italy blocks ChatGPT, citing data privacy concerns, as calls for AI regulation grow",
        content: "It has been a challenging week for OpenAI, as calls for generative AI regulation grow louder: Today, Italy’s data protection agency said it was blocking access OpenAI’s popular ChatGPT chatbot and had opened a probe due to concerns about a suspected data collection breach. The agency said the restriction was temporary, until OpenAI abides by the EU’s General Data Protection Regulation (GDPR) laws. A translation of the announcement said that “a data breach affecting ChatGPT users’ conversations and information on payments by subscribers to the service had been reported on 20 March.” It added that “no information is provided to users and data subjects whose data are collected by Open AI; more importantly, there appears to be no legal basis underpinning the massive collection and processing of personal data in order to ‘train’ the algorithms on which the platform relies.”",
        image: Blog3,
        author: 3
    },
    {
        blogId: 4,
        title: "The World Is Magic. So Where Is the Magician?",
        content: "The phrase “magical thinking” has a bad reputation. It is associated with superstition, schizophrenia, hallucination, and other escapes from reality. If you seek a definition that is free of judgment, however, magical thinking is the belief that a hidden cause connects events where no cause actually exists. Science has gone through a long, hard slog to replace magical thinking with rational cause-and-effect, which is why we study the sun through telescopes rather than worshiping it. It’s ironic, then, that the most advanced sciences has confronted us with problems that overturn everyday reality so radically that some kind of magical thinking seems inevitable. We are all embedded in a magical reality that has no cause or explanation. The main features of magical reality are the following: Nature is built from ripples in the quantum field that have the ability to turn into particles. This dual nature has no explanation. Across the threshold of space, time, matter, and energy is a pre-created state that cannot be reached from our side of the threshold. Therefore, physics accepts that the universe is an example of creating “something from nothing.” How this occurs has no explanation.",
        image: Blog4,
        author: 2,
    },
]
