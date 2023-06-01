import './sponsor.css';

const Sponsor = ({title, onClick}) => {
    return(
        <div className="sponsor-box" onClick={onClick}>
            <h1 className="s-t">{title}</h1>
        </div>
    )
}

export default Sponsor;