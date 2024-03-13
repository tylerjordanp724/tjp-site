import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionCard from "../components/SectionCard";
import { work } from "../data";

const HomePage = () => {
    // sections: hero, work, experience, about
    return (
        <>
            <Hero />
            <Section 
                id={"recent-work"} 
                title={"Recent work"} 
                headline={"Things I've done"}>
                <div className="list">
                    {work.map((workItem, i) => {
                        const categories = workItem.categories.join(" \xa0\ / \xa0\ ");
                        return (
                            <div className="item" key={`list-item-${i}`}>
                                <div className="item__col">
                                    <span className="item__label">{`${workItem.year} \xa0| \xa0 ${categories}`}</span>
                                    <h3 className="item__title">{workItem.title}</h3>
                                </div>
                                <div className="item__col">
                                    <p className="item__desc">
                                        {workItem.desc}
                                    </p>
                                </div>
                                <div className="item__col">
                                    <a className="btn" href={workItem.url}>Visit site</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
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