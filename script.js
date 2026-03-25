const DATA = {
    batsmen: [
        { name: "Sachin Tendulkar", stats: { Power: 80, Technique: 99, Aggression: 85, Composure: 95, Experience: 99 }},
        { name: "Sir Viv Richards", stats: { Power: 95, Technique: 90, Aggression: 99, Composure: 85, Experience: 90 }},
        { name: "Virat Kohli", stats: { Power: 85, Technique: 95, Aggression: 90, Composure: 92, Experience: 95 }},
        { name: "AB de Villiers", stats: { Power: 95, Technique: 92, Aggression: 95, Composure: 88, Experience: 90 }},
        { name: "Brian Lara", stats: { Power: 85, Technique: 96, Aggression: 88, Composure: 90, Experience: 94 }},
        { name: "Ricky Ponting", stats: { Power: 88, Technique: 92, Aggression: 90, Composure: 94, Experience: 96 }},
        { name: "MS Dhoni", stats: { Power: 92, Technique: 85, Aggression: 88, Composure: 99, Experience: 95 }},
        { name: "Don Bradman", stats: { Power: 85, Technique: 99, Aggression: 95, Composure: 98, Experience: 90 }},
        { name: "K. Sangakkara", stats: { Power: 82, Technique: 95, Aggression: 80, Composure: 92, Experience: 94 }},
        { name: "Rohit Sharma", stats: { Power: 94, Technique: 90, Aggression: 92, Composure: 88, Experience: 92 }},
        { name: "Rahul Dravid", stats: { Power: 75, Technique: 98, Aggression: 70, Composure: 99, Experience: 95 }},
        { name: "Matthew Hayden", stats: { Power: 98, Technique: 85, Aggression: 96, Composure: 82, Experience: 90 }},
        { name: "Virender Sehwag", stats: { Power: 96, Technique: 80, Aggression: 99, Composure: 80, Experience: 92 }},
        { name: "Steve Smith", stats: { Power: 80, Technique: 96, Aggression: 82, Composure: 94, Experience: 88 }},
        { name: "Kane Williamson", stats: { Power: 78, Technique: 97, Aggression: 75, Composure: 96, Experience: 88 }},
        { name: "Joe Root", stats: { Power: 76, Technique: 95, Aggression: 78, Composure: 92, Experience: 86 }},
        { name: "Chris Gayle", stats: { Power: 99, Technique: 75, Aggression: 98, Composure: 75, Experience: 94 }},
        { name: "Hashim Amla", stats: { Power: 80, Technique: 94, Aggression: 82, Composure: 92, Experience: 88 }},
        { name: "Sunil Gavaskar", stats: { Power: 70, Technique: 98, Aggression: 70, Composure: 96, Experience: 96 }},
        { name: "David Warner", stats: { Power: 92, Technique: 85, Aggression: 95, Composure: 80, Experience: 88 }}
    ],
    bowlers: [
        { name: "Wasim Akram", stats: { "Pace & Turn": 95, Accuracy: 90, Aggression: 88, Composure: 92, Experience: 95 }},
        { name: "Shane Warne", stats: { "Pace & Turn": 98, Accuracy: 92, Aggression: 85, Composure: 90, Experience: 96 }},
        { name: "Glenn McGrath", stats: { "Pace & Turn": 85, Accuracy: 99, Aggression: 80, Composure: 98, Experience: 94 }},
        { name: "M. Muralitharan", stats: { "Pace & Turn": 99, Accuracy: 95, Aggression: 82, Composure: 94, Experience: 98 }},
        { name: "Jasprit Bumrah", stats: { "Pace & Turn": 92, Accuracy: 94, Aggression: 85, Composure: 90, Experience: 88 }},
        { name: "Curtly Ambrose", stats: { "Pace & Turn": 94, Accuracy: 96, Aggression: 90, Composure: 92, Experience: 94 }},
        { name: "Brett Lee", stats: { "Pace & Turn": 98, Accuracy: 85, Aggression: 95, Composure: 82, Experience: 90 }},
        { name: "Dale Steyn", stats: { "Pace & Turn": 96, Accuracy: 92, Aggression: 98, Composure: 85, Experience: 92 }},
        { name: "Anil Kumble", stats: { "Pace & Turn": 88, Accuracy: 96, Aggression: 88, Composure: 95, Experience: 95 }},
        { name: "Shoaib Akhtar", stats: { "Pace & Turn": 99, Accuracy: 80, Aggression: 99, Composure: 80, Experience: 88 }},
        { name: "Richard Hadlee", stats: { "Pace & Turn": 90, Accuracy: 98, Aggression: 85, Composure: 94, Experience: 95 }},
        { name: "Waqar Younis", stats: { "Pace & Turn": 97, Accuracy: 85, Aggression: 96, Composure: 82, Experience: 92 }},
        { name: "Shaun Pollock", stats: { "Pace & Turn": 85, Accuracy: 97, Aggression: 80, Composure: 95, Experience: 94 }},
        { name: "Courtney Walsh", stats: { "Pace & Turn": 92, Accuracy: 92, Aggression: 88, Composure: 90, Experience: 96 }},
        { name: "Allan Donald", stats: { "Pace & Turn": 96, Accuracy: 90, Aggression: 95, Composure: 85, Experience: 90 }},
        { name: "Mitchell Starc", stats: { "Pace & Turn": 97, Accuracy: 84, Aggression: 94, Composure: 80, Experience: 88 }},
        { name: "Trent Boult", stats: { "Pace & Turn": 92, Accuracy: 94, Aggression: 88, Composure: 88, Experience: 86 }},
        { name: "Pat Cummins", stats: { "Pace & Turn": 94, Accuracy: 95, Aggression: 90, Composure: 94, Experience: 86 }},
        { name: "Dennis Lillee", stats: { "Pace & Turn": 96, Accuracy: 90, Aggression: 98, Composure: 85, Experience: 94 }},
        { name: "R. Ashwin", stats: { "Pace & Turn": 88, Accuracy: 94, Aggression: 85, Composure: 92, Experience: 90 }}
    ],
    allrounders: [
        { name: "Jacques Kallis", stats: { Skill: 92, "Tech / Acc": 96, Aggression: 85, Composure: 95, Experience: 98 }},
        { name: "Garfield Sobers", stats: { Skill: 95, "Tech / Acc": 95, Aggression: 90, Composure: 92, Experience: 94 }},
        { name: "Kapil Dev", stats: { Skill: 90, "Tech / Acc": 88, Aggression: 92, Composure: 90, Experience: 92 }},
        { name: "Imran Khan", stats: { Skill: 92, "Tech / Acc": 90, Aggression: 94, Composure: 95, Experience: 95 }},
        { name: "Andrew Flintoff", stats: { Skill: 94, "Tech / Acc": 85, Aggression: 96, Composure: 88, Experience: 88 }},
        { name: "Ben Stokes", stats: { Skill: 92, "Tech / Acc": 86, Aggression: 95, Composure: 92, Experience: 86 }},
        { name: "Ian Botham", stats: { Skill: 94, "Tech / Acc": 88, Aggression: 95, Composure: 85, Experience: 92 }},
        { name: "Shakib Al Hasan", stats: { Skill: 88, "Tech / Acc": 90, Aggression: 85, Composure: 90, Experience: 90 }},
        { name: "Chris Cairns", stats: { Skill: 90, "Tech / Acc": 85, Aggression: 92, Composure: 88, Experience: 88 }},
        { name: "Lance Klusener", stats: { Skill: 94, "Tech / Acc": 82, Aggression: 96, Composure: 94, Experience: 85 }},
        { name: "Ravindra Jadeja", stats: { Skill: 88, "Tech / Acc": 92, Aggression: 88, Composure: 90, Experience: 86 }},
        { name: "Shane Watson", stats: { Skill: 92, "Tech / Acc": 85, Aggression: 90, Composure: 85, Experience: 88 }}
    ]
};

