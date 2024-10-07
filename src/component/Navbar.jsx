import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdArrowDropleft } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
         <div>
        {/* <div className='bd-[#fff] h-[70px] text-black flex justify-between items-center pl-[60px]'> */}
        <div className='bg-[#fff] text-black  flex justify-between  items-center pl-[60px] h-[100px]'>
        <div style={{marginTop:"8px"}}>
            <img src="https://www.signaturewrite.com/s/sig/index.php?name=hadia&f=155" width={160} ></img>
        </div>
        <div>
          <ul className='flex gap-4 pt-6' style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>
            <il>Home</il>
            <il>About us</il>
            <il>Service</il>
            <il>Bolgs</il>
          </ul>
        </div>
        <div>
        <Button className='mr-5'  variant="outline-danger">GIFT FINDER</Button>{' '}
        </div>
      </div>
    </div>
   
    <div className='flex h-[770px]  bg-stone-100 '>
       
       <div className='mt-20 ml-40 mr-60'>
       <p className='text-[39px] font-semibold ' >Find a gift for</p>
           <p className='text-[39px] font-semibold leading-[30px]'>your wife or</p>
           <p className='text-[39px] font-semibold leading-0'> girlfriend</p>
         <p className='pt-6'>Struggling to find a gift for  wife or girlfriend ? No problem! </p>
         <div>
         <button className=' bg-amber-500 text-white rounded-[4px] h-[40px] w-[140px] mr-3 mt-9'>FIND GIFT NOW</button>
       </div>
       </div>
    
      <div> <img  src='https://www.boundless.org/wp-content/uploads/2023/09/4-things-every-boyfriend-needs-652d625983609.webp' height={"970px"} width={"1060px"} />
      </div>
   </div>
   <div className='flex h-[500px]  bg-stone-100 mt-[-318px] '>
   <div> <img  src='https://i.etsystatic.com/5507759/r/il/360458/1990018100/il_570xN.1990018100_1gmg.jpg' height={"900px"} width={"670px"} />
   </div>
       
       <div className='mt-20 ml-40 mr-40 mb-60'>
          <p className='text-[39px] font-semibold '>How we work</p>
             
            <p className='pt-6'>We've actually already asked hundrad of women <br/>
                
             what they want, and made a database with the <br/> result  . all you have to do is take our short survey<br/>
                
              that only takes seconds, and  our propritary <br/> algorithm,  will match you with  a few prefect  <br/> gift option.  </p>
            <div>
            
          </div>
      
         <div>
         <button className=' text-black rounded-[4px] h-[40px]  w-[140px] mr-3 mt-9 hover:bg-blue 
bg-white-300 text-black py-2  rounded hover:bg-orange-500 transition duration-300'  style={{border:"1px solid orange",marginTop:"30px"}}>LEARN MORE</button>
       </div>
       </div>
    
      {/* <div> <img  src='https://cdn2.momjunction.com/wp-content/uploads/2022/10/Things-to-say-to-your-girlfriend.jpg.webp' height={"770px"} />
      </div> */}
   </div>
   <div style={{paddingTop:"10px",paddingBottom:"30px"}}>
    <h1 className='text-3xl font-bold ' style={{textAlign:"center" ,marginTop:"40px",paddingTop:"20px"}}>Gift for all occasions</h1>
    <p style={{textAlign:"center"}}>try our web app to find the best Gift for all occasions</p>
   </div>
   <div style={{display:"flex" ,justifyContent:"center",gap:"15px"}}>
   <Card style={{ width: '18rem' ,border:"none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/04/42/62/12/360_F_442621279_PYhie13pVGcSSYTAm1eqlC3e7Lcy0oNV.jpg" />
      <Card.Body>
        <Card.Title>Birthday</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"white",color:"black",border:"none",display:"flex",marginLeft:"-10px"}}>See More  <IoMdArrowDropleft style={{marginTop:"5px"}} /></Button>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,border:"none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/003/031/475/small_2x/happy-anniversary-banner-template-with-gold-lettering-vector.jpg" style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>Birthday</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"white",color:"black",border:"none",display:"flex",marginLeft:"-10px"}}>See More  <IoMdArrowDropleft style={{marginTop:"5px"}} /></Button>
       
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem',border:"none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9w9JLo6WXwh-SGf4E0YIfTiPr1QnpKl9blQ&s" style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>Birthday</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"white",color:"black",border:"none",display:"flex" ,marginLeft:"-10px"}}>See More  <IoMdArrowDropleft style={{marginTop:"5px"}} /></Button>
       
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem',border:"none" ,boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
 }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/merry-christmas-wallpaper-design_79603-2129.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727740800&semt=ais_hybrid" style={{height:"200px"}}/>
      <Card.Body>
        <Card.Title>Birthday</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"white",color:"black",border:"none",display:"flex",marginLeft:"-10px"}}>See More  <IoMdArrowDropleft style={{marginTop:"5px"}} /></Button>
       
      </Card.Body>
    </Card>
   </div>
  
   <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"orange", marginTop:"150px",height:"150px"}}>
    <div style={{marginTop:"50px"}}>
    <h5 className=' font-bold ' style={{textAlign:"center"}}>Ready to get started?</h5>
   
    <p style={{fontWeight:"bold"}}>Sign-up or contact us</p>
   </div>
    <div style={{marginTop:"30px"}}>
    <button className=' bg-black text-white rounded-[4px] h-[40px] w-[140px] mr-3 mt-9'>FIND GIFT NOW</button>
    <button className=' text-black rounded-[4px] h-[40px]  w-[140px] mr-3 mt-9 hover:bg-blue 
bg-white-300 text-black py-2  rounded hover:bg-orange-500 transition duration-300'  style={{border:"1px solid black",marginTop:"30px"}}>LEARN MORE</button>
    </div>
  
    </div>
    <div>
    <h4  style={{textAlign:"center" ,marginTop:"40px"}}>Our best blogs ever</h4>
    <p style={{textAlign:"center"}}>try our best blogs to find the best tips and tricks to select your gifts</p>
   </div>
   <div>
       
        <div>
          <div className=' h-[290px] w-[1000px] ml-40 mt-16 flex bg-[#0a0703] text-white '>
            <img src='https://burst.shopifycdn.com/photos/bride-groom-love.jpg?width=1000&format=pjpg&exif=0&iptc=0' height={"300px"} width={"383px"} />
             <div className='mt-10 ml-20'>
             <p>Mr. John Doe</p>
             <h2 className='text-[37px] font-semibold  pt-4' > The best way to wish <br/> your wife</h2>
             <p className='pt-[40px]'>Read More</p>
             </div>
          </div>
        </div>
           
    </div>

    <div className='flex items-center mt-10 ml-40 mr-40 '>
          <div className='border-black  h-[230px] w-[450px] ml-8' style={{boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px"}}>
            <p className='pt-4 pl-6 font-extrabold text-1xl leading-2 pr-7 '>Database to find the gift for your <br /> girlfriend</p>
            <p className='pt-3 pl-6 text-[14px] leading-2 pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Quaerat vel similique dolorem alias ab modi consequuntur....</p>
            <p className='pt-6 pl-6 text-[15px]'>See more</p>
          </div>
          <div className='border-black  h-[230px] w-[450px] ml-9' style={{boxShadow: "rgba(0, 0, 0, 0.0) 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px -1px 19px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 11px, rgba(0, 0, 0, 0.01) 0px -3px 2px"}}>
            <p className='pt-4 pl-6 font-extrabold text-1xl leading-2 pr-7'>How  Artifical  Intelligance read your mind<br />to find the best gift  </p>
            <p className='pt-3 pl-6 text-[14px] leading-2 pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Quaerat vel similique dolorem alias ab modi consequuntur....</p>
            <p className='pt-6 pl-6 text-[15px]'>See more</p>
          </div>
        </div>
        <div className=' bg-stone-100 h-[300px]' >

       
        <div       style={{display:"flex",justifyContent:"center",marginTop:"100px" }}>
          <ul className='flex gap-3 pt-6' style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>
            <il style={{marginLeft:"40px"}}>Home</il>
            <il  >About us</il>
            <p style={{paddingLeft:"300px",paddingRight:"300px" ,marginTop:"-70px"}}>
            <img src="https://cdn.freebiesupply.com/logos/large/2x/brakeman-logo-png-transparent.png" width={140}></img>
            </p>
            <il >Service</il>
            <il>Bolgs</il>
          </ul>
        
         
        </div>
        <hr className='mt-10 ml-40 mr-40'></hr>
        <div className='flex items-start justify-center mt-10 gap-3'>
<FaFacebook style={{fontsize:"30px"}}/>
<AiFillTwitterCircle style={{fontsize:"30px"}}/>
<FaSquareInstagram style={{fontsize:"25px"}}/>
<FaYoutube style={{fontsize:"25px"}}/>
<FaPinterest style={{fontsize:"25px"}}/>

        </div>
        <div className='text-[15px] mt-10 flex justify-center items-center'>
         @2010-2020 < b className='pl-1 ' > Privacy-terms</b>
       </div> 
       </div>
      
 
     
      
    </div>
    
  )
}

export default Navbar
