import { useParams } from "react-router-dom";
const Articlepage = () => {
    const { title } = useParams();
    return (
        <div className="weather-preview article-page">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nulla sed nunc sollicitudin dictum.
                Vivamus rhoncus quam finibus, vulputate orci eu, euismod leo. Maecenas et finibus purus. Vivamus tincidunt
                libero id est vestibulum accumsan. Maecenas maximus molestie luctus. Etiam dapibus arcu tortor, sed condimentum
                magna accumsan vitae. Aenean sapien diam, vehicula eu rutrum sed, vestibulum at ipsum. Pellentesque nibh tellus, viverra a lacus sed, gravida tincidunt sapien.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer diam tellus,
                bibendum non quam vitae, euismod iaculis risus. Morbi suscipit sapien tortor, sed vestibulum eros condimentum at.
                Integer suscipit lorem blandit massa blandit, vitae accumsan velit pretium. Aliquam erat volutpat. Fusce purus turpis,
                ultricies eget neque in, tincidunt egestas ipsum. Maecenas sagittis ligula nec lectus placerat maximus eget a libero.
                Aenean a enim a nulla fermentum iaculis nec a nibh. Pellentesque lobortis eu mauris venenatis porta.
                Curabitur ut sem sit amet nisl tempor bibendum. Pellentesque ut leo dui. Sed elementum fermentum viverra. Suspendisse potenti.
                Quisque in ex id nibh tincidunt aliquet placerat vel erat. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Aliquam vel congue nulla. Donec efficitur lobortis porta. Phasellus dictum viverra erat id mattis.
                Etiam bibendum ultrices nisi, ac vulputate nisi pulvinar nec. Ut at tristique leo. Phasellus maximus metus ligula,
                et tincidunt leo cursus id. In vel dapibus tellus, vel molestie justo. Vivamus hendrerit porttitor ante, nec porta libero maximus id.</p>
            <p id="location">Warsaw</p>
        </div>
    );
}

export default Articlepage;