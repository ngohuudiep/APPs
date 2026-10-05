import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  
  // Trạng thái lưu trữ dữ liệu người dùng nhập vào
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');

  // Hàm xử lý sự kiện khi bấm nút Đăng nhập
const handleLogin = () => {
    if (name.trim() === '' || studentId.trim() === '') {
      window.alert('Vui lòng điền đầy đủ thông tin sinh viên!');
      return;
    }
    // Nếu đã điền đủ, thực hiện chuyển trang và gửi dữ liệu đi
    router.push({
      pathname: '/screen2' as any,
      params: { name: name, studentId: studentId }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* PHẦN CÁC KHỐI MÀU Ở TRÊN */}
        <View style={styles.boxesWrapper}>
          <View style={styles.row}>
            <View style={[styles.box, styles.box1]}><Text style={styles.numberText}>1</Text></View>
            <View style={[styles.box, styles.box2]}><Text style={styles.numberText}>2</Text></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box3]}>
              <Text style={[styles.numberText, { color: '#000000' }]}>3</Text>
            </View>
            <View style={[styles.box, styles.box4]}><Text style={styles.numberText}>4</Text></View>
            <View style={[styles.box, styles.box5]}><Text style={styles.numberText}>5</Text></View>
          </View>

          <View style={[styles.box, styles.box6]}><Text style={styles.numberText}>6</Text></View>
        </View>

        {/* LÒ XO ĐẨY FORM XUỐNG ĐÁY MÀN HÌNH */}
        <View style={styles.spacer} />

        {/* PHẦN FORM NHẬP THÔNG TIN Ở DƯỚI CÙNG */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Nhap thong tin sinh vien</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#A9A9A9"
            value={name}
            onChangeText={setName} // Liên tục cập nhật chữ vào biến name
          />
          
          <TextInput
            style={styles.input}
            placeholder="Enter your student ID"
            placeholderTextColor="#A9A9A9"
            value={studentId}
            onChangeText={setStudentId} // Liên tục cập nhật chữ vào biến studentId
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  boxesWrapper: {
    width: '100%',
    maxWidth: 400,
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
  row: { 
    flexDirection: 'row', 
    height: 100, 
    gap: 12 
  },
  box1: { backgroundColor: '#3585F3', flex: 1 }, 
  box2: { backgroundColor: '#FA4238', flex: 1 }, 
  box3: { backgroundColor: '#FFCC10', flex: 1 }, 
  box4: { backgroundColor: '#32A852', flex: 1 }, 
  box5: { backgroundColor: '#8A32DD', flex: 2 }, 
  box6: { backgroundColor: '#FE7A00', height: 100 }, 

  // Tạo khoảng trống đẩy form xuống
  spacer: {
    flex: 1,
  },

  formContainer: {
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    paddingBottom: 40, 
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000', 
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1, 
    borderColor: '#E0E0E0', 
    marginBottom: 20,
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#333333', 
  },
  button: {
    backgroundColor: '#FE7A00', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});