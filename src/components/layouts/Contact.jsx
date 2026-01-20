import React, { useRef } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import Button from '../Button'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y315zst', 'template_2u72gov', form.current, 'y7o7ZXi1gyIaKWOLJ')
        .then(
            () => {
                console.log('SUCCESS!');
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert("Something went wrong. Please try again.");
            },
        );
    };


    return (
        <>
        <div className="py-25 bg-[#1D293D]">
            <Container>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>Get In Touch !</h3>
                    <p className='text-[#90A1B9] text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>
                <div className="mt-15">
                    <Flex className={'gap-x-15'}>
                        <div className="left w-[60%] bg-[#0F172B] p-6 shadow-newMade rounded-md">
                            <form ref={form} onSubmit={sendEmail}>
                            <div className="flex justify-between gap-x-4 pb-5">
                                <input type="text" name="user_name" required placeholder='Name :' className='w-full border border-[#1E2939] p-2 text-[#90A1B9] outline-none rounded-sm focus:border-[#FE9A00]'/>
                                <input type="email" name="user_email" required placeholder='Email :' className='w-full border border-[#1E2939] p-2 text-[#90A1B9] outline-none rounded-sm focus:border-[#FE9A00]'/>
                            </div>
                            <input type="text" placeholder='Subject :' className='w-full border border-[#1E2939] p-2 text-[#90A1B9] outline-none rounded-sm focus:border-[#FE9A00] mb-5'/>
                            <textarea rows={'5'} name="message" cols={'5'} placeholder='Message :' className='w-full border border-[#1E2939] p-2 text-[#90A1B9] outline-none rounded-sm focus:border-[#FE9A00]'></textarea>
                            <Button btnText={'Send Message'} className={'mt-5'} type="submit" value="Send"/>
                            </form>
                        </div>
                        <div className="right">
                            <Flex className={'gap-x-4 items-start'}>
                                <LuPhone className='text-white text-[20px] mt-1'/>
                                <div className="">
                                    <p className='font-medium text-[17px] text-white pb-2'>Phone</p>
                                    <p className='text-[#90A1B9] text-[15px]'>+152 534-468-854</p>
                                </div>
                            </Flex>
                            <Flex className={'gap-x-4 items-start pt-4'}>
                                <MdOutlineMail  className='text-white text-[20px] mt-1'/>
                                <div className="">
                                    <p className='font-medium text-[17px] text-white pb-2'>Email</p>
                                    <p className='text-[#90A1B9] text-[15px]'>contact@example.com</p>
                                </div>
                            </Flex>
                            <Flex className={'gap-x-4 items-start pt-4'}>
                                <SlLocationPin  className='text-white text-[20px] mt-1'/>
                                <div className="">
                                    <p className='font-medium text-[17px] text-white pb-2'>Location</p>
                                    <p className='text-[#90A1B9] text-[15px]'>C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Contact