let state = {
    globalRoundsWin: { player: 0, ai: 0 },
    round: 1, turn: 1, currentRoundScore: { player: 0, ai: 0 },
    playerRole: 'batting', playerHand: [], aiHand: [], battleStat: null,
    aiSelectedCardIndex: -1, playerSelectedCardIndex: -1,
    pool: [], draftSelection: [], requiredDraftCount: 5
};

const app = document.getElementById('app');

function init() {
    state.globalRoundsWin = { player: 0, ai: 0 };
    state.round = 1;
    renderStartScreen();
}

function getRandomCards(pool, count) {
    let shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(c => ({...c, id: Math.random().toString(36).substr(2, 9)}));
}

function renderScreen(html) {
    app.innerHTML = html;
    requestAnimationFrame(() => {
        const screen = app.querySelector('.screen');
        if(screen) screen.classList.add('active');
    });
}

function renderStartScreen() {
    renderScreen(`
        <div class="screen view-start" style="animation: popIn 0.5s ease forwards">
            <div class="title-container">
                <h1>Pitch Legends</h1>
                <p style="color:var(--text-muted); margin-bottom:30px">The Ultimate Cricket Card Auto-Battler</p>
                <button class="btn" style="margin-top: 20px" onclick="startRound()">START GAME</button>
            </div>
        </div>
    `);
}

