import { useState, useEffect } from "react";
import { Skill } from "./";
import { devSkills } from "../../constants/skills";

const Skills = () => {

    const [javaScript, setJavaScript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [tailwind, setTailwind] = useState(0);
    const [react, setReact] = useState(0);

    const skillData = [
        {
            id: 1,
            setSkill: setJavaScript,
            number: 65,
        },
        {
            id: 2,
            setSkill: setHtml,
            number: 92,
        },
        {
            id: 3,
            setSkill: setCss,
            number: 82,
        },
        {
            id: 4,
            setSkill: setBootstrap,
            number: 95,
        },
        {
            id: 1,
            setSkill: setTailwind,
            number: 95,
        },
        {
            id: 5,
            setSkill: setReact,
            number: 82,
        },
    ];


    useEffect(() => {
        const timer = setInterval(() => {

            skillData.map(({ setSkill, number }) => {
                setSkill((oldProgress) => {
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, number);
                });
            });

        }, 100);

        return () => {
            clearInterval(timer);
        }
    }, [])

    const {
        htmlSkill,
        cssSkill,
        jsSkill,
        reactSkill,
        BootstrapSkill,
        TailwindsSkill,
    } = devSkills;

    return (
        <>
            <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html} />
            <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css} />
            <Skill
                name={BootstrapSkill.name}
                icon={BootstrapSkill.icon}
                color={BootstrapSkill.color}
                value={bootstrap} />
            <Skill
                name={TailwindsSkill.name}
                icon={TailwindsSkill.icon}
                color={TailwindsSkill.color}
                value={tailwind} />
            <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={javaScript} />
            <Skill
                name={reactSkill.name}
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={react} />
        </>
    )
}

export default Skills;