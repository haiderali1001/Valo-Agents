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
        "name": "Viper",
        "about": "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
        "photo": "./assets/agents/viper.png",
        "abilities": [
            {
                "name": "SNAKE BITE",
                "description": "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable."
            },
            {
                "name": "POISON CLOUD",
                "description": "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. ALT FIRE to lob. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED."
            },
            {
                "name": "TOXIC SCREEN",
                "description": "EQUIP a gas emitter launcher that penetrates terrain. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once."
            },
            {
                "name": "VIPER'S PIT",
                "description": "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that Nearsights players and Decays the health of enemies inside of it. HOLD the ability key to disperse the cloud early."
            }
        ]
    },
    {
        "name": "Cypher",
        "about": "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        "photo": "./assets/agents/cypher.png",
        "abilities": [
            {
                "name": "TRAPWIRE",
                "description": "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be Tethered, Revealed, and Concussed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED."
            },
            {
                "name": "CYBER CAGE",
                "description": "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it."
            },
            {
                "name": "SPYCAM",
                "description": "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED."
            },
            {
                "name": "NEURAL THEFT",
                "description": "INSTANTLY use on a targeted dead enemy to download information on their team. After a brief delay, the location of all living enemy players will be Revealed twice."
            }
        ]
    },
    {
        "name": "Breach",
        "about": "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
        "photo": "./assets/agents/breach.png",
        "abilities": [
            {
                "name": "AFTERSHOCK",
                "description": "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area."
            },
            {
                "name": "FLASHPOINT",
                "description": "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to Blind all players looking at it."
            },
            {
                "name": "FAULT LINE",
                "description": "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, Concussing all players in its zone and in a line up to the zone."
            },
            {
                "name": "ROLLING THUNDER",
                "description": "EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake Concusses and knocks up anyone caught in it."
            }
        ]
    },
    {
        "name": "Astra",
        "about": "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.",
        "photo": "./assets/agents/astra.png",
        "abilities": [
            {
                "name": "GRAVITY WELL",
                "description": "ACTIVATE a Stars Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable."
            },
            {
                "name": "NOVA PULSE",
                "description": "ACTIVATE a Stars Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, Concussing all players in its area."
            },
            {
                "name": "NEBULA / DISSIPATE",
                "description": "ACTIVATE a Stars Star to transform it into a Nebula (smoke).USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning."
            },
            {
                "name": "COSMIC DIVIDE",
                "description": "When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and sound."
            }
        ]
    },
    {
        "name": "Skye",
        "about": "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
        "photo": "./assets/agents/skye.png",
        "abilities": [
            {
                "name": "REGROWTH",
                "description": "EQUIP a healing trinket. HOLD FIRE to channel, Healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself."
            },
            {
                "name": "TRAILBLAZER",
                "description": "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a Concussive blast and damaging directly hit enemies."
            },
            {
                "name": "GUIDING LIGHT",
                "description": "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight."
            },
            {
                "name": "SEEKERS",
                "description": "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers."
            }
        ]
    },
    {
        "name": "Phoenix",
        "about": "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        "photo": "./assets/agents/phoenix.png",
        "abilities": [
            {
                "name": "BLAZE",
                "description": "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair."
            },
            {
                "name": "CURVEBALL",
                "description": "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and Blinding any player who sees the orb. ALT FIRE to curve the flare orb to the right."
            },
            {
                "name": "HOT HANDS",
                "description": "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies. ALT FIRE to lob."
            },
            {
                "name": "RUN IT BACK",
                "description": "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health and the amount of armor he had when the ability was cast."
            }
        ]
    },
    {
        "name": "Sova",
        "about": "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        "photo": "./assets/agents/sova.png",
        "abilities": [
            {
                "name": "OWL DRONE",
                "description": "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone."
            },
            {
                "name": "SHOCK BOLT",
                "description": "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow."
            },
            {
                "name": "RECON BOLT",
                "description": "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow."
            },
            {
                "name": "HUNTER'S FURY",
                "description": "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and Revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active."
            }
        ]
    },
    {
        "name": "Reyna",
        "about": "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        "photo": "./assets/agents/reyna.png",
        "abilities": [
            {
                "name": "SOUL HARVEST",
                "description": "Enemies that die to Reyna, or die within 3 seconds of taking damage from Reyna, leave behind Soul Orbs that last 3 seconds."
            },
            {
                "name": "LEER",
                "description": "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it."
            },
            {
                "name": "DEVOUR",
                "description": "INSTANTLY consume a nearby soul orb, rapidly Healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If Empress Empress is active, this skill will automatically cast and not consume the Soul Orb."
            },
            {
                "name": "EMPRESS",
                "description": "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities. When an enemy dies to Reyna, or dies within 3 seconds of taking damage from Reyna, the duration is renewed."
            }
        ]
    },
    {
        "name": "Killjoy",
        "about": "The genius of Germany, Killjoy effortlessly secures key battlefield positions with her arsenal of inventions. If their damage doesn't take her enemies out, the debuff her robots provide will make short work of them.",
        "photo": "./assets/agents/killjoy.png",
        "abilities": [
            {
                "name": "NANOSWARM",
                "description": "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ALT FIRE to lob. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots."
            },
            {
                "name": "ALARMBOT",
                "description": "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot."
            },
            {
                "name": "TURRET",
                "description": "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. ALT FIRE to swap turret direction. HOLD EQUIP to recall the deployed turret."
            },
            {
                "name": "LOCKDOWN",
                "description": "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies."
            }
        ]
    },
    {
        "name": "Kayo",
        "about": "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        "photo": "./assets/agents/kayo.png",
        "abilities": [
            {
                "name": "FRAG/MENT",
                "description": "EQUIP an explosive fragment. FIRE to throw. ALT FIRE to lob. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion."
            },
            {
                "name": "FLASH/DRIVE",
                "description": "EQUIP a flash grenade. FIRE to overhand throw. ALT FIRE to lob a weaker version that explodes quickly. The flash grenade explodes after a short fuse, Blinding anyone in line of sight."
            },
            {
                "name": "ZERO/POINT",
                "description": "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and Suppresses anyone in the radius of the explosion. Enemies can destroy this blade."
            },
            {
                "name": "NULL/CMD",
                "description": "INSTANTLY Overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are Suppressed for a short duration. While overloaded, KAY/O gains Combat Stim and can be re-stabilized if downed."
            }
        ]
    },
    {
        "name": "Chamber",
        "about": "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
        "photo": "./assets/agents/chamber.png",
        "abilities": [
            {
                "name": "TRADEMARK",
                "description": "EQUIP a trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED."
            },
            {
                "name": "HEADHUNTER",
                "description": "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights."
            },
            {
                "name": "RENDEZVOUS",
                "description": "EQUIP a teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED."
            },
            {
                "name": "TOUR DE FORCE",
                "description": "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it."
            }
        ]
    },
    {
        "name": "Neon",
        "about": "Filipino Agent, Neon, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        "photo": "./assets/agents/neon.png",
        "abilities": [
            {
                "name": "FAST LANE",
                "description": "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision."
            },
            {
                "name": "RELAY BOLT",
                "description": "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a Concussive blast."
            },
            {
                "name": "HIGH GEAR",
                "description": "INSTANTLY channel Neon's power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills."
            },
            {
                "name": "OVERDRIVE",
                "description": "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy."
            }
        ]
    },
    {
        "name": "Fade",
        "about": "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
        "photo": "./assets/agents/fade.png",
        "abilities": [
            {
                "name": "PROWLER",
                "description": "EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact."
            },
            {
                "name": "SEIZE",
                "description": "EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are Deafened, and Decayed."
            },
            {
                "name": "HAUNT",
                "description": "EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, Revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher."
            },
            {
                "name": "NIGHTFALL",
                "description": "EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are Marked by terror trails, Deafened, and Decayed."
            }
        ]
    },
    {
        "name": "Harbour",
        "about": "Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
        "photo": "./assets/agents/harbour.png",
        "abilities": [
            {
                "name": "CASCADE",
                "description": "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE-USE to stop the wave. Players hit are Slowed."
            },
            {
                "name": "COVE",
                "description": "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to lob. Upon impacting the ground, spawn a destructible water shield that blocks bullets."
            },
            {
                "name": "HIGH TIDE",
                "description": "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water's path. ALT FIRE while bending to stop the water early. Players hit are Slowed."
            },
            {
                "name": "RECKONING",
                "description": "EQUIP the full power of your Artifact. FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes. Players caught within a strike are Concussed."
            }
        ]
    },
    {
        "name": "Gekko",
        "about": "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
        "photo": "./assets/agents/gekko.png",
        "abilities": [
            {
                "name": "MOSH PIT",
                "description": "EQUIP Mosh. FIRE to throw Mosh like a grenade. ALT FIRE to lob. Upon landing Mosh duplicates across a large area that deals a small amount of damage over time then after a short delay explodes."
            },
            {
                "name": "WINGMAN",
                "description": "EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a Concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory."
            },
            {
                "name": "DIZZY",
                "description": "EQUIP Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded."
            },
            {
                "name": "THRASH",
                "description": "EQUIP Thrash. FIRE to link with Thrash's mind and steer her through enemy territory. ACTIVATE to lunge forward and explode, Detaining any players in a small radius."
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
        agentPhoto.css("opacity", "0");
        agentPhoto.css("transform", "translate(0, 32px)")
        setTimeout(() => {
            agentPhoto.attr("src", chosen.photo == '' ? placeholderAgent : chosen.photo);
        }, 200);
        setTimeout(() => {
            agentPhoto.css("opacity", "1");
            agentPhoto.css("transform", "translate(0, 0)")
        }, 300);
        agentName.text(chosen.name);
        agentDesc.text(chosen.about);

        let abilityTitles = document.querySelectorAll(".agent-ability h4");
        let abilityDescs = document.querySelectorAll(".agent-ability p");
        for (let i=0; i<4; i++) {
            abilityTitles[i].innerText = chosen.abilities[i].name;
            abilityDescs[i].innerText = chosen.abilities[i].description;
        }
    }
    setAgent();
})