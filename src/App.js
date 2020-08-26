import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Slideshow from './components/Slideshow'
import Video from './components/Video'
import FAQ from './components/FAQ'
import './css/App.min.css'

function App() {
  /* init data variables & set dummy data */
  // const [menuItems, setMenuItems] = useState([{id:1,href:'/',text:'Logo',hex:null,isDropdown:false},{id:2,href:'#',text:'About us',hex:'#36fd9d',isDropdown:true},{id:3,href:'#',text:'What we do',hex:'#ff1668',isDropdown:false},{id:4,href:'/team',text:'Meet the team',hex:'#8FC93A',isDropdown:false},{id:5,href:'/news',text:'News',hex:'#E4CC37',isDropdown:false},{id:6,href:'/careers',text:'Careers',hex:'#6DB1D4',isDropdown:false},{id:7,href:'/contact',text:'Contact us',hex:'#8FC93A',isDropdown:false},{id:8,href:'#',text:'Menu',hex:null,isDropdown:false}])
  const [menuItems, setMenuItems] = useState([{id:1,href:'/',text:'Logo',hex:null,isDropdown:false},{id:2,href:'#',text:'About us',hex:'#ff1668',isDropdown:true},{id:3,href:'#',text:'What we do',hex:'#ff1668',isDropdown:false},{id:4,href:'/team',text:'Meet the team',hex:'#ff1668',isDropdown:false},{id:5,href:'/news',text:'News',hex:'#ff1668',isDropdown:false},{id:6,href:'/careers',text:'Careers',hex:'#ff1668',isDropdown:false},{id:7,href:'/contact',text:'Contact us',hex:'#ff1668',isDropdown:false},{id:8,href:'#',text:'Menu',hex:null,isDropdown:false}])
  const [heroData, setHeroData] = useState({title:`Here is a title`,excerpt:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisi a dui porttitor posuere.`,CTAButtonText:`CTA BUTTON`})
  const [aboutPost, setAboutPost] = useState({title:`Here is a title`,excerpt:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisi a dui porttitor posuere.`,body:`<p>Praesent congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla effecitur in. Donec eros est, varius ut nibh in.</p><p>Hendrerit pharetra orci. Vivamus orci urna, dictum sed orci mattis, eleifend varius ante. Sed tincidunt risus ac maximus feugiat. Ut lobortis tortor sed orci varius euismod. Vestibulum convallis, ex non egestas maximus, lectus mauris vestibulum.</p>`})
  const [slideshowData, setSlideshowData] = useState({posts:[{body:`Praesent id congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla efficitur in. Donec eros est, varius ut nibh in. Hendrerit pharetra orci. Vivamus orci urna, dictum sed orci mattis, eleifend varius ante.`,author:`Name / Role / Company`},{body:`Praesent id congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla efficitur in. Donec eros est, varius ut nibh in. Hendrerit pharetra orci. Vivamus orci urna, dictum sed orci mattis, eleifend varius ante.`,author:`Name / Role / Company`},{body:`Praesent id congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla efficitur in. Donec eros est, varius ut nibh in. Hendrerit pharetra orci. Vivamus orci urna, dictum sed orci mattis, eleifend varius ante.`,author:`Name / Role / Company`}]})
  const [videoData, setVideoData] = useState({title:`This is your video title`,src:`/Users/andy/Desktop/clicky/src/images/jordan-mcqueen-99269-unsplash.jpg`})
  const [FAQData, setFAQData] = useState({h2:`Here is a title`,posts:[{id:1,title:`Accordian Topic One`,content:`Praesent congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla effecitur in. Donec eros est, varius ut nibh in.`},{id:2,title:`Accordian Topic Two`,content:`Praesent congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla effecitur in. Donec eros est, varius ut nibh in.`},{id:3,title:`Accordian Topic Three`,content:`Praesent congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla effecitur in. Donec eros est, varius ut nibh in.`},{id:4,title:`Accordian Topic Four`,content:`Praesent congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla effecitur in. Donec eros est, varius ut nibh in.`},{id:5,title:`Accordian Topic Five`,content:`Praesent congue magna. Duis vitae fermentum sem, id dignissim augue. Nullam ullamcorper nibh magna, et lacinia nulla effecitur in. Donec eros est, varius ut nibh in.`}]})

  /* WordPress API calls could be made here to replace dummy data */
  
  return (
    <div>
      <Header menuItems={menuItems} />
      <Hero heroData={heroData} />
      <About aboutPost={aboutPost} />
      <Slideshow slideshowData={slideshowData} />
      <Video videoData={videoData} />
      <FAQ FAQData={FAQData} />
    </div>
  );
}

export default App;
