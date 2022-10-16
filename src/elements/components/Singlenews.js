import {Link} from "react-router-dom";

const Singlenews = (news) => {
    return (
        <div className="news">
            <Link to={`/article/${news.news.title}`} style={{ textDecoration: 'none' }}>
                <img src={require('../../images/noimage.png')} alt="Avatar"/>
                <div className="news-text">
                    <h4><b>{news.news.title}</b></h4>
                    <p id="text">{news.news.sampletext}</p>
                    <p id="author">{news.news.location}</p>
                </div>
            </Link>
        </div>
    )
}

export default Singlenews;
