import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionCard from "../components/SectionCard";

const HomePage = () => {
    // sections: hero, work, experience, about
    return (
        <>
            <Hero />
            <Section 
                id={"recent-work"} 
                title={"Recent work"} 
                headline={"Things I've done"}>
                
            </Section>
            <Section 
                id={"experience"} 
                title={"Experience"} 
                headline={"Places I've been"}>
                
            </Section>
            <SectionCard 
                id={"about-me"} 
                title={"About me"} 
                headline={"Thanks for checking out my work"}
                text={"I’ve been in the industry for 10 + years and have been lucky to work with some really cool people on some pretty awesome teams. Making aweosme digital experiences is something that I really love and I hope that comes across in my work. I also love learning new tools, techniques and ways of working. I’m always open for new work opportunities and collaboration, so feel free to reach out (or if you just wanna say hi)."}
                ></SectionCard>
        </>
    );
}

export default HomePage;