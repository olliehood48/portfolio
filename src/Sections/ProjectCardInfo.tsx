import { CardPhotos } from "../images/imageLinks";
import { Project } from "../types";
import { Videos } from "../videos/videoLinks";



// Define your project information
const ProjectCardInfo: Project[] = [

    {
      title: "TKinter/Pandas Excel Automation",
      dates: "March 2023 - June 2023",
      description: "Developed a TKinter frontend to automate process steps within Excel, using a backend of functions from the Pandas library.",
      cards: [
        { id: 1, title: 'About', technologies: ["Pandas", "Numpy", "TKinter"], 
          cardInfo: 'During my placement year at Rolls-Royce, I began learning more about the capabilities of Python and in particular the Pandas library. After automating a large portion of Excel processes within my department, I sought to generalise a way for anyone to be able to define an Excel process which could then be saved and ran whenever.' },
        { id: 2, title: 'Example of defining process', cardInfo: 'Description for Card 2', image: CardPhotos.TKinter.TKinter1 },
        { id: 3, title: 'Experience', cardInfo: 'This was my first attempt at a more general application, as opposed to the more individualised scripts I had written to tackle specific processes. Though fairly basic, it was a good experience in integrating a user interface with backend logic and was a good lesson in ensuring consistent data types between the inputs from the frontend and the Pandas functions defined in the backend.' }
      ]
    },

    {
      title: "Athlon - Mobile Sports App",
      dates: "August 2023 - January 2024",
      description: "Developed a sports app using React Native, using MongoDB for the backend, connected with NodeJS and Express.",
      cards: [
        { id: 1, title: 'About', technologies: ["JavaScript", "Python", "MongoDB", "Tailwind", "NodeJS", "Express"], 
          cardInfo: 'Athlon was an app I developed as an exercise to gain experience using JavaScript, which I did in React Native using TailwindCSS for most of the styling. For the backend I initially used FastAPI, but eventually moved to MongoDB connected with NodeJS and Express.' },
        { id: 2, title: 'Demo', video: Videos.Athlon.AthlonDemo},
        { id: 3, title: 'UI Examples', cardInfo: 'Description for Card 2', image: CardPhotos.Athlon.Athlon1},
        { id: 4, title: 'Technology/Experience', cardInfo: 'Developing an app with React Native provided me with valuable experience in frontend component development and deepened my understanding of key techniques like asynchronous programming and state management using React hooks. Additionally, I gained insights into database optimization, employing tools like MongoDB schemas and learning how to connect to the backend using Node.js and Express. I also utilised Python for web scraping to have live score updates and articles.' },

      ]
    },

    {
      title: "Gillespie Simulations",
      dates: "March 2024 - May 2024",
      description: "Used Python to model simulations of Gillespie's algorithm in analysis of aspects of evolutionary game theory.",
      cards: [
        { id: 1, title: 'About', GitHubLink: "https://github.com/olliehood48/Gillespie", technologies: ["Python", "Matplotlib", "Numpy"], cardInfo: 'For my final year uni project I coded simulations of Gillespie\'s algorithm in Python, using matplotlib to plot my results. This gave me valuable experience in plotting results with matplotlib, it also inspired me to think more about the efficiency of my code proper consideration of time complexity.' },
        { id: 2, title: 'Background', cardInfo: "Gillespie's algorithm is used as a model to simulate the likelihood of fixation of a strategy in the context of evolutionary game theory. Evolutionary game theory studies the stability of different strategies within a population, to understand what a population is likely to do given strategies of different payoffs. While this can be investigated using mathematical methods, Gillespie's algorithm can offer a quick model of likely outcomes, particularly if you want to compare across different inital conditions."},
        { id: 3, title: 'Demo context', cardInfo: "The demo shows the progress of the simulations in the terminal, with the resulting fixation of the recent simulation (fixation refers to the whole population deciding to choose one strategy). These simulations are used as a sample of data from which a sample mean fixation probability and time are found and plotted against various initial conditions on the first set of graphs. The second set of graphs are in reference to a business model I developed to investigate the evolutionary behaviour of customers."},
        { id: 4, title: 'Demo', video:  Videos.Gillespie.GillespieDemo},
        { id: 5, title: 'Experience', cardInfo: "The code rested on some quite advanced maths and given this was going to be put into a report, a focus was put on making the output of the code clear and presentable. Furthermore, given the nature of the code providing simulations of an algorithm, I sought to understand more about the time complexity of my code to be as efficient as possible. Though Gillespie\'s algorithm is designed for populations with 2 types of species, I also developed this into one that considers multiple species, seen at the GitHub link."}
      ]
    }
  ];

export default ProjectCardInfo