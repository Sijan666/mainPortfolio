import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import orebi from '../../assets/orebi.png'
import portfolio from '../../assets/portfolio.png'
import game from '../../assets/game.png'
import Images from '../Images';

const Projects = () => {
    return (
        <section id="projects" className="py-[95px] bg-[#0F172B]">
            <Container>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>My Work & Projects</h3>
                    <p className='text-[#90A1B9] text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>

                <Flex className="justify-between gap-x-10 mt-15">
                    {/* project 1 start */}
                    <div className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="h-60 overflow-hidden relative">
                            <Images imgSrc={orebi} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE9A00] duration-300">
                                E-Commerce Website
                            </h3>
                            <p className="text-gray-400 mb-6 h-[45px]">
                                A fully functional online store where you can view products.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">React</span>
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">Context API</span>
                            </div>
                            <a href="https://ui-addedin-orebi.vercel.app/" className="text-white font-semibold text-sm hover:text-[#FE9A00] duration-300">Live Preview</a>
                        </div>
                    </div>
                    {/* project 1 end */}
                    {/* project 2 start */}
                    <div className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="h-60 overflow-hidden relative">
                            <Images imgSrc={portfolio} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE9A00] transition-colors">
                                Portfolio
                            </h3>
                            <p className="text-gray-400 mb-6 h-[45px]">
                                A modern landing page for Ui/Ux Designer.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">JavaScript</span>
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">jQuery</span>
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">Tailwind</span>
                            </div>
                            <a href="https://ui-addedin-orebi.vercel.app/" className="text-white font-semibold text-sm hover:text-[#FE9A00] duration-300">Live Preview</a>
                        </div>
                    </div>
                    {/* project 2 end */}
                    {/* project 3 start */}
                    <div className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="h-60 overflow-hidden relative">
                            <Images imgSrc={game} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE9A00] transition-colors">
                                Number Guessing Game
                            </h3>
                            <p className="text-gray-400 mb-6 h-[45px]">
                                A simple funny game for entertainment.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">JavaScript</span>
                                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">Tailwind</span>
                            </div>
                            <a href="https://ui-addedin-orebi.vercel.app/" className="text-white font-semibold text-sm hover:text-[#FE9A00] duration-300">Live Preview</a>
                        </div>
                    </div>
                    {/* project 3 end */}
                </Flex>
                {/* 'See More' Button */}
                <div className="text-center mt-16">
                    <a 
                        href="https://github.com/sijan666" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 border border-[#FE9A00] text-[#FE9A00] font-bold rounded hover:bg-[#FE9A00] hover:text-white transition-all duration-300"
                    >
                        View All Projects
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Projects;