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
    {id: 1, src: pic1, title: "lorem" },
    {id: 2, src: pic2, title: "lorem2"},
    {id: 3, src: pic3, title: "lorem3"},
    {id: 4, src: pic4},
    {id: 5, src: pic5},
    {id: 6, src: pic6},
    {id: 7, src: pic7},
    {id: 8, src: pic8}
]

const Profile = ({src, title, id}) => {
    return <div className="team-member-card shrink">
        <img src={src} alt={id} />
        {/* <h4 className="name">{title}</h4> */}
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