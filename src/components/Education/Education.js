const Education = (props) => {

    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">

                            {props.data.SPANISH && props.data.SPANISH.education.map((eduItem) =>

                                <div key={eduItem.id}>
                                    <h3>{eduItem.concept}</h3>
                                    <p className="info">{eduItem.school}
                                        <span>&bull;</span>
                                        <em className="date">{eduItem.years}</em>
                                    </p>
                                    <p>{eduItem.description}</p>
                                    <br />
                                    <br />
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col">
                    {props.data.SPANISH && props.data.SPANISH.works.map((work) =>

                        <div key={work.id}>
                            <h3>{work.concept}</h3>
                            <p className="info">{work.school}
                                <span>&bull;</span>
                                <em className="date">{work.years}</em>
                            </p>
                            <p style={{ whiteSpace: "pre-line" }}>{work.description}</p>
                            <br />
                            <br />
                        </div>

                    )}
                </div>
            </div>



            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                    <div className="bars">
                        <ul className="skills">
                            {props.data.SPANISH && props.data.SPANISH.skills.map((skillItem) =>

                                <li key={skillItem.name} >
                                    <span style={{ width: skillItem.level }} className={'bar-expand '+skillItem.name.toLowerCase()}></span>
                                    <em>{skillItem.name}</em>
                                </li>

                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Education;