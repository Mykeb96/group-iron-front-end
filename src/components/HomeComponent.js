import { useState, useEffect } from 'react'
import { SkillList } from './SkillList';

// import api from '../Axios/Client';


export default function HomeComponent()
{
    const [players, setPlayers] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //    api.get('https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=GreenFish41')
    //     .then(res => {
    //         setPlayers((prevPlayers) => [...prevPlayers, {name: 'GreenFish41', skills: res.data.skills}])
    //     })
    //     .catch(err => console.log(err))

    //     api.get('https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=xMyke%20B')
    //     .then(res => {
    //         setPlayers((prevPlayers) => [...prevPlayers, {name: 'xMyke B', skills: res.data.skills}])
    //     })
    //     .catch(err => console.log(err))

    //     api.get('https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=raw%20glizzies')
    //     .then(res => {
    //         setPlayers((prevPlayers) => [...prevPlayers, {name: 'raw glizzies', skills: res.data.skills}])
    //     })
    //     .catch(err => console.log(err))

    //     api.get('https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=GIM%20Emoney')
    //     .then(res => {
    //         setPlayers((prevPlayers) => [...prevPlayers, {name: 'GIM Emoney', skills: res.data.skills}])
    //     })
    //     .catch(err => console.log(err))

    //     api.get('https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=Glizzieloaf')
    //     .then(res => {
    //         setPlayers((prevPlayers) => [...prevPlayers, {name: 'Glizzieloaf', skills: res.data.skills}])
    //     })
    //     .catch(err => console.log(err))


    // }, [])

    useEffect(() => {
        fetchDummyPlayers()
    }, [])

    function fetchDummyPlayers(){
        let setter = []
        setter.push({
            "name": "GreenFish41",
            "skills": [
                {
                    "id": 0,
                    "name": "Overall",
                    "rank": 1118753,
                    "level": 1543,
                    "xp": 24723035
                },
                {
                    "id": 1,
                    "name": "Attack",
                    "rank": 1702201,
                    "level": 70,
                    "xp": 752659
                },
                {
                    "id": 2,
                    "name": "Defence",
                    "rank": 1487107,
                    "level": 70,
                    "xp": 766985
                },
                {
                    "id": 3,
                    "name": "Strength",
                    "rank": 1604214,
                    "level": 76,
                    "xp": 1395848
                },
                {
                    "id": 4,
                    "name": "Hitpoints",
                    "rank": 1899423,
                    "level": 72,
                    "xp": 964506
                },
                {
                    "id": 5,
                    "name": "Ranged",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 6,
                    "name": "Prayer",
                    "rank": 1548204,
                    "level": 57,
                    "xp": 213998
                },
                {
                    "id": 7,
                    "name": "Magic",
                    "rank": 1811034,
                    "level": 71,
                    "xp": 850454
                },
                {
                    "id": 8,
                    "name": "Cooking",
                    "rank": 1080108,
                    "level": 73,
                    "xp": 1051817
                },
                {
                    "id": 9,
                    "name": "Woodcutting",
                    "rank": 1593871,
                    "level": 66,
                    "xp": 530921
                },
                {
                    "id": 10,
                    "name": "Fletching",
                    "rank": 1486077,
                    "level": 62,
                    "xp": 357343
                },
                {
                    "id": 11,
                    "name": "Fishing",
                    "rank": 794070,
                    "level": 76,
                    "xp": 1469562
                },
                {
                    "id": 12,
                    "name": "Firemaking",
                    "rank": 463073,
                    "level": 90,
                    "xp": 5571113
                },
                {
                    "id": 13,
                    "name": "Crafting",
                    "rank": 1519763,
                    "level": 62,
                    "xp": 334074
                },
                {
                    "id": 14,
                    "name": "Smithing",
                    "rank": 1198601,
                    "level": 66,
                    "xp": 505214
                },
                {
                    "id": 15,
                    "name": "Mining",
                    "rank": 1054762,
                    "level": 71,
                    "xp": 842532
                },
                {
                    "id": 16,
                    "name": "Herblore",
                    "rank": 1281373,
                    "level": 56,
                    "xp": 199191
                },
                {
                    "id": 17,
                    "name": "Agility",
                    "rank": 1004407,
                    "level": 70,
                    "xp": 803933
                },
                {
                    "id": 18,
                    "name": "Thieving",
                    "rank": 220176,
                    "level": 91,
                    "xp": 6235518
                },
                {
                    "id": 19,
                    "name": "Slayer",
                    "rank": 1269714,
                    "level": 65,
                    "xp": 473929
                },
                {
                    "id": 20,
                    "name": "Farming",
                    "rank": 1078723,
                    "level": 68,
                    "xp": 613242
                },
                {
                    "id": 21,
                    "name": "Runecraft",
                    "rank": 1362461,
                    "level": 42,
                    "xp": 48064
                },
                {
                    "id": 22,
                    "name": "Hunter",
                    "rank": 1053062,
                    "level": 66,
                    "xp": 498319
                },
                {
                    "id": 23,
                    "name": "Construction",
                    "rank": 1242723,
                    "level": 52,
                    "xp": 124306
                }
            ]
        })
        setter.push({
            "name": "raw glizzies",
            "skills": [
                {
                    "id": 0,
                    "name": "Overall",
                    "rank": 1280529,
                    "level": 1448,
                    "xp": 11046932
                },
                {
                    "id": 1,
                    "name": "Attack",
                    "rank": 1723930,
                    "level": 70,
                    "xp": 747106
                },
                {
                    "id": 2,
                    "name": "Defence",
                    "rank": 1439699,
                    "level": 70,
                    "xp": 798402
                },
                {
                    "id": 3,
                    "name": "Strength",
                    "rank": -1,
                    "level": 66,
                    "xp": 538657
                },
                {
                    "id": 4,
                    "name": "Hitpoints",
                    "rank": 1971920,
                    "level": 71,
                    "xp": 860217
                },
                {
                    "id": 5,
                    "name": "Ranged",
                    "rank": -1,
                    "level": 62,
                    "xp": 366784
                },
                {
                    "id": 6,
                    "name": "Prayer",
                    "rank": 1549574,
                    "level": 57,
                    "xp": 212654
                },
                {
                    "id": 7,
                    "name": "Magic",
                    "rank": 1988595,
                    "level": 68,
                    "xp": 631116
                },
                {
                    "id": 8,
                    "name": "Cooking",
                    "rank": 1275720,
                    "level": 70,
                    "xp": 800959
                },
                {
                    "id": 9,
                    "name": "Woodcutting",
                    "rank": 1663855,
                    "level": 65,
                    "xp": 480294
                },
                {
                    "id": 10,
                    "name": "Fletching",
                    "rank": -1,
                    "level": 50,
                    "xp": 101940
                },
                {
                    "id": 11,
                    "name": "Fishing",
                    "rank": 1376907,
                    "level": 66,
                    "xp": 534723
                },
                {
                    "id": 12,
                    "name": "Firemaking",
                    "rank": 1170865,
                    "level": 74,
                    "xp": 1108017
                },
                {
                    "id": 13,
                    "name": "Crafting",
                    "rank": 1624796,
                    "level": 61,
                    "xp": 303749
                },
                {
                    "id": 14,
                    "name": "Smithing",
                    "rank": 1184229,
                    "level": 66,
                    "xp": 535313
                },
                {
                    "id": 15,
                    "name": "Mining",
                    "rank": 1185297,
                    "level": 70,
                    "xp": 742666
                },
                {
                    "id": 16,
                    "name": "Herblore",
                    "rank": 1145200,
                    "level": 59,
                    "xp": 265913
                },
                {
                    "id": 17,
                    "name": "Agility",
                    "rank": 1732542,
                    "level": 58,
                    "xp": 233555
                },
                {
                    "id": 18,
                    "name": "Thieving",
                    "rank": 1664646,
                    "level": 53,
                    "xp": 137041
                },
                {
                    "id": 19,
                    "name": "Slayer",
                    "rank": 1502291,
                    "level": 58,
                    "xp": 232392
                },
                {
                    "id": 20,
                    "name": "Farming",
                    "rank": 1051767,
                    "level": 69,
                    "xp": 698529
                },
                {
                    "id": 21,
                    "name": "Runecraft",
                    "rank": 922561,
                    "level": 57,
                    "xp": 218696
                },
                {
                    "id": 22,
                    "name": "Hunter",
                    "rank": 1091391,
                    "level": 64,
                    "xp": 442291
                },
                {
                    "id": 23,
                    "name": "Construction",
                    "rank": 1584998,
                    "level": 44,
                    "xp": 55918
                }
            ]
        })
        setter.push({
            "name": "GIM Emoney",
            "skills": [
                {
                    "id": 0,
                    "name": "Overall",
                    "rank": 1761495,
                    "level": 1177,
                    "xp": 8391776
                },
                {
                    "id": 1,
                    "name": "Attack",
                    "rank": 1984686,
                    "level": 65,
                    "xp": 450214
                },
                {
                    "id": 2,
                    "name": "Defence",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 3,
                    "name": "Strength",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 4,
                    "name": "Hitpoints",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 5,
                    "name": "Ranged",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 6,
                    "name": "Prayer",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 7,
                    "name": "Magic",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 8,
                    "name": "Cooking",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 9,
                    "name": "Woodcutting",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 10,
                    "name": "Fletching",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 11,
                    "name": "Fishing",
                    "rank": 1494514,
                    "level": 65,
                    "xp": 451402
                },
                {
                    "id": 12,
                    "name": "Firemaking",
                    "rank": 930790,
                    "level": 78,
                    "xp": 1752352
                },
                {
                    "id": 13,
                    "name": "Crafting",
                    "rank": 1454329,
                    "level": 62,
                    "xp": 361447
                },
                {
                    "id": 14,
                    "name": "Smithing",
                    "rank": 1693932,
                    "level": 52,
                    "xp": 134524
                },
                {
                    "id": 15,
                    "name": "Mining",
                    "rank": 1185176,
                    "level": 70,
                    "xp": 742711
                },
                {
                    "id": 16,
                    "name": "Herblore",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 17,
                    "name": "Agility",
                    "rank": 1220173,
                    "level": 68,
                    "xp": 614084
                },
                {
                    "id": 18,
                    "name": "Thieving",
                    "rank": 452362,
                    "level": 80,
                    "xp": 2029034
                },
                {
                    "id": 19,
                    "name": "Slayer",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 20,
                    "name": "Farming",
                    "rank": 1974911,
                    "level": 21,
                    "xp": 5410
                },
                {
                    "id": 21,
                    "name": "Runecraft",
                    "rank": 1252527,
                    "level": 46,
                    "xp": 69454
                },
                {
                    "id": 22,
                    "name": "Hunter",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 23,
                    "name": "Construction",
                    "rank": 1982350,
                    "level": 30,
                    "xp": 14025
                }
            ]
        })
        setter.push({
            "name": "xMyke B",
            "skills": [
                {
                    "id": 0,
                    "name": "Overall",
                    "rank": 813918,
                    "level": 1724,
                    "xp": 46970266
                },
                {
                    "id": 1,
                    "name": "Attack",
                    "rank": 1050778,
                    "level": 80,
                    "xp": 2020996
                },
                {
                    "id": 2,
                    "name": "Defence",
                    "rank": 1258752,
                    "level": 75,
                    "xp": 1211149
                },
                {
                    "id": 3,
                    "name": "Strength",
                    "rank": 570923,
                    "level": 99,
                    "xp": 13034859
                },
                {
                    "id": 4,
                    "name": "Hitpoints",
                    "rank": 877131,
                    "level": 92,
                    "xp": 6567671
                },
                {
                    "id": 5,
                    "name": "Ranged",
                    "rank": 1435990,
                    "level": 78,
                    "xp": 1791619
                },
                {
                    "id": 6,
                    "name": "Prayer",
                    "rank": 1253913,
                    "level": 68,
                    "xp": 608167
                },
                {
                    "id": 7,
                    "name": "Magic",
                    "rank": 1187851,
                    "level": 82,
                    "xp": 2601669
                },
                {
                    "id": 8,
                    "name": "Cooking",
                    "rank": 666300,
                    "level": 85,
                    "xp": 3359907
                },
                {
                    "id": 9,
                    "name": "Woodcutting",
                    "rank": 942420,
                    "level": 75,
                    "xp": 1211387
                },
                {
                    "id": 10,
                    "name": "Fletching",
                    "rank": 1363372,
                    "level": 65,
                    "xp": 486628
                },
                {
                    "id": 11,
                    "name": "Fishing",
                    "rank": 615075,
                    "level": 80,
                    "xp": 2191675
                },
                {
                    "id": 12,
                    "name": "Firemaking",
                    "rank": 942443,
                    "level": 78,
                    "xp": 1686722
                },
                {
                    "id": 13,
                    "name": "Crafting",
                    "rank": 1295780,
                    "level": 66,
                    "xp": 512409
                },
                {
                    "id": 14,
                    "name": "Smithing",
                    "rank": 1106893,
                    "level": 70,
                    "xp": 738248
                },
                {
                    "id": 15,
                    "name": "Mining",
                    "rank": 540726,
                    "level": 80,
                    "xp": 2083162
                },
                {
                    "id": 16,
                    "name": "Herblore",
                    "rank": 948614,
                    "level": 66,
                    "xp": 532911
                },
                {
                    "id": 17,
                    "name": "Agility",
                    "rank": 1125867,
                    "level": 70,
                    "xp": 740862
                },
                {
                    "id": 18,
                    "name": "Thieving",
                    "rank": 1087060,
                    "level": 61,
                    "xp": 314070
                },
                {
                    "id": 19,
                    "name": "Slayer",
                    "rank": 640599,
                    "level": 83,
                    "xp": 2675878
                },
                {
                    "id": 20,
                    "name": "Farming",
                    "rank": 1032234,
                    "level": 70,
                    "xp": 746470
                },
                {
                    "id": 21,
                    "name": "Runecraft",
                    "rank": 827406,
                    "level": 60,
                    "xp": 283456
                },
                {
                    "id": 22,
                    "name": "Hunter",
                    "rank": 788661,
                    "level": 71,
                    "xp": 832150
                },
                {
                    "id": 23,
                    "name": "Construction",
                    "rank": 892360,
                    "level": 70,
                    "xp": 738201
                }
            ]
        })
        setter.push({
            "name": "Glizzieloaf",
            "skills": [
                {
                    "id": 0,
                    "name": "Overall",
                    "rank": 1848524,
                    "level": 1131,
                    "xp": 6284941
                },
                {
                    "id": 1,
                    "name": "Attack",
                    "rank": 1806271,
                    "level": 70,
                    "xp": 738203
                },
                {
                    "id": 2,
                    "name": "Defence",
                    "rank": 1698372,
                    "level": 68,
                    "xp": 631922
                },
                {
                    "id": 3,
                    "name": "Strength",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 4,
                    "name": "Hitpoints",
                    "rank": 1992568,
                    "level": 71,
                    "xp": 833454
                },
                {
                    "id": 5,
                    "name": "Ranged",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 6,
                    "name": "Prayer",
                    "rank": 1884852,
                    "level": 51,
                    "xp": 122445
                },
                {
                    "id": 7,
                    "name": "Magic",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 8,
                    "name": "Cooking",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 9,
                    "name": "Woodcutting",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 10,
                    "name": "Fletching",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 11,
                    "name": "Fishing",
                    "rank": 1777133,
                    "level": 61,
                    "xp": 303916
                },
                {
                    "id": 12,
                    "name": "Firemaking",
                    "rank": 1171575,
                    "level": 74,
                    "xp": 1105893
                },
                {
                    "id": 13,
                    "name": "Crafting",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 14,
                    "name": "Smithing",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 15,
                    "name": "Mining",
                    "rank": 1901660,
                    "level": 58,
                    "xp": 228064
                },
                {
                    "id": 16,
                    "name": "Herblore",
                    "rank": 1816173,
                    "level": 39,
                    "xp": 34508
                },
                {
                    "id": 17,
                    "name": "Agility",
                    "rank": 1571072,
                    "level": 60,
                    "xp": 296497
                },
                {
                    "id": 18,
                    "name": "Thieving",
                    "rank": 1807033,
                    "level": 50,
                    "xp": 106222
                },
                {
                    "id": 19,
                    "name": "Slayer",
                    "rank": 1683632,
                    "level": 52,
                    "xp": 135280
                },
                {
                    "id": 20,
                    "name": "Farming",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 21,
                    "name": "Runecraft",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 22,
                    "name": "Hunter",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                },
                {
                    "id": 23,
                    "name": "Construction",
                    "rank": -1,
                    "level": 1,
                    "xp": -1
                }
            ]
        })

        setPlayers(setter)
    }

    // function fetchAchievements()
    // {
    //     api.get('https://api.wiseoldman.net/v2/players/Glizzieloaf')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    useEffect(() => {
        if (players.length == 5)
        {
            setLoading(false)
        }
    }, [players])

    return(
        <>
            <div id="player-list">
                {!loading ? 
                    players.map((player, key) => <SkillList player={player} key={key} index={key}/>)
                :
                    <span style={{color: 'white'}}>loading...</span>
                }
            </div>
        </>
    )
}