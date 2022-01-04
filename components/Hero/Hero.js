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
            Born in Hawaii, raised in Alaska, and now call the PNW home. It has been an interesting ride finding the career field I want to settle in for the long run. Out of highschool I pursued a career in the fitness industry for years until realizing it wasn't the lifestyle a truly wanted to maintain forever. From there I switched to sales for a couple of years but was not satisfied selling products I didn't have any real part of creating. About a year and half ago I stumbled into the tech industry trying to start an online business and found it's exactly the career I have always been looking for. I love maximizing productivity, efficiency, and the feeling of accomplishment. 
            </SectionText>
            <Button onClick={() => window.location = "/docs/resume.pdf"}>Resume</Button>
        </LeftSection>
    </Section>
);

export default Hero;
