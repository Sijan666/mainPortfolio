import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import bannerImg from '../../assets/bannerImg.png'
import Button from "../Button"


const Banner = () => {
    return (
        <>
        <div className="bg-[#0F172B] relative">
            <div className="absolute inset-0 bg-[#FE9A00]/5 opacity-50"></div>
            <Container className={'relative z-10'}>
                <Flex className={'justify-between'}>
                    <div className="leftSide">
                        <h1 className="font-bold text-[40px] text-white pb-0.5">Hey! I'm Majharul Islam</h1>
                        <h2 className="text-[#FE9A00] font-bold text-[40px]">Front-End Web Developer</h2>
                        <p className="text-[15px] text-[#90A1B9] py-[15px]">A passionate Full-Stack Developer from Bangladesh . Always curious to learn, explore, and collaborate.</p>
                        <Button btnText={'Hire Me'}/>
                        <Button btnText={'Download CV'} className={'ml-2'}/>
                    </div>
                    <div className="rightSide">
                        <Images imgSrc={bannerImg}/>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Banner



// import Container from "../Container"
// import Flex from "../Flex"
// import Images from "../Images"
// import bannerImg from '../../assets/bannerImg.png'
// import Button from "../Button"
// // এই লাইনটি মিসিং ছিল 👇
// import { Typewriter } from 'react-simple-typewriter' 

// const Banner = () => {
//     return (
//         <>
//         <div className="bg-[#0F172B] py-15">
//             <Container>
//                 <Flex className={'justify-between items-center'}> {/* items-center দিলে ইমেজ আর টেক্সট সোজাসুজি থাকবে */}
//                     <div className="leftSide w-1/2"> {/* w-1/2 দিলে লেআউট সুন্দর হবে */}
                        
//                         {/* ভিডিওর মতো লুক পেতে h1 বা স্টাইল ব্যবহার করুন */}
//                         <h1 className="text-4xl font-bold text-white mb-4">
//                             Hey! I'm <br />
//                             <span className="text-[#FFB400]"> {/* হাইলাইট কালার */}
//                                 <Typewriter
//                                     words={['Front-End Web Developer', 'Majharul Islam']}
//                                     loop={true}
//                                     cursor
//                                     cursorStyle='|'
//                                     typeSpeed={70}
//                                     deleteSpeed={50}
//                                     delaySpeed={1000}
//                                 />
//                             </span>
//                         </h1>

//                         <p className="text-[15px] text-[#90A1B9] py-[15px] pr-20">
//                             Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.
//                         </p>
                        
//                         <div className="mt-4">
//                             <Button btnText={'Hire Me'}/>
//                             <Button btnText={'Download CV'} className={'ml-4'}/>
//                         </div>
//                     </div>
                    
//                     <div className="rightSide w-1/2">
//                         <Images imgSrc={bannerImg}/>
//                     </div>
//                 </Flex>
//             </Container>
//         </div>
//         </>
//     )
// }

// export default Banner
