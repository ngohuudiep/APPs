import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* PHẦN CÁC KHỐI MÀU Ở TRÊN */}
        <View style={styles.boxesWrapper}>
          
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.numberText}>1</Text>
          </View>

          <View style={[styles.box, styles.box2]}>
            <Text style={styles.numberText}>2</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box3]}>
              <Text style={[styles.numberText, { color: '#000000' }]}>3</Text>
            </View>
            <View style={[styles.box, styles.box4]}>
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={styles.numberText}>5</Text>
            </View>
            <View style={styles.emptyBox} />
          </View>

          <View style={[styles.box, styles.box6]}>
            <Text style={styles.numberText}>6</Text>
          </View>

        </View>

        {}
        <View style={styles.spacer} />

        {}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Ngô Hữu Điệp - BIT240060</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,

  },
  boxesWrapper: {
    gap: 12,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4, 
  },
  numberText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  
  box1: {
    backgroundColor: '#3585F3', 
    height: 75,
  },
  box2: {
    backgroundColor: '#FA4238', 
    height: 75,
  },
  
  row: {
    flexDirection: 'row',
    height: 162, 
    gap: 12, 
  },
  box3: {
    backgroundColor: '#FFCC10',
    flex: 1, 
    height: '100%',
  },
  box4: {
    backgroundColor: '#32A852',
    flex: 1,
    height: '100%',
  },
  box5: {
    backgroundColor: '#8A32DD',
    flex: 1,
    height: '100%',
  },
  emptyBox: {
    flex: 1, 
  },

  box6: {
    backgroundColor: '#FE7A00', 
    height: 162, 
  },

  spacer: {
    flex: 1,
  },

  footer: {
    alignItems: 'center', 

    paddingBottom: 30, 
  },
  footerText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#333333',
  },
});