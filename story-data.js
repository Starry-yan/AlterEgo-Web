// ============================================================
// Alter Ego - 橙光式剧情模式数据系统
// ============================================================

// 章节系统总览
const CHAPTERS = [
    {
        id: 'chapter1',
        title: '第一章：初抵异乡',
        subtitle: 'First Arrival in a Foreign Land',
        background: 'Instance 1 - Chapter 1 - First Arrival in a Foreign Land/image/Airport Scene.png',
        unlocked: true,
        scenes: ['scene1_arrival']
    },
    // 预留第二章...
    {
        id: 'chapter2',
        title: '第二章：大学报到',
        subtitle: 'University Registration',
        background: '',
        unlocked: false,
        scenes: []
    },
    {
        id: 'chapter3',
        title: '第三章：校园生活',
        subtitle: 'Campus Life',
        background: '',
        unlocked: false,
        scenes: []
    }
];

// 所有场景定义
const SCENES = {
    // ==========================================
    // 第一章 场景一：初抵异乡 - 伦敦希思罗机场
    // ==========================================
    'scene1_arrival': {
        id: 'scene1_arrival',
        name: '初抵异乡 - 伦敦希思罗机场',
        chapterId: 'chapter1',
        background: 'Instance 1 - Chapter 1 - First Arrival in a Foreign Land/image/Airport Scene.png',
        steps: [
            // 步骤 0：场景开场旁白
            {
                type: 'narrator',
                text: '经过漫长的飞行，飞机终于降落在伦敦希思罗机场。你拖着行李走出廊桥，眼前是熙熙攘攘的国际到达大厅。\n\n巨大的航班信息显示屏不断刷新着目的地，通透明亮的玻璃幕墙投射进午后的阳光。行色匆匆的旅客从你身边经过，各种语言的交谈声交织在一起。\n\n你深吸一口气——这就是你留学生涯的起点。',
                backgroundEffect: 'dim'
            },
            // 步骤 1：地勤 girl1 上前询问
            {
                type: 'dialogue',
                speaker: '地勤人员',
                speakerName: 'Airport Staff',
                character: 'girl1',
                expression: 'girl1.png',
                position: 'left',
                text: 'Excuse me, are you lost? The exit for international arrivals is this way.',
                textCN: '你好，你迷路了吗？国际到达的出口在这边。'
            },
            // 步骤 2：玩家回应 girl1（第一次用户输入）
            {
                type: 'user_input',
                speaker: '地勤人员',
                character: 'girl1',
                expression: 'girl1.png',
                position: 'left',
                prompt: '地勤人员在询问你是否迷路了，你想怎么回应她？',
                placeholder: 'Type your response in English...',
                branches: [
                    {
                        match: ['thank', 'thanks', 'no', 'fine', 'ok', 'okay', 'looking for', 'help', 'desk', 'information', 'info', 'where'],
                        matchMode: 'any',
                        response: {
                            type: 'dialogue',
                            speaker: '地勤人员',
                            speakerName: 'Airport Staff',
                            expression: 'girl1.png',
                            text: 'Oh, the information desk is straight ahead, just past the duty-free shops. You can\'t miss it — there\'s a big "i" sign. Have a good day!',
                            textCN: '哦，问讯处就在正前方，穿过免税店就是了。有个大大的"i"标志，不会错过的。祝你有美好的一天！'
                        },
                        nextStepAddition: [
                            // 旁白过渡
                            {
                                type: 'narrator',
                                text: '你谢过地勤人员，拖着行李朝她指引的方向走去。穿过一排免税店，你看到了前方明亮的问讯柜台，一位金色短发的女士正在整理文件。'
                            }
                        ]
                    },
                    {
                        match: ['lost', 'confused', 'where am i', 'help me', 'find'],
                        matchMode: 'any',
                        response: {
                            type: 'dialogue',
                            speaker: '地勤人员',
                            speakerName: 'Airport Staff',
                            expression: 'girl1.png',
                            text: 'Don\'t worry, it\'s easy to get turned around here. The information desk is that way — just follow the blue signs. They\'ll help you with anything you need!',
                            textCN: '别担心，这儿确实容易迷路。问讯处往那边走——跟着蓝色指示牌走就行。他们会帮你解决任何问题！'
                        },
                        nextStepAddition: [
                            {
                                type: 'narrator',
                                text: '你感激地点点头，顺着蓝色指示牌的方向走去。很快，你就看到了问讯处的柜台。'
                            }
                        ]
                    },
                    {
                        match: ['*'],
                        matchMode: 'fallback',
                        response: {
                            type: 'dialogue',
                            speaker: '地勤人员',
                            speakerName: 'Airport Staff',
                            expression: 'girl1.png',
                            text: 'Ah, you need some assistance? The information desk is right over there, past the shops. They can help you with anything — flights, transport, accommodation. Just follow me, I\'ll point it out.',
                            textCN: '啊，你需要帮助吗？问讯处就在那边，穿过商店就是。他们可以帮你处理任何问题——航班、交通、住宿。跟我来，我指给你看。'
                        },
                        nextStepAddition: [
                            {
                                type: 'narrator',
                                text: '地勤人员热情地给你指了方向。你顺着她的指引，很快找到了问讯处。'
                            }
                        ]
                    }
                ]
            },
            // 步骤 3：到达问讯处，Claire 出场
            {
                type: 'dialogue',
                speaker: 'Claire',
                speakerName: 'Claire',
                character: 'claire',
                expression: 'Claire.png',
                position: 'right',
                text: 'Good afternoon, welcome to London. How may I assist you today?',
                textCN: '下午好，欢迎来到伦敦。今天我能帮您什么？'
            },
            // 步骤 4：玩家向 Claire 说明需求（核心对话）
            {
                type: 'user_input',
                speaker: 'Claire',
                speakerName: 'Claire',
                character: 'claire',
                expression: 'Claire.png',
                position: 'right',
                prompt: 'Claire 在问你需要什么帮助。告诉她想问的事情吧！',
                placeholder: 'e.g. "My next flight to Manchester, where is it?"',
                branches: [
                    // 分支 A：询问航班信息（语法正确）
                    {
                        match: ['where', 'flight', 'manchester', 'next', 'gate', 'when', 'time', 'depart'],
                        matchMode: 'keyword',
                        minKeywords: 2,
                        correctGrammar: true,
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire happy1.png',
                            text: 'Certainly! Let me check that for you. Your flight to Manchester departs from Gate B24 at 16:30. The gate is just past security, and you have plenty of time. Would you like me to help you with anything else?',
                            textCN: '当然！让我帮您查一下。您飞往曼彻斯特的航班从 B24 登机口出发，时间是 16:30。登机口就在安检后面，您有充足的时间。还需要我帮您别的吗？'
                        }
                    },
                    // 分支 B：询问航班信息（语法有误 - 模拟隐性纠错）
                    {
                        match: ['where', 'flight', 'manchester', 'next', 'gate', 'when', 'time', 'depart'],
                        matchMode: 'keyword',
                        minKeywords: 1,
                        correctGrammar: false,
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire confused1.png',
                            text: 'Ah, you want to know where your next flight to Manchester is? No worries, let me look that up for you. Gate B24, departing at 16:30. You see, "where is my next flight?" is how we usually ask. But don\'t worry about it — you\'re doing great!',
                            textCN: '啊，您想知道飞往曼彻斯特的下一班航班在哪里？别担心，我帮您查一下。B24登机口，16:30出发。你看，"where is my next flight?" 通常我们这么问。不过没关系——您已经说得很好了！'
                        }
                    },
                    // 分支 C：询问交通/出口
                    {
                        match: ['transport', 'bus', 'taxi', 'train', 'tube', 'underground', 'exit', 'way out', 'how to get', 'luggage', 'baggage'],
                        matchMode: 'any',
                        correctGrammar: true,
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire happy1.png',
                            text: 'Of course! The Heathrow Express train goes directly to central London — it\'s the fastest option, about 15 minutes. You can also take the Piccadilly Line on the Underground, which is cheaper but takes longer. Taxis are available just outside the arrival hall. Which would you prefer?',
                            textCN: '当然！希思罗快线直达伦敦市中心——这是最快的选择，大约15分钟。您也可以乘坐地铁皮卡迪利线，更便宜但时间更长。出租车在到达大厅外面就有。您更想要哪一种？'
                        }
                    },
                    // 分支 D：询问住宿
                    {
                        match: ['hotel', 'accommodation', 'stay', 'book', 'reservation', 'where', 'sleep'],
                        matchMode: 'any',
                        correctGrammar: true,
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire.png',
                            text: 'There are several hotels near the airport. The nearest one is the Aerotel, just a 5-minute walk from here. If you\'re heading to the city, there are many options — would you like me to recommend a few? You can also check the accommodation board over there.',
                            textCN: '机场附近有几家酒店。最近的是 Aerotel，从这里步行只需5分钟。如果您要去市区，有很多选择——需要我推荐几家吗？您也可以查看那边的住宿信息板。'
                        }
                    },
                    // 分支 E：询问帮助
                    {
                        match: ['help', 'need', 'assist', 'can you'],
                        matchMode: 'any',
                        correctGrammar: true,
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire happy1.png',
                            text: 'Of course, I\'m here to help! I can assist you with flight information, transportation, accommodation, or anything else you might need. Just let me know what you\'re looking for.',
                            textCN: '当然，我在这里就是帮助您的！我可以帮您查询航班信息、交通方式、住宿，或者其他任何您需要的。尽管告诉我您在找什么就好。'
                        }
                    },
                    // 分支 F：道别
                    {
                        match: ['thank', 'thanks', 'that\'s all', 'that is all', 'bye', 'goodbye', 'nothing', 'no'],
                        matchMode: 'any',
                        correctGrammar: true,
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire happy1.png',
                            text: 'You\'re very welcome! Take your time, and don\'t hesitate to come back if you need anything else. Enjoy your stay in the UK!',
                            textCN: '不客气！慢慢来，如果有任何需要尽管回来找我。祝您在英国的旅途愉快！'
                        },
                        isEnding: true
                    },
                    // 默认分支：Claire 以隐性纠错方式自然引导
                    {
                        match: ['*'],
                        matchMode: 'fallback',
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire confused1.png',
                            text: 'I see you\'re looking for some information. Let me help — are you looking for a connecting flight, transportation to the city, or somewhere to stay? Just tell me what you need and I\'ll do my best to assist you.',
                            textCN: '我看您是在找一些信息。让我来帮您——您是在找转机航班、去市区的交通，还是住宿的地方？尽管告诉我您需要什么，我会尽力帮助您。'
                        }
                    }
                ]
            },
            // 步骤 5：后续对话轮次 - 用户可以继续询问或结束
            {
                type: 'user_input',
                speaker: 'Claire',
                speakerName: 'Claire',
                character: 'claire',
                expression: 'Claire happy1.png',
                position: 'right',
                prompt: '你还想继续和 Claire 聊天吗？可以继续询问，或者说 "Thank you" 结束对话。',
                placeholder: 'Ask more questions or say thank you...',
                branches: [
                    {
                        match: ['thank', 'thanks', 'that\'s all', 'that is all', 'bye', 'goodbye', 'nothing', 'no', 'ok', 'okay', 'done'],
                        matchMode: 'any',
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire happy1.png',
                            text: 'You\'re very welcome! Take your time, and don\'t hesitate to come back if you need anything else. Enjoy your stay in the UK! Good luck with your studies!',
                            textCN: '不客气！慢慢来，如果有任何需要尽管回来找我。祝您在英国的旅途愉快！祝学业顺利！'
                        },
                        isEnding: true
                    },
                    {
                        match: ['*'],
                        matchMode: 'fallback',
                        response: {
                            type: 'dialogue',
                            speaker: 'Claire',
                            speakerName: 'Claire',
                            expression: 'Claire.png',
                            text: 'Let me help you with that! What specifically would you like to know? I can check flights, suggest transport options, or help with accommodation. Just let me know!',
                            textCN: '让我帮您解决！您具体想了解什么呢？我可以查航班、推荐交通方式，或者帮您看住宿。尽管告诉我！'
                        }
                    }
                ]
            }
        ]
    }
};

// 角色立绘配置
const CHARACTER_SPRITES = {
    'girl1': {
        name: 'Airport Staff',
        defaultExpression: 'girl1.png',
        expressions: {
            'default': 'girl1.png',
            'happy': 'girl1.png'
        },
        imagePath: 'Instance 1 - Chapter 1 - First Arrival in a Foreign Land/image/'
    },
    'girl2': {
        name: 'You (Player)',
        defaultExpression: 'girl2.jpg',
        expressions: {
            'default': 'girl2.jpg'
        },
        imagePath: 'Instance 1 - Chapter 1 - First Arrival in a Foreign Land/image/'
    },
    'claire': {
        name: 'Claire',
        defaultExpression: 'Claire.png',
        expressions: {
            'default': 'Claire.png',
            'happy': 'Claire happy1.png',
            'confused': 'Claire confused1.png',
            'neutral': 'Claire(1).png',
            'thinking': 'Claire(2).png'
        },
        imagePath: 'Instance 1 - Chapter 1 - First Arrival in a Foreign Land/image/'
    }
};

// 章节完成奖励配置
const CHAPTER_REWARDS = {
    'chapter1': {
        xp: 100,
        achievementName: '🌍 初抵异乡',
        achievementDesc: '完成第一章：初抵异乡'
    }
};