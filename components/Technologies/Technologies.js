import React from 'react';
import { DiFirebase, DiReact, DiRuby } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I have experience in a range of domains, but I lean towards backend / server-side development. I love learning new technologies and have learned to practice keeping an open mind about all life topics in general. My biggest mentor is Paul Check, founder of the Chek Institute.
        </SectionText>

        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front End</ListTitle>
                    <ListParagraph>
                        Vue <br />
                        React
                    </ListParagraph>
                </ListContainer>
            </ListItem>

            <ListItem>
                <DiRuby size="3rem" />
                <ListContainer>
                    <ListTitle>Back End</ListTitle>
                    <ListParagraph>
                        Python <br />
                        Ruby <br />
                        NodeJS
                    </ListParagraph>
                </ListContainer>
            </ListItem>

            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Other</ListTitle>
                    <ListParagraph>
                        Shell Scripting <br />
                        MongoDB
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>

    </Section>
);

export default Technologies;