window.startRound = function() {
    state.turn = 1;
    state.currentRoundScore = { player: 0, ai: 0 };
    state.draftSelection = [];
    
    if (state.round === 1) {
        state.playerRole = 'batting';
        state.aiHand = getRandomCards(DATA.bowlers, 5);
        state.pool = [...DATA.batsmen];
        state.requiredDraftCount = 5;
    } else if (state.round === 2) {
        state.playerRole = 'bowling';
        state.aiHand = getRandomCards(DATA.batsmen, 5);
        state.pool = [...DATA.bowlers];
        state.requiredDraftCount = 5;
    } else {
        state.playerRole = 'allrounder';
        state.aiHand = getRandomCards(DATA.allrounders, 3);
        state.pool = [...DATA.allrounders];
        state.requiredDraftCount = 3;
    }
    
    state.playerHand = getRandomCards(state.pool, state.requiredDraftCount);
    renderPackScreen();
};

window.renderPackScreen = function() {
    state.packsOpened = 0;
    
    let packHtml = state.playerHand.map((c, i) => `
        <div id="packWrapper-${i}" class="card-wrapper" onclick="openMiniPack(${i})">
            ${createCardHTML(c, state.playerRole, true, '')}
        </div>
    `).join('');

    renderScreen(`
        <div class="screen view-pack" style="animation: slideUp 0.4s ease forwards; overflow-y: auto; padding-bottom: 50px">
            <div class="header" style="justify-content: center; flex-direction: column; align-items: center; padding-bottom: 10px;">
                <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.2rem">OPEN PACKS</h3>
                <div class="score-badge" id="packCounter">0 / ${state.requiredDraftCount}</div>
            </div>
            
            <p style="text-align: center; color: var(--text-muted); margin-top: 15px; margin-bottom: 25px;">Reveal your legends for Round ${state.round}!</p>
            
            <div class="pack-mini-grid">
                ${packHtml}
            </div>
            
            <div id="continueBtnContainer" style="text-align: center; margin-top: 30px; opacity: 0; pointer-events: none; transition: all 0.5s ease">
                <button class="btn" style="padding: 12px 30px;" onclick="renderRoundIntro()">CONTINUE TO BATTLE</button>
            </div>
        </div>
    `);
};

window.openMiniPack = function(idx) {
    let wrapper = document.getElementById(`packWrapper-${idx}`);
    if (!wrapper) return;
    let card = wrapper.querySelector('.card');
    
    if(!card.classList.contains('flipped') || wrapper.classList.contains('shake')) return;
    
    wrapper.classList.add('shake');
    if(navigator.vibrate) navigator.vibrate([50]);
    
    setTimeout(() => {
        card.classList.remove('flipped');
        
        state.packsOpened++;
        let counter = document.getElementById('packCounter');
        if (counter) counter.innerText = `${state.packsOpened} / ${state.requiredDraftCount}`;
        
        if (state.packsOpened === state.requiredDraftCount) {
            let btnC = document.getElementById('continueBtnContainer');
            if (btnC) {
                btnC.style.opacity = '1';
                btnC.style.pointerEvents = 'auto';
            }
        }
    }, 400);
};

function getStatKeys(role) {
    if (role === 'batting') return ["Power", "Technique", "Aggression", "Composure", "Experience"];
    if (role === 'bowling') return ["Pace & Turn", "Accuracy", "Aggression", "Composure", "Experience"];
    return ["Skill", "Tech / Acc", "Aggression", "Composure", "Experience"];
}

function renderRoundIntro() {
    let roleText = state.playerRole.toUpperCase();
    let oppRole = state.playerRole === 'batting' ? 'BOWLING' : state.playerRole === 'bowling' ? 'BATTING' : 'ALL-ROUNDER';
    
    renderScreen(`
        <div class="screen">
            <div class="full-center" style="animation: slideUp 0.5s ease">
                <h3>ROUND ${state.round}</h3>
                <h1 style="color: var(--accent); margin: 20px 0; font-size: 2.2rem;">YOU ARE ${roleText}</h1>
                <p style="margin-bottom: 30px; color: var(--text-muted)">The AI is playing as ${oppRole}</p>
                <div style="background: var(--card-bg); padding: 15px; border-radius: 12px; margin-bottom: 30px; width: 85%; text-align: left; border: 1px solid var(--card-border)">
                    <div style="font-weight: 700; margin-bottom: 10px; color: var(--accent)">YOUR DECK:</div>
                    ${state.playerHand.map(c => `<div>• ${c.name}</div>`).join('')}
                </div>
                <button class="btn" onclick="startTurn()">PLAY TURN 1</button>
            </div>
        </div>
    `);
}

window.startTurn = function() {
    if (state.currentRoundScore.player === 2 || state.currentRoundScore.ai === 2 || (state.turn > 3 && state.round !== 3) || (state.turn > 3 && state.round === 3)) {
        endRound();
        return;
    }

    let aRole = state.playerRole === 'batting' ? 'bowling' : state.playerRole === 'bowling' ? 'batting' : 'allrounder';
    let aK = getStatKeys(aRole);
    let pK = getStatKeys(state.playerRole);
    
    let idx = Math.floor(Math.random() * 5);
    state.battleStat = {
        aiKey: aK[idx],
        playerKey: pK[idx],
        display: pK[idx] === aK[idx] ? pK[idx] : `${pK[idx]} VS ${aK[idx]}`
    };

    let bestIdx = 0, high = 0;
    state.aiHand.forEach((c, i) => {
        if(!c.consumed && c.stats[state.battleStat.aiKey] > high) { high = c.stats[state.battleStat.aiKey]; bestIdx = i; }
    });
    state.aiSelectedCardIndex = bestIdx;

    renderTurnGameplay();
};

function createCardHTML(card, role, isFlipped, highlightStat) {
    if (!card) return '';
    let keys = getStatKeys(role);
    let statsHtml = keys.map(k => {
        let hl = k === highlightStat ? 'highlighted' : '';
        return `<div class="stat-row ${hl}"><span>${k}</span><span class="stat-val">${card.stats[k]}</span></div>`;
    }).join('');

    let formattedName = card.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    let avatarSrc = `assets/${formattedName}.png`;
    let fallbackSrc = `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(card.name)}&backgroundColor=0b0f19`;

    return `
        <div class="card ${isFlipped ? 'flipped' : ''}">
            <div class="card-face card-front">
                <div class="card-header">
                    <div class="card-title">${card.name}</div>
                    <div class="card-subtitle">${role.toUpperCase()}</div>
                </div>
                <div class="card-avatar-container">
                    <img src="${avatarSrc}" onerror="this.onerror=null; this.src='${fallbackSrc}';" class="card-avatar" alt="${card.name}">
                </div>
                <div class="card-stats">${statsHtml}</div>
            </div>
            <div class="card-face card-back"></div>
        </div>
    `;
}

function renderTurnGameplay() {
    let handHtml = state.playerHand.map((c, i) => {
        if (c.consumed) {
            return `
                <div class="card-wrapper consumed-card">
                    ${createCardHTML(c, state.playerRole, false, state.battleStat.playerKey)}
                </div>
            `;
        }
        return `
            <div class="card-wrapper" onclick="playCard(${i})">
                ${createCardHTML(c, state.playerRole, false, state.battleStat.playerKey)}
            </div>
        `;
    }).join('');

    renderScreen(`
        <div class="screen view-gameplay">
            <div class="header">
                <h3>R${state.round} - Turn ${state.turn}</h3>
                <div class="score-badge">You ${state.currentRoundScore.player} - ${state.currentRoundScore.ai} AI</div>
            </div>
            <div class="battle-info" style="animation: slideUp 0.3s ease">
                <p style="color:var(--text-muted); font-size:0.9rem;">Battle Stat</p>
                <div class="stat-highlight">${state.battleStat.display}</div>
            </div>
            <div class="arena">
                <div class="ai-area">
                    <div class="ai-card-wrapper card-wrapper" style="pointer-events:none; perspective: 1000px; transform: scale(0.95)">
                        <div class="card flipped">
                            <div class="card-face card-front"></div>
                            <div class="card-face card-back"></div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin: 5px 0 10px 0; font-size: 0.8rem; font-weight: bold; color: var(--accent); letter-spacing: 2px;">SELECT YOUR CARD</div>
                <div class="player-area">
                    <div class="hand-container" style="animation: slideUp 0.5s ease">
                        ${handHtml}
                    </div>
                </div>
            </div>
        </div>
    `);
}

window.playCard = function(idx) {
    state.playerSelectedCardIndex = idx;
    renderTurnReveal();
};

function renderTurnReveal() {
    let aiCard = state.aiHand[state.aiSelectedCardIndex];
    let pCard = state.playerHand[state.playerSelectedCardIndex];
    let aiRole = state.playerRole === 'batting' ? 'bowling' : state.playerRole === 'bowling' ? 'batting' : 'allrounder';
    
    let aVal = aiCard.stats[state.battleStat.aiKey];
    let pVal = pCard.stats[state.battleStat.playerKey];
    
    let win = 'tie';
    if(pVal > aVal) win = 'player';
    else if(aVal > pVal) win = 'ai';
    else {
        if(pCard.stats["Experience"] > aiCard.stats["Experience"]) win = 'player';
        else if(aiCard.stats["Experience"] > pCard.stats["Experience"]) win = 'ai';
        else win = 'player';
    }

    if(win === 'player') state.currentRoundScore.player++;
    else if(win === 'ai') state.currentRoundScore.ai++;

    state.aiHand[state.aiSelectedCardIndex].consumed = true;
    state.playerHand[state.playerSelectedCardIndex].consumed = true;
    
    // Bubble consumed cards to the end of the hand to natively reposition them in the UI!
    state.aiHand.push(state.aiHand.splice(state.aiSelectedCardIndex, 1)[0]);
    state.playerHand.push(state.playerHand.splice(state.playerSelectedCardIndex, 1)[0]);

    renderScreen(`
        <div class="screen view-gameplay">
            <div class="header">
                <h3>Turn Result</h3>
                <div class="score-badge">You ${state.currentRoundScore.player} - ${state.currentRoundScore.ai} AI</div>
            </div>
            <div class="battle-info" style="z-index: 20; position: relative">
                <p style="color:var(--text-muted); font-size:0.9rem;">Battle Stat: <span style="color:var(--accent); font-weight:bold; font-size: 1.2rem">${state.battleStat.display}</span></p>
            </div>
            
            <div class="clash-arena" style="margin-top: 10px; margin-bottom: 20px;">
                <div id="vsOrb" class="clash-center-vs">VS</div>
                
                <div id="pClashCard" class="clash-card-container clash-player-start">
                     <div class="card-wrapper" style="transform: scale(0.85); width: 100%">
                         ${createCardHTML(pCard, state.playerRole, false, state.battleStat.playerKey)}
                         <div style="text-align:center; font-weight:bold; color:var(--accent); margin-top: 5px; font-size: 0.9rem">YOU (${pVal})</div>
                     </div>
                </div>
                
                <div id="aiClashCard" class="clash-card-container clash-ai-start">
                     <div class="card-wrapper" style="transform: scale(0.85); width: 100%">
                         ${createCardHTML(aiCard, aiRole, true, state.battleStat.aiKey)} 
                         <div style="text-align:center; font-weight:bold; color:var(--text-muted); margin-top: 5px; font-size: 0.9rem">AI (${aVal})</div>
                     </div>
                </div>
            </div>
            
            <div id="turnResultUI" style="text-align: center; opacity: 0; transition: opacity 0.5s; position: relative; z-index: 20; margin-top: 10px">
                <div id="turnResultText" class="turn-result-text" style="margin-bottom: 10px"></div>
                <button class="btn" style="padding: 12px 30px;" onclick="nextTurn()">CONTINUE</button>
            </div>
        </div>
    `);

    setTimeout(() => {
        let aiCon = document.getElementById('aiClashCard');
        let pCon = document.getElementById('pClashCard');
        
        if(aiCon) aiCon.classList.replace('clash-ai-start', 'clash-impact-ai');
        if(pCon) pCon.classList.replace('clash-player-start', 'clash-impact-player');
        
        setTimeout(() => {
            let aiCrd = aiCon.querySelector('.card');
            if(aiCrd) aiCrd.classList.remove('flipped');
            
            setTimeout(() => {
                let vsOrb = document.getElementById('vsOrb');
                if(vsOrb) vsOrb.classList.add('boom');
                if(navigator.vibrate) navigator.vibrate([80, 40, 100]);
                
                let pWrapper = pCon.querySelector('.card');
                let aWrapper = aiCon.querySelector('.card');
                
                if (win === 'player' && pWrapper) { pWrapper.style.boxShadow = "0 0 25px var(--win)"; pWrapper.style.borderColor = "var(--win)"; }
                else if (win === 'ai' && aWrapper) { aWrapper.style.boxShadow = "0 0 25px var(--loss)"; aWrapper.style.borderColor = "var(--loss)"; }

                setTimeout(() => {
                    let resUI = document.getElementById('turnResultUI');
                    let resText = document.getElementById('turnResultText');
                    if(resText) resText.innerHTML = win === 'player' ? '<span style="color:var(--win); font-size: 2rem">YOU WIN!</span>' : win === 'ai' ? '<span style="color:var(--loss); font-size: 2rem">AI WINS</span>' : '<span style="font-size: 2rem">TIE</span>';
                    if(resUI) resUI.style.opacity = '1';
                }, 500);

            }, 600); 
        }, 500); 
    }, 100);
}

