import React from 'react';
// 1. Import thêm công cụ Image từ react-native
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Screen2() {
  const router = useRouter();
  const { name, studentId } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          {/* 2. Thay thế Text bằng Image */}
          <Image 
            // Đường dẫn này lùi lại 2 thư mục (../../) để tìm đến thư mục assets chứa ảnh
            source={require('../../assets/images/back-button.png')}
            style={styles.backIcon} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Thông tin sinh viên</Text>
        
        <Text style={styles.infoText}>Name: {name}</Text>
        <Text style={styles.infoText}>Student ID: {studentId}</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  header: {
    padding: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    // Đã xóa màu nền cam (backgroundColor) để icon hiển thị trong suốt tự nhiên
    padding: 5,
  },
  // 3. Thêm style để điều chỉnh kích thước icon ảnh
  backIcon: {
    width: 40,  // Chiều rộng ảnh (bạn có thể tăng giảm tùy ý)
    height: 40, // Chiều cao ảnh
    resizeMode: 'contain', // Đảm bảo ảnh không bị méo tỷ lệ
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    paddingBottom: 100,       
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});