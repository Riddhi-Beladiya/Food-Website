import React from 'react'
import Benner from '../components/Homecomponents/Benner'
import Items from '../components/Homecomponents/Items'
import OrderFood from '../components/Orderfood'
import AboutUs from '../components/Homecomponents/AboutUs'
import Dishes from '../components/Homecomponents/Dishes'
import Menu from '../components/Menu'
import Offer from '../components/Homecomponents/Offer'
import Itemslider from '../components/Homecomponents/itemslider'
import ClientReview from '../components/Homecomponents/ClientReview'
import LatestFood from '../components/Homecomponents/LatestFood'

const HomePage = () => {
  return( 
  <>

    <div className='overflow-hidden pt-10'>
      <Benner/>
    </div>

    <div>
      <Items />
    </div>

    <div>
      <OrderFood/>
    </div>

    <div>
      <AboutUs />
    </div>

    <div>
      <Dishes />
    </div>

    <div>
      <Menu />
    </div>

    <div>
      <Itemslider />
    </div>

    <div>
      <Offer />
    </div>

    <div>
      <ClientReview />
    </div>

    <div>
      <LatestFood />
    </div>
  </>
  )
}

export default HomePage