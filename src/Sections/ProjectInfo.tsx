import { CardPhotos } from "../images/imageLinks";

// Define types for the components' props
interface Card {
    id: number;
    title: string;
    cardInfo: string;
    image?: string;
    demoLink?: string;
    technologies?: Array<String>;
  }

interface Project {
    title: string;
    dates: string;
    description: string;
    cards: Card[];
  }

// Define your project information
const ProjectInfo: Project[] = [

    {
      title: "TKinter/Pandas Excel Automation",
      dates: "March 2023 - June 2023",
      description: "Developed a TKinter frontend to automate process steps within Excel, using a backend of functions from the Pandas library.",
      cards: [
        { id: 1, title: 'About', cardInfo: 'During my time at Rolls-Royce, I began understanding more about the capabilities of Python and in particular the Pandas library. After automating a significiant number of processes within my department, I sought to generalise a way of allowing non-programmers to use Pandas. For this I made a backend of Pandas functions and then used TKinter to provide a fronted where users could select the steps they wished to automate, save the processes and be able to run them at any time.' },
        { id: 2, title: 'Example of defining process', cardInfo: 'Description for Card 2', image: CardPhotos.TKinter.TKinter1 },
        { id: 3, title: 'Technology/experience', technologies: ["Pandas", "Numpy", "TKinter", "xlsxwriter", "openpyxl"], cardInfo: 'This was my first attempt at a more general application, as opposed to the more individualised scripts I had written to tackle specific processes. Developed in Jupyter Notebook.' }
      ]
    },

    {
      title: "Athlon - Mobile Sports App",
      dates: "August 2023 - January 2024",
      description: "Developed a sports app using React Native, using MongoDB for the backend, connected with NodeJS and Express.",
      cards: [
        { id: 1, title: 'About', cardInfo: 'Athlon served as a way for me to teach myself JavaScript in React Native. Initially, my focus was on understanding how to develop the frontend components, learning about key functionalities such as state management using React hooks. Whilst I focused on the frontend, I used a simple FastAPI backend to have some data to display in-app. As I progressed I moved to a MongoDB backend, connected using express and NodeJS, along with various Python scripts aimed at optimizing the management of the database, as well as for unit tests.' },
        { id: 2, title: 'UI Examples', cardInfo: 'Description for Card 2', image: CardPhotos.Athlon.Athlon1},
        { id: 3, title: 'Technology/Experience', technologies: ["JavaScript", "Python", "Tailwind", "NodeJS", "Express"], demoLink: 'https://youtu.be/Zjy35sAzh2I', cardInfo: 'This was a much more comprehensive application than the Excel Automation code and it allowed me to learn a lot about the general development of frontend components, as well as other techniques such as asynchronous programming and state management using React hooks. I also learnt a lot about database optimisation, utilising tools like the schema used in MongoDB.' }
      ]
    },

    {
      title: "Gillespie Simulations",
      dates: "March 2024 - May 2024",
      description: "Used Python to model simulations of Gillespie's algorithm in analysis of aspects of evolutionary game theory.",
      cards: [
        { id: 1, title: 'About', cardInfo: 'For my final year uni project (dissertation equivalent) I coded simulations of Gillespie\'s algorithm in Python, using matplotlib to plot my results. This was an insightful exploration into using computational methods to investigate mathematical models. Both the coding and the maths behind it were very interesting and given it was needed to put into a report, a focus was put on making the output of the code clear and presentable. Furthermore, given the nature of the code providing simulations of an algorithm, this led me to develop my understanding of the time complexity of my code to aim to be as efficient as possible.' },
        { id: 2, title: 'Card 2', cardInfo: 'Description for Card 2' },
        { id: 3, title: 'Card 3', cardInfo: 'Description for Card 3' },
        { id: 4, title: 'Card 4', cardInfo: 'Description for Card 4' }
      ]
    }
  ];

export default ProjectInfo