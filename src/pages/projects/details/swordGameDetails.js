import React, {useState} from 'react';
import { Button, Collapse } from 'react-bootstrap';
import swordGameSample from '../../../videos/swordGameSample.webm';

function PageText() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <p><i>Untitled Sword Game</i> was my second project after <i>Pipe Hacker</i>, and was significantly more complex. I love platformers and had recently been playing lots of <i>Sekiro</i> and was crazy about its posture mechanic, so I thought I'd take a stab (ahem) at implementing it myself.</p>

            <p>If you're not familiar, you can think of posture as a complex HP-like mechanic which is intended to abstract how "in control" a combatant is during the fight.  It has a lot of moving parts, and its behavior depends on the character's HP as well as their defensive state (idle, blocking, or parrying).</p>

            <Button 
            className="mb-4"
            variant="outline-light" 
            size="sm" 
            onClick={() => setOpen(!open)}
            aria-controls="posture-description"
            aria-expanded={open}
            >
                Click here for an in-depth explanation!
            </Button>
            <Collapse in={open}>
                <ul id="posture-description">
                    <li>
                        Everything that has a health bar also has a posture bar.  When a character that's taken posture damage isn't being attacked, their posture will begin to regenerate after a short delay.
                    </li>
                    <li>
                        Posture regeneration slows as a character's health drops. At full health, most characters will recover to full posture in a few seconds, but as they get below 50%, recovery virtually stops.
                    </li>
                    <li>
                        A character that reaches 0 posture is <i>posture broken</i> and can't act for a few seconds.  If the player attacks an enemy that's posture broken, the enemy is executed instantly regardless of their health.  
                    </li>
                    <li>
                        In this demo, if the player's posture is broken they die immediately; in a "full version" of the game it would just stun them temporarily and leave them vulnerable to additional attacks.
                    </li>
                    <li>
                        Getting hit damages both health and posture.  Blocking an attack prevents the health damage, but the attack will still deal posture damage and can break posture.
                    </li>
                    <li>
                        If a character begins blocking at exactly the moment of the incoming hit, the attack is parried instead of blocked. A parried attack deals no health damage, deals posture damage to the target but can't cause a posture break, and also deals posture damage back to the attacker.
                    </li>
                </ul>
            </Collapse>
            
            <p>All the physics, movement, and combat mechanics were done custom from scratch. This project used some free art assets and animations I found online; I did draw the little target dummy myself though.</p>

            <h2>What I learned making this</h2>
            <ul>
                <li>Unity's new input system (it's really nice!)</li>
                <li>Unity events</li>
                <li>Physics, raycasting, layers and collisions</li>
                <li>Animations and animation events</li>
                <li>Tilemaps and tilemap colliders</li>
            </ul>
            <h2>Details I'm proud of</h2>
            <ul>
                <li>
                    The movement code and player controller in this project feels great; I spent a lot of time tweaking it and am very happy with the result.
                </li>
                <li>
                    The implementation I ended up with of the complicated attack interactions is very cool; essentially, there's an <code>AttackData</code> struct which holds all the different damage values and is used as a parameter for custom Unity events, which deal different damage to the character depending on what state they were in when the attack impacted.
                </li>
            </ul>
            <h2>What I'd change now</h2>
            <ul>
                <li>
                    When I started this project I thought to myself "Oh, I don't need to make my player controller a finite state machine, that's just a bunch of unnecessary work."  I did in fact need to make my player controller into a finite state machine.
                </li>
                <li>
                    The addition of some particles or other effect on a successful parry would increase the readability of the combat significantly.
                </li>
            </ul>
        </>
    )
}

const swordGameDetails = {
    title: "Untitled Sword Game",
    sourceLink: "https://github.com/jpople/untitled-sword-game",
    playLink: "https://auartic.itch.io/untitled-sword-game",
    videoLink: swordGameSample,
    pageText: <PageText />,
}

export default swordGameDetails;