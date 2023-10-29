const agentsData = [
    {
        "name": "Raze",
        "about": "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
        "photo": "./assets/agents/Raze.png",
        "abilities": [
            {
                "name": "BOOM BOT",
                "description": "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them."
            },
            {
                "name": "BLAST PACK",
                "description": "Agent 1's Ability 2 description here."
            },
            {
                "name": "PAINT SHELLS",
                "description": "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills."
            },
            {
                "name": "SHOWSTOPPER",
                "description": "EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything."
            }
        ]
    },
    {
        "name": "Omen",
        "about": "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        "photo": "./assets/agents/omen.png",
        "abilities": [
            {
                "name": "SHROUDED STEP",
                "description": "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location."
            },
            {
                "name": "PARANOIA",
                "description": "EQUIP a blinding orb. FIRE to throw it forward, briefly Nearsighting and Deafening all players it touches. This projectile can pass straight through walls."
            },
            {
                "name": "DARK COVER",
                "description": "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view."
            },
            {
                "name": "FROM THE SHADOWS",
                "description": "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or PRESS EQUIP for Omen to cancel his teleport."
            }
        ]
    },
    {
        "name": "Sage",
        "about": "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        "photo": "./assets/agents/sage.png",
        "abilities": [
            {
                "name": "BARRIER ORB",
                "description": "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter."
            },
            {
                "name": "SLOW ORB",
                "description": "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that Slows players caught inside of it."
            },
            {
                "name": "HEALING ORB",
                "description": "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a Heal-Over-Time on them. ALT FIRE while Sage is damaged to activate a self Heal-Over-Time."
            },
            {
                "name": "RESURRECTION",
                "description": "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health."
            }
        ]
    },
    {
        "name": "Brimstone",
        "about": "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
        "photo": "./assets/agents/brim.png",
        "abilities": [
            {
                "name": "STIM BEACON",
                "description": "INSTANTLY toss down a stim beacon. Upon landing, it creates a field that grants players a Combat Stim and a Speed Boost."
            },
            {
                "name": "INCENDIARY",
                "description": "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone."
            },
            {
                "name": "SKY SMOKE",
                "description": "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area."
            },
            {
                "name": "ORBITAL STRIKE",
                "description": "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area."
            }
        ]
    },
    {
        "name": "Yoru",
        "about": "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        "photo": "./assets/agents/yoru.png",
        "abilities": [
            {
                "name": "FAKEOUT",
                "description": "EQUIP an echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo. USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a Blinding Flash when destroyed by enemies."
            },
            {
                "name": "BLINDSIDE",
                "description": "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface."
            },
            {
                "name": "GATECRASH",
                "description": "EQUIP a rift tether. FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport."
            },
            {
                "name": "DIMENSIONAL DRIFT",
                "description": "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early."
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    },
    {
        "name": "",
        "about": "",
        "photo": "",
        "abilities": [
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            },
            {
                "name": "",
                "description": ""
            }
        ]
    }
]

function setCssStyles(element, styles) {
    for (const [property, value] of Object.entries(styles)) {
        element.style.setProperty(property, value);
    }
}

function node(tagname, attributes, children, cssStyle) {
    if (!tagname) return;
    let node = document.createElement(tagname);

    if (attributes != null) {
        for (const key of Object.keys(attributes)) {
            switch (key) {
                case "cl": case "class": {
                    node.className = attributes[key]; break;
                }
                case "id": {
                    node.id = attributes[key]; break;
                }
                case "iText": case "innerText": {
                    node.innerText = attributes[key]; break;
                }
                case "iHTML": case "innerHTML": {
                    node.innerHTML = attributes[key]; break;
                }
                case "src": {
                    node.src = attributes[key]; break;
                }
                case "href": {
                    node.href = attributes[key]; break;
                }
                case "alt": {
                    node.alt = attributes[key]; break;
                }
                case "height": {
                    node.height = attributes[key]; break;
                }
                case "width": {
                    node.width = attributes[key]; break;
                }
                case "target": {
                    node.target = attributes[key]; break;
                }
                default: {
                    break;
                }
            }
        }
    }
    if (children != null) {
        for (const child of children) {
            node.appendChild(child);
        }
    }
    if (cssStyle != null) {
        setCssStyles(node, cssStyle);
    }
    return node;
}

$(document).ready(function () {
    const sidebar = $("aside.agents-list");
    const agentPhoto = $(".agent-photo");
    const agentName = $(".agent-name");
    const agentDesc = $(".agent-description");
    const agentAbilities = $(".agent-abilities");
    const placeholderAgent = "./assets/agents/placeholder-agent.png"

    let chosen = agentsData[0];
    for (const agent of agentsData) {
        if (agent.name == '') agent.name = "Untitled";
        let agentItem = node("div", {cl: "agent-item"}, [
            node("span", {cl: "marker-line"}),
            node("span", {cl: "agent-item-name", innerText: agent.name})
        ]);
        agentItem.addEventListener('click', () => {
            chosen = agent;
            $(".agent-item").removeClass("selected")
            agentItem.classList.add("selected");
            setAgent(agentItem);
        })
        
        sidebar.append(agentItem);
    }
    $(".agent-item:first").addClass("selected");

    function setAgent() {
        agentPhoto.attr("src", chosen.photo == '' ? placeholderAgent : chosen.photo)
        agentName.text(chosen.name);
        agentDesc.text(chosen.about);
        
        for (const ability of chosen.abilities) {
            let abilityDiv = node("div", {
                cl: "agent-ability"
            }, [
                node("h4", {innerText: ability.name}),
                node("p", {innerText: ability.description}),
            ]);

            agentAbilities.append(abilityDiv);
        }
    }
    setAgent();
})