import { about_me } from "./portfolioData"

function ProfileCard() {
    const {name, photo, bio, linkedIn, github, blog} = about_me
    return (
        <div>
            <h1>{name}</h1>
            <img id="profile-image" src={photo} alt="my photo"/>
            <p>{bio}</p>
            <a href={linkedIn}>LinkedIn</a>
            <a href={blog}>Technical Blog</a>
            <a href={github}>GitHub</a>
        </div>
    )
}

export default ProfileCard;