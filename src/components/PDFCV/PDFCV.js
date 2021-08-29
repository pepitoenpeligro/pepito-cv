import { Page, Text, Image, View, Document, StyleSheet, Font, Canvas } from '@react-pdf/renderer';

import './PDFCV.css';

import ProgressBar from './ProgressBar';

import Experience from './Experience';




Font.register({ family: 'opensans-bold', src: 'css/fonts/opensans/OpenSans-Bold-webfont.ttf' });

const cvStyle = StyleSheet.create({
    div1: {
        backgroundColor: '#1D2839',
        width: '36%',
        height: '100vh'
    },

    div2:{
        backgroundColor: '#fff',
        width: '64%',
        height: '100vh',
        right: 0        

    },
    profilePicRound:{
        paddingLeft: '17%',
        paddingRight: '17%',
        paddingTop: '6%',
        paddingBottom: '6%'
    },


    titleTextLeft: {
        textAlign: 'center',
        marginTop: '7%',
        color: '#2974E2',
        font: 'op',
        fontFamily: 'opensans-bold'

    },
    socialItemDiv: {
        fontSize: '10px',
        textAlign: 'right',
        color: 'white',
        paddingRight: '10%',
        alignItems: 'left'
    },
    githubIcon: {
        width: '22px',

        top: '50%',
        marginLeft: '8%',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '1px',
        paddingBottom: '1px'


    },
    linkedinIcon: {
        width: '18px',

        top: '50%',
        marginLeft: '8%',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '1px',
        paddingBottom: '1px'
    },
    trailheadIcon: {
        width: '26px',

        top: '50%',
        marginLeft: '7%',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '1px',
        paddingBottom: '1px'
    },

    divSkill: {
        fontSize: '10px',
        textAlign: 'left',
        color: 'white',
        paddingRight: '8%',
        alignItems: 'left',
        // paddingBottom: '-40px',
        marginBottom: '-34px'
    },

    picSpace: {
        height: '3%',
    },

    body: {
        backgroundImage: "url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')"
    }
    ,wrapper:{
        display: 'flex',
        flexDirection: 'row',
    }










});







const PDFCV = (props) => {

    const educationData = [
        {
          company: 'Computer Science Degree',
          date: '2014 - 2019',
          details: [
            'Granada University - Universidad de Granada, Granada, Spain • 2014-2019',
          ],
          position: '',
        },
        {
          company: 'Computer Science Degree - Erasmus+',
          date: '2019 - 2020',
          details: [
            'Ostfalia - University of Applied Sciences (Erasmus+)',
          ],
          position: '',
        },
        {
          company: 'Master\'s Degree in Computer Engineering',
          date: '2020 - 2021',
          details: [
            'Granada University - Universidad de Granada, Granada, Spain (Final work still to be presented)',
          ],
          position: '',
        }
      ];

      const experienceData = [
        {
            company: 'Classgap | Programming teacher',
            date: '2016 - 2017',
            details: [
              'Class troubleshooting in C++, Java and Python',

              'Creation of static web pages.',
              
              'Processing and p5.js exercises.',
              
              'SQL queries',
            ],
            position: '',
          },

          {
            company: 'Superprof | Programming teacher',
            date: '2017 - 2019',
            details: [
                'Private classes for the development of native Android (Android Studio and Eclipse) and iOS (Xcode) mobile applications.',

                'Development of Java applications, with Swing and JavaFX. Web Application Development with Java E2EE, JSF, Spring, Hibernate.',
                
                'Deployment and cloud configurations (EC2, EMR, Lambda, Puppet, Ansible, OpenStack).',
                
                'Design, Administration and Maintenance of MySQL, PostgreSQL and MongoDB databases.',
                
                'Creating neural networks with Tensorflow',
                
                'Containerisation (Docker) of applications and work environments.',
                
                'Integration and continuous deployment tools (Github Actions, Jenkins, CircleCI, Drone).',
            ],
            position: '',
          },
      ]



    const page1 = (

        <Page size="A4" style={[ ]} >

            <View style={[cvStyle.wrapper]}>
            <View style= {[cvStyle.div1]}>
                
                <View style={cvStyle.picSpace}></View>
                <Image src="images/pic-rounded.png" style={cvStyle.profilePicRound}></Image>

                <Text style={cvStyle.titleTextLeft}>Contact</Text>
                <View style={cvStyle.socialItemDiv}>
                    <Image src="images/github_blue.png" style={cvStyle.githubIcon} ></Image>
                    <Text>{props.data.SPANISH && props.data.SPANISH.general.github}</Text>
                </View>

                <View style={cvStyle.socialItemDiv}>
                    <Image src="images/linkedin_blue.png" style={cvStyle.linkedinIcon}></Image>
                    <Text>{props.data.SPANISH && props.data.SPANISH.general.linkedin}</Text>
                </View>

                <View style={cvStyle.socialItemDiv}>
                    <Image src="images/trailhead_blue.png" style={cvStyle.trailheadIcon}></Image>
                    <Text>{props.data.SPANISH && props.data.SPANISH.general.trailhead}</Text>
                </View>
                <View>
                    <Canvas style={[{ paddingBottom: '17px' }]}
                        paint={painter =>
                            painter
                                .moveTo(40, 40)
                                .lineTo(160, 40)
                                .fill('lightgray')
                        }
                    />

                </View>



                <View>
                    <Text style={[cvStyle.titleTextLeft, { marginTop: '10px', marginBottom: '10px' }]}>Tech & Soft Skills</Text>
                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Java</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Javascript</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill} >
                        <Text style={{ top: '10px', left: '20px' }}>SQL/NoSQL</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Docker</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>GitHub</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>AWS / Azure</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Android</Text>
                        <ProgressBar value={70} />
                    </View>


                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>iOS</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>React</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Critical Thinking</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Communication</Text>
                        <ProgressBar value={60} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Problem Solving</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Empathy</Text>
                        <ProgressBar value={80} />
                    </View>


                </View>

            </View>
            
            <View  style={[cvStyle.div2]}>
                <Text style={{position:'absolute', top:'35px', fontSize: 22, left: '35px', color: 'white', fontFamily: 'opensans-bold', zIndex: '-1'}}>José Antonio Córdoba</Text>
                <Text style={{position:'absolute', top:'65px', fontSize: 14, left: '32px', color: 'white', fontFamily: 'opensans-bold', zIndex: '-1'}}>Software Engineer, DevOps</Text>
                <Image src={'images/fondo.png'} style={{zIndex: '1'}}></Image>

                <Experience style={[{paddingTop: '40px'}]} title={'Education'} data={educationData}></Experience>
                <Experience style={[{}]} title={'Experience'} data={experienceData}></Experience>
            </View>
            </View>
        </Page>
    )


    return (
        
        <Document>
            {page1}
        </Document>

    );
}


export default PDFCV;