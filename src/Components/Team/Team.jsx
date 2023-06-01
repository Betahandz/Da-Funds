import Header from "../Header/Header";
import './team.css';
import pic1 from './../../Assets/bg/pexels-kebs-visuals-3992656.jpg';
import pic2 from './../../Assets/bg/pexels-emmy-e-2381069.jpg';
import pic3 from './../../Assets/bg/pexels-buro-millennial-1438081.jpg';
import pic4 from './../../Assets/bg/pexels-edmond-dantès-4342400.jpg';
import pic5 from './../../Assets/bg/pexels-andrew-personal-training-697509.jpg';
import pic6 from './../../Assets/bg/pexels-teddy-joseph-2955375.jpg';
import pic7 from './../../Assets/bg/pexels-andrea-piacquadio-774909.jpg';
import pic8 from './../../Assets/bg/pexels-andrea-piacquadio-712513.jpg';

const teamData = [
    {id: 1, src: pic1, name: "Kebs Emma"},
    {id: 2, src: pic2, name: "Emmy Darell"},
    {id: 3, src: pic3, name: "Buro Millenial"},
    {id: 4, src: pic4, name: "Endmond Dantes"},
    {id: 5, src: pic5, name: "Andrew Matt"},
    {id: 6, src: pic6, name: "Mathew Murdock"},
    {id: 7, src: pic7, name: "Andrea Black"},
    {id: 8, src: pic8, name: "Adam Stones"}
]

const Profile = ({src, name, id}) => {
    return <div className="team-member-card shrink">
        <img src={src} alt={id} />
        <div className="overlay"></div>
        <h4 className="name">{name}</h4>
    </div>
}

const Team = () => {
    return <section className="team">
        <Header />
        <div className="teammates">
            {
                teamData.map(teammates => {
                    return <Profile
                        key={teammates.id}
                        {...teammates}
                    />
                })
            }
        </div>
    </section>
}

export default Team;