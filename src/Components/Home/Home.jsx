import Header from "../Header/Header";
import { landingData } from "../../Assets/Databox/Data";
import './home.css';
import { useEffect, useState } from "react";

const Videocase = ({src, show}) => {
    return <video className={show} src={src} autoPlay muted loop />
}

const Heading = ({headline, show, goto}) => {
    return (
        <>
            <h1 className={`d-t ${show}`}>
                {headline}
            </h1>
            <p className={`emp ${show}`}>
                {goto}
            </p>
        </>
    )
}

const Pointers = ({show}) => {
    return <span className={`pointer ${show}`}></span>
}

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        let max = landingData.length - 1;
        let interval = setInterval(() => {
            setIndex(index => {
                let num = index + 1;
                return num > max ? 0 : num;
            })
        }, 5000);

        return () => clearInterval(interval);
    }, [index])

    return (
        <section className="home">
            <Header />
            <div className="video-box">
                {
                    landingData.map((data, dataIndex) => {
                    return    <Videocase 
                            key={data.id} 
                            src={data.src}
                            show={dataIndex === index ? "show-video" : null}
                        />
                    })
                }
            </div>
            <div className="overlay">
                <div className="detail">
                    {
                        landingData.map((title, titleIndex) => {
                            return <Heading 
                                key={title.id}
                                headline={title.headline}
                                goto={title.goto}
                                show={titleIndex === index ? "show" : null}
                            />
                        })
                    }
                </div>
                <div className="video-counter">
                    {landingData.map((pointer, pointIndex) => <Pointers
                        key={pointer.id}
                        show={pointIndex === index ? "show" : null}
                    />)}
                </div>
            </div>
        </section>
    )
}

export default Home;