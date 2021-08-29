import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    // backgroundColor: 'green',
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
    // backgroundColor: 'orange'
  },
  date: {
    fontSize: 11,
  },
  detailContainer: {
    flexDirection: 'row',
    
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    // backgroundColor: 'blue'
  },
  bulletPoint: {
    
  },
  details: {
    fontSize: 10,

  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    // backgroundColor: 'red'
    
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
    
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'opensans-bold'
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};



const Experience = ({title, data}) => (
  <View style={styles.container}>
    <Title>{title}</Title>
    {data.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);

export default Experience;