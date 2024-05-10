import { about_me } from "./portfolioData"
function ProfileCard() {
    const {name, photo, bio, linkedIn, github, blog, resumePDF, email} = about_me
    return (
        <>
        <div id="top-profile-card">
            <img id="profile-image" src={photo} alt="my photo"/>
            <h1>{name}</h1>
            <p id="pf-bio">{bio}</p>
        </div>
        <div id="profile-card">
            <h2>Technical links!</h2>
            <a href={blog} className="button" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href={github} className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={resumePDF} className="button" target="_blank" rel="noopener noreferrer">Resume</a>

            <h2 id="contact-me">Contact me!</h2>
            {/* <a id="linkedin-tag" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            <a className="button" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <h2 id="email">Email</h2>
            <p>{email}</p>
        </div>
        </>
    )
}

export default ProfileCard;