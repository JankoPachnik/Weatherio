const Smallcard = ({title, icon, data}) => {
    return (
        <div className="small-cards">
            <h4>{icon} {title}</h4>
            <p>{data}</p>
        </div>
    );
}

export default Smallcard;