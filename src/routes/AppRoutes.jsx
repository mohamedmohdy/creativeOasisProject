import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Activity from '../pages/Activity'
import Contact from '../pages/Contact'
import AppLayout from '../shared/AppLayout'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <AppLayout>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Services' element={<Services />}/>
                <Route path='/Prices' element={<Activity  />}/>
                <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </AppLayout>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
