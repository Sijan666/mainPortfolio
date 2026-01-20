import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Computer, Monitor } from 'lucide-react'
import { FaRegStopCircle } from 'react-icons/fa'
import { BsCameraVideo } from 'react-icons/bs'
import { FiActivity, FiCoffee } from 'react-icons/fi'
import { PiMusicNotesSimpleBold, PiPenNibStraightBold, PiWatchBold } from 'react-icons/pi'
import { LiaCubeSolid } from 'react-icons/lia'
import { LuBook, LuTarget } from 'react-icons/lu'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

const Hobbies = () => {
    return (
        <>
        <div className="py-[95px] bg-[#0F172B]">
            <Container>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>Hobbies & Expertise</h3>
                    <p className='text-[#90A1B9] text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>
                <div className="pt-[60px]">
                    <Flex className={'justify-between gap-x-7.5'}>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <Monitor className='-rotate-45'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px] '>Developing</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <FaRegStopCircle className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Mac OS</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <BsCameraVideo className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Cinema</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <FiCoffee className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Coffee</p>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
                <div className="pt-7.5">
                    <Flex className={'justify-between gap-x-7.5'}>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2.5 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <PiMusicNotesSimpleBold className='-rotate-45 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px] '>Music</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2.5 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <PiWatchBold className='-rotate-45 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Games</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <LiaCubeSolid className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Designing</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <LuTarget className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Sports</p>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
                <div className="pt-7.5">
                    <Flex className={'justify-between gap-x-7.5'}>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2.5 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <PiPenNibStraightBold className='rotate-90 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px] '>Painting</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2.5 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <LuBook  className='-rotate-45 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Reading</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <MdOutlinePhoneAndroid  className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Android</p>
                                </div>
                            </Flex>
                        </div>
                        <div className="py-3 pr-3 pl-3 w-70 bg-transparent rounded-lg shadow-newMade border border-slate-800 overflow-hidden group">
                            <Flex className={'gap-x-5'}>
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300">
                                    <FiActivity  className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Other Activity</p>
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

export default Hobbies