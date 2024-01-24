import React from "react";
import "./FicheInfos.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";



const FicheInfos = ({ apartment }) => {
    // information sur les données des appartements
    const { title, location, tags, host, rating } = apartment;

    //  la notation  des appartements
    const ratedStars = () => {
        const fullStars = Math.floor(rating);
        const remainingStars = 5 - fullStars;

        const stars = [];

        for (let i = 1; i <= fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faSolidStar} className="star-active" />);
        }

        for (let i = 1; i <= remainingStars; i++) {
            stars.push(<FontAwesomeIcon key={fullStars + i} icon={faSolidStar} className="star-inactive" />);
        }

        return stars;
    };

    return (
        <div className="ficheContainer">
            <div className="fiche1">
                <div className="infos">
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <div key={index} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fiche2">
                <div className="hosts">
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name} className="img-fiche"/>
                </div>
                <div className="rating">{ratedStars()}</div>{" "}
            </div>
        </div>
    );
};

export default FicheInfos;
