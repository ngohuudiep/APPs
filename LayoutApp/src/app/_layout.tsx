import { Stack } from 'expo-router';

export default function Layout() {
  return (
    // Dùng Stack và ẩn header để màn hình hoàn toàn trống, không có tab hay thanh tiêu đề
    <Stack screenOptions={{ headerShown: false }} />
  );
}