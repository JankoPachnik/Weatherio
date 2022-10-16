import Singlenews from "./components/Singlenews";

const Newstable = () => {
    const exampleNews = [{title: "Huricane on Pacific", sampletext: "Lorem ipsum dolor sit amet", location: "Los Angeles"},
        {title: "Avalanche!", sampletext: "Lorem ipsum dolor sit amet", location: "Alps"},
        {title: "Hurricane", sampletext: "Lorem ipsum dolor sit amet", location: "Pacific Ocean"},
        {title: "Mealstrom", sampletext: "Lorem ipsum dolor sit amet", location: "Australia"},
        {title: "Blizzard", sampletext: "Lorem ipsum dolor sit amet", location: "Moskow"},
        {title: "Tornado", sampletext: "Lorem ipsum dolor sit amet", location: "Warszawa"},]

    return (
        <div id="news-table">
            {
                exampleNews.map(news =>
                    <Singlenews news={news}/>
                )
            }
        </div>
    )
}

export default Newstable;