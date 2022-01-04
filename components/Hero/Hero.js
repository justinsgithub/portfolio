import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Justin Angeles
            </SectionTitle>
            <hr />
            <br/>
            <SectionText>
                Born in Hawaii, raised in Alaska, and now call the PNW home. It has been an interesting ride finding the career field I want to settle in for the long run. Out of highschool I pursued a career in the fitness industry for years until realizing it wasn't the lifestyle a truly wanted to maintain forever. From there I switched to sales for a couple of years but was not satisfied selling products I didn't have any real part of creating. 

            <br/>
            <br/>
                About a year and half ago I stumbled into the tech industry during covid. My sales job changed things around and i started working from home. I got to spend alot of time with nice hardware and fast internet for the first time in my life, ( Alaska does not have the best internet ). I was dumbfounded by all the oppurtunity and free learning resources for developing software.

            <br/>
            <br/>

                I was was instantly hooked and knew I had found the fulfilling career that I had always been looking for. My work has always been my biggest pride and passion. I love maximizing productivity, efficiency, and the feeling of accomplishment. 
            </SectionText>
            <Button onClick={() => window.location = "/docs/resume.pdf"}>Resume</Button>
        </LeftSection>
    </Section>
);

export default Hero;
