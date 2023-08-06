import React from 'react'
import HomeImg from '../components/homeImage/HomeImg'
import ExpePage from '../components/Exp-Page/Expe-page'
import AdvPage from '../components/Adv-Page/AdvPage'
import Project from '../components/Project/Project'
import Sale from '../components/Sale&Team/Sale'
import Footerpage from '../components/Footer/Footer'




function HomePage() {
  return (
    <div>
 <HomeImg/>
<ExpePage/> 
<AdvPage/>
<Project/>
<Sale/>
<Footerpage/>
    </div>
  )
}

export default HomePage