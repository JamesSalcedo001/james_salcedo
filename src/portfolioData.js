import resumePDF from "./James_Salcedo_Resume (current).pdf"
import profilePhoto from "./Screen Shot 2023-12-03 at 8.10.16 PM.png";
import sweetBanditImage from "./images/Screen Shot 2024-05-07 at 5.58.52 PM.png"


const about_me = {
    name: "James Salcedo",
    email: "jamesa.salcedo3@gmail.com",
    photo: profilePhoto,
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
        live_site: "https://sweet-bandit.onrender.com/"
    }
]

export { about_me, project_data };





