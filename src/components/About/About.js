const About = (props) => {

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={process.env.PUBLIC_URL + '/images/pic.jpeg'} alt="profilepic"/>
                </div>
                <div className="nine columns main-col">
                {/* {JSON.stringify(props)} */}
                    <h2>About Me</h2>
                    <span>{props.data.SPANISH && props.data.SPANISH.about.description}</span><br />
                    <br/>
                    <br/>

                    <h2>Contact Details</h2>
                            <p>You can request my phone number through my LinkedIn profile</p>

                    {/* <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p>You can request my phone number through my LinkedIn profile</p>
                        </div>
                        
                    </div> */}
                </div>
            </div>

        </section>
    )
}




export default About;