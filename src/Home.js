import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='Home'>
       <div className="home_container">
           <img 
           className='home_image' 
           src={"./amazon_banner2.gif"} alt="..Loading" />

           <div className="home_row">
               <Product 
               id="123456"
               title='The lean startup: How constant Innovation 
               create Radical Success starterpack' 
               price={29.99}
                image="./leanStartup.jpg" 
                rating={5} />

               <Product
               id="4456432"
               Product title="INDO ERA Women's Pure Cotton Solid Straight Kurta Palazzo With Dupatta" 
               price={239.99}
                image="./cute.jpg" 
                rating={5} />
               
           </div>

           <div className="home_row">
                <Product 
                id="890654"
                title='The Bennett Mystic 15.6 inch Laptop 
                Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue) startup' 
                price={499.00}
                 image="./bluebag.jpg" 
                 rating={5} />

                <Product 
                id="123457"
                title='The iQOO Z5 5G (Arctic Dawn, 8GB RAM, 128GB Storage)
                 | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge startup' 
                price={20990.00}
                 image="./iqoo.jpg" 
                 rating={4} />

                <Product
                id="567543"
                title='The Garmin Forerunner 
                35 Watch, Frost Blue startup' 
                price={15000.99}
                 image="./garmin.jpg" 
                 rating={3} />

           </div>

           <div className="home_row">
                <Product 
                id="567543"
                title='The 
                Kindle (10th Gen), 6" Display
                 with Built-in Light,WiFi (Black) Forerunner 
                35 Watch, Frost Blue startup' 
                price={7199.99}
                 image="./amish.jpg" 
                 rating={5} />
           </div>

       </div>
    </div>
  )
}

export default Home