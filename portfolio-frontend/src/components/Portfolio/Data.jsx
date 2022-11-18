import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'

export const projectsData = [
    {
        id:1,
        image: work1,
        title: 'El Progreso',
        category: 'backend',
        description: "In this project I did the frontend and backend development, it's an ecommerce of agroforestry products.",
        description2: 'Tech Stack:',
        action1:'Python',
        action2: 'Django', 
        action3: 'SQL',
        action4: 'HTML',
        action5: 'CSS',
        action6: 'Bootstrap',
        web: 'https://ecommerce-elprogreso.herokuapp.com/',
        code: 'https://github.com/JoseAArevaloA/Ciclo3_Elprogreso',

    },
    {
        id:2,
        image: work2,
        title: 'Jose Arévalo Portfolio',
        category: 'frontend',
        description: "In this project I did the frontend and backend development, it's me portfolio.",
        description2: 'Tech Stack:',
        action1:'React',
        action2: 'Django', 
        action3: 'MongoDB',
        action4: '',
        action5: '',
        action6: '',
        web: '',
        code: 'https://github.com/JoseAArevaloA/PortfolioJAAA',
    },
   
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'frontend',
    },
    {
        name: 'backend',
    },
]