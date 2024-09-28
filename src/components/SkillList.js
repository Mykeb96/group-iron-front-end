import Construction from '../Assets/images/Construction Icon.png'
import Attack from '../Assets/images/Attack icon.png'
import Cooking from '../Assets/images/Cooking icon.png'
import Crafting from '../Assets/images/Crafting icon.png'
import Defence from '../Assets/images/Defence icon.png'
import Farming from '../Assets/images/Farming icon.png'
import Firemaking from '../Assets/images/Firemaking icon.png'
import Fishing from '../Assets/images/Fishing icon.png'
import Fletching from '../Assets/images/Fletching icon.png'
import Herblore from '../Assets/images/Herblore icon.png'
import Hitpoints from '../Assets/images/Hitpoints icon.png'
import Hunter from '../Assets/images/Hunter icon.png'
import Magic from '../Assets/images/Magic icon.png'
import Mining from '../Assets/images/Mining icon.png'
import Prayer from '../Assets/images/Prayer icon.png'
import Ranged from '../Assets/images/Ranged icon.png'
import Runecraft from '../Assets/images/Runecraft icon.png'
import Slayer from '../Assets/images/Slayer icon.png'
import Smithing from '../Assets/images/Smithing icon.png'
import Strength from '../Assets/images/Strength icon.png'
import Thieving from '../Assets/images/Thieving icon.png'
import Woodcutting from '../Assets/images/Woodcutting icon.png'
import Agility from '../Assets/images/Agility icon.png'
import Image from 'next/image'

import { useEffect, useState } from 'react'

export function SkillList({ player, index })
{
    const [loading, setLoading] = useState(true)

    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 15;

    function isTotalLevel(skill)
    {
        if (skill.name == 'Overall') return true
        else return false
    }

    const skills = {
        Construction: Construction,
        Attack: Attack,
        Cooking: Cooking,
        Crafting: Crafting,
        Defence: Defence,
        Farming: Farming,
        Firemaking: Firemaking,
        Fishing: Fishing,
        Fletching: Fletching,
        Herblore: Herblore,
        Hitpoints: Hitpoints,
        Hunter: Hunter,
        Magic: Magic,
        Mining: Mining,
        Prayer: Prayer,
        Ranged: Ranged,
        Runecraft: Runecraft,
        Slayer: Slayer,
        Smithing: Smithing,
        Strength: Strength,
        Thieving: Thieving,
        Woodcutting: Woodcutting,
        Agility: Agility
    }

    let target1 = document.querySelectorAll('.skill-list-component')[0]
    let target2 = document.querySelectorAll('.skill-list-component')[1]
    let target3 = document.querySelectorAll('.skill-list-component')[2]
    let target4 = document.querySelectorAll('.skill-list-component')[3]
    let target5 = document.querySelectorAll('.skill-list-component')[4]

    useEffect(() => {
        setLoading(false)
      },[])
      
    useEffect(() => {
        if (!loading)
        {
            target1 = document.querySelectorAll('.skill-list-component')[0]
            target2 = document.querySelectorAll('.skill-list-component')[1]
            target3 = document.querySelectorAll('.skill-list-component')[2]
            target4 = document.querySelectorAll('.skill-list-component')[3]
            target5 = document.querySelectorAll('.skill-list-component')[4]
        }

    }, [loading])

    function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
      
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    
        if (currentTarget.id == "component0") target1.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        if (currentTarget.id == "component1") target2.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        if (currentTarget.id == "component2") target3.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        if (currentTarget.id == "component3") target4.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        if (currentTarget.id == "component4") target5.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        
      }
      
    function resetStyles(e) {
        target1.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        target1.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

        target2.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        target2.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

        target3.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        target3.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

        target4.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        target4.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

        target5.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        target5.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
    
    if (!motionMatchMedia.matches && target1 && target2 && target3 && target4 && target5) {
    target1.addEventListener("mousemove", handleHover);
    target1.addEventListener("mouseleave", resetStyles);

    target2.addEventListener("mousemove", handleHover);
    target2.addEventListener("mouseleave", resetStyles);

    target3.addEventListener("mousemove", handleHover);
    target3.addEventListener("mouseleave", resetStyles);

    target4.addEventListener("mousemove", handleHover);
    target4.addEventListener("mouseleave", resetStyles);

    target5.addEventListener("mousemove", handleHover);
    target5.addEventListener("mouseleave", resetStyles);
    }

    return (
        <div className="skill-list-component" id={`component${index}`}>
            <span className='player-name'>{player.name}</span>
            <div id="skill-list-container">
                {player.skills.map((skill, key) => 
                    <div id="skill" key={key} style={isTotalLevel(skill) ? {flexDirection: 'column'} : {}}>
                        <Image width={30} src={skills[skill.name]}/>
                        {isTotalLevel(skill) ? <span className="total-level">Total Level</span> : null}
                        <span style={isTotalLevel(skill) ? {margin: 0} : {}}>{skill.level}</span>
                    </div>
                )}
            </div>
        </div>
    )
}