import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  select: {
    
    height: '9%',
    alignItems: 'right',
    flexDirection: 'row',
    paddingHorizontal: '60px',
    right: '-55px'
  },
  bar: {
    flexGrow: 1,
    height: '10px',
    backgroundColor: 'white',
  },
  barMiddle: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    margin: 'auto',
  },
  progress: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    position: 'absolute',
    backgroundColor: '#3BC5FF',
  },
  filler:{
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 'inherit',
  }
  
});

const Progress = ({ value }) => (
  <View style={[styles.progress, { width: `${value - 3}%` }]}>
    <Text style={{ fontSize: 8, marginTop: 4 }}></Text>
  </View>
);

const ProgressBar = props => (
  <View style={styles.select}>

    <View style={styles.bar}>

      <Progress {...props} />
    </View>

  </View>
);

export default ProgressBar;