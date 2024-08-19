import '../Styles/rootStyle.css'
import profileImg from '../Images/headshot.jpg'
import coolImg from '../Images/cool-img.jpg'

export default function Root() {
    return (
        <div className="container">
            <h1>Devin Diaz</h1>
            <div className="image-container">
                <img className="profile-img" src={profileImg} alt="devin"/>
                <img className="cool-img" src={coolImg} alt="devin"/>
            </div>
            <p>
                Hi there! I'm a third-year Computer Science student at Framingham State University with a strong passion for 
                technology and software development. While my primary focus has been on full-stack development, I've recently 
                developed an interest in robotics programming.
            </p>
            <p>
                I'm excited to explore both fields as I continue to grow my skills. My goal is to leverage my software engineering 
                expertise while diving deeper into robotics, seeking internships that allow me to contribute to innovative projects 
                in either domain.
            </p>
            <p>
                Outside of my studies, I have a deep love for soccer and a dream to travel the world, 
                visiting famous soccer stadiums across different countries. This goal drives me to 
                work hard in my studies, not only because I'm passionate about what I'm learning but also because I 
                want to make this dream a reality.
            </p>

        </div>
    )
}