window.nextTurn = function() {
    state.turn++;
    startTurn();
};

function endRound() {
    let rWin = state.currentRoundScore.player > state.currentRoundScore.ai ? 'player' : 'ai';
    if(rWin === 'player') state.globalRoundsWin.player++; else state.globalRoundsWin.ai++;

    if(state.globalRoundsWin.player === 2 || state.globalRoundsWin.ai === 2) {
        let gameWin = state.globalRoundsWin.player === 2 ? '<span style="color:var(--win)">CHAMPION! YOU WON!</span>' : '<span style="color:var(--loss)">DEFEAT. AI WINS.</span>';
        renderScreen(`
            <div class="screen view-start">
                <div class="title-container" style="animation: popIn 0.5s ease">
                    <h2 style="color: var(--text-muted); margin-bottom: 10px">MATCH RESULT</h2>
                    <h1 style="font-size: 2.2rem; line-height: 1.2; margin-bottom: 20px">${gameWin}</h1>
                    <p style="font-size: 1.1rem; color: #fff;">Final Score: You ${state.globalRoundsWin.player} - ${state.globalRoundsWin.ai} AI</p>
                    <div style="margin-top:40px; width: 100%">
                        <button class="btn" onclick="init()">PLAY AGAIN</button>
                    </div>
                </div>
            </div>
        `);
    } else {
        state.round++;
        let rText = rWin === 'player' ? '<span style="color:var(--win)">YOU WON ROUND</span>' : '<span style="color:var(--loss)">AI WON ROUND</span>';
        renderScreen(`
            <div class="screen">
                <div class="full-center" style="animation: popIn 0.5s ease">
                    <h2 style="color: var(--text-muted); margin-bottom: 15px">ROUND ${state.round - 1} OVER</h2>
                    <h1 style="margin: 15px 0;">${rText}</h1>
                    <p style="font-size: 1.1rem; color: #fff; margin-bottom: 40px">Match Score: You ${state.globalRoundsWin.player} - ${state.globalRoundsWin.ai} AI</p>
                    <button class="btn" onclick="startRound()">START ROUND ${state.round}</button>
                </div>
            </div>
        `);
    }
}

init();
