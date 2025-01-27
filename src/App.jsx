import { useState } from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالميلي ثانية
      offset: 50,     // المسافة التي يبدأ عندها الأنيميشن
    });
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
