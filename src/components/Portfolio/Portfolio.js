const Portfolio = (props) => {
    return (
        <section id="portfolio">

            <div className="row">

                <div className="twelve columns collapsed">

                    <h1>Some of my open source projects</h1>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {props.data.SPANISH && props.data.SPANISH.projects.map((proyectItem) =>

                            <div key={proyectItem.title} className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href={proyectItem.url} title={proyectItem.title}>
                                        <img alt={proyectItem.title} src={'images/portfolio/'+proyectItem.image} />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>{proyectItem.title}</h5>
                                                <p>{proyectItem.category}</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="fa fa-link"></i></div>
                                    </a>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Portfolio;