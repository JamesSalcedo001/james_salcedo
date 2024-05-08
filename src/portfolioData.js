import resumePDF from "./James_Salcedo_Resume (1).pdf"
import profilePhoto from "./Screen Shot 2023-12-03 at 8.10.16 PM.png";
import sweetBanditImage from "./images/Screen Shot 2024-05-07 at 5.58.52 PM.png"


const about_me = {
    name: "James Salcedo",
    email: "jamesa.salcedo3@gmail.com",
    photo: profilePhoto,
    // photo: "https://media.licdn.com/dms/image/D5603AQHJ7bDWd-gD8A/profile-displayphoto-shrink_800_800/0/1694925887458?e=1707350400&v=beta&t=bvjK-sXVcOR_sr6NWFayElDe5hHgDizIy9XGbR3TR8g",
    // photo: "src/Screen Shot 2023-12-03 at 8.10.16 PM.png",
    bio: "I am a full stack developer passionate about creation, innovation, and collaboration. I am especially interested in the fields of technology and gaming, and have a strong desire to make a significant impact in driving the future.",
    linkedIn: "https://www.linkedin.com/in/james-antonio-salcedo/",
    github: "https://github.com/JamesSalcedo001",
    blog: "https://medium.com/@james_salcedo",
    resumePDF: resumePDF
}


const project_data = [
    {
        id: 1,
        title: "Cool Cat Store",
        image: "https://user-images.githubusercontent.com/107723341/266446077-e3c59c90-15ce-4196-8e83-e96fd19a4b1a.png",
        description: " E-commerce app built with React and Rails, showcasing many-to-many data relationships, CRUD features, and API integrations.",
        tech_stack: "Redux, Stripe, Vite, Ruby, JavaScript, React, Ruby on Rails, PostgreSQL, Render",
        github_link: "https://github.com/JamesSalcedo001/cool_cat_store",
        live_site: "https://cool-cat-store.onrender.com/"
    },
    {
        id: 2,
        title: "Space Base, the Social App",
        image: "https://user-images.githubusercontent.com/107723341/243157331-7e9590d6-814b-4165-99e7-c8bd01f15b1a.png",
        description: "Social media application designed to demonstrate mastery of React and Rails in building interactive platforms. The project features CRUD operations, multiple data models, and secure authentication.",
        tech_stack: "Ruby, JavaScript, React, Ruby on Rails, PostgreSQL, Render",
        github_link: "https://github.com/JamesSalcedo001/social_app",
        live_site: "https://social-app-jpxa.onrender.com/"
    },
    {
        id: 3,
        title: "The Sweet Bandit",
        image: sweetBanditImage,
        description: "Official Site for The Sweet Bandit local business. Currently working with client to deliver further features to the site.",
        tech_stack: "Redux, Stripe, Vite, Ruby, JavaScript, React, Ruby on Rails, PostgreSQL, Render, Jira",
        github_link: "https://github.com/JamesSalcedo001/sweet_bandit",
        live_site: "https://sweet-bandit.onrender.com/"
    }
]

export { about_me, project_data };






// ,
//     {
//         id: 3,
//         title: "Kitty Shelter",
//         image: "https://user-images.githubusercontent.com/107723341/232581303-371a7cb4-afa0-430f-b1cf-f6da270be077.png",
//         description: "Web app for cat shelter employing Sinatra, Active Record and Ruby",
//         tech_stack: "Ruby, Javascript, React, Sinatra, Active Record",
//         github_link: "https://github.com/JamesSalcedo001/front"
//     }

// either deploy site or leave out