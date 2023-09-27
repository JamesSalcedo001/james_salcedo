import { about_me } from "./portfolioData"

function ProfileCard() {
    const {name, photo, bio, linkedIn, github, blog, resumePDF, email} = about_me
    return (
        <div id="profile-card">
            <img id="profile-image" src={photo} alt="my photo"/>
            <h1>{name}</h1>
            <p>{bio}</p>
            <h5>Technical links!</h5>
            <a href={blog} className="button" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href={github} className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={resumePDF} className="button" target="_blank" rel="noopener noreferrer">Resume</a>

            <h5>Contact me!</h5>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <h5>Email: {email}</h5>
        </div>
    )
}

export default ProfileCard;