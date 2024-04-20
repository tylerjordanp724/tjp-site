import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionCard from "../components/SectionCard";
import { work, places, links } from "../data";

const HomePage = () => {
    return (
        <div className="page-content">
            <Hero />
            <Section 
            id={"recent-work"} 
            title={"Recent work"} 
            headline={"Things I've done:"}>
                <div className="list">
                    {work.map((workItem, i) => {
                        const categories = workItem.categories.join("\xa0 /\xa0 ");
                        return (
                            <div className="item" key={`list-item-${i}`}>
                                <div className="item__col">
                                    <span className="item__label">{`${workItem.year} \xa0|\xa0 ${categories}`}</span>
                                    <h3 className="item__title">{workItem.title}</h3>
                                </div>
                                <div className="item__col">
                                    <p className="item__desc">
                                        {workItem.desc}
                                    </p>
                                </div>
                                <div className="item__col">
                                    <Button text={"Visit site"} href={workItem.url} target="_blank" rel="noreferrer"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
            <Section 
            id={"experience"} 
            title={"Experience"} 
            headline={"Places I've been:"}>
                <div className="list">
                    {places.map((placeItem, i) => {
                        const tags = placeItem.tags.join(", ");
                        return (
                            <div className="item" key={`list-item-${i}`}>
                                <div className="item__col">
                                    <span className="item__label">{`${placeItem.year} \xa0 |\xa0 ${tags}`}</span>
                                    <h3 className="item__title">{placeItem.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
            <SectionCard 
            id={"about-me"} 
            title={"About me"} 
            headline={"Thanks for checking out my work"}
            text={"I’ve been in the industry for 10 + years and have been priveleged to be part of some teams that do really good work and I've learned a lot in the process. Creating fun and interesting  digital experiences is something that I really enjoy and I hope that comes across in my work. I'm  also eager to learn new tools, techniques and ways of working. I’m always open for new work opportunities and collaboration, so feel free to reach out (even if you just wanna say hi)."}
            >
                <ul className="link-list">  
                    {links.map((link, i) => {
                            return (
                                <li key={`link-${i}`}><a href={link.href} target="_blank" rel="noreferrer">{link.title}</a></li>
                            );
                        })
                    }
                </ul>
            </SectionCard>
        </div>
    );
}

export default HomePage;