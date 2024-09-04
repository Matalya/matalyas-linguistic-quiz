function print(string) {
    console.log(string);
}

const fs = require('fs');
function input(promptText) {
    const BUFFERSIZE = 1024
    process.stdout.write(promptText);
    const dataBuffer = Buffer.alloc(BUFFERSIZE);
    let bytesRead = 0;

    while (true) {
        const chunk = fs.readSync(
            0,
            dataBuffer,
            bytesRead,
            BUFFERSIZE - bytesRead,
            null);
        bytesRead += chunk;
        if (dataBuffer.includes('\n', bytesRead - chunk)) break;
    }

    return dataBuffer.toString('utf8', 0, bytesRead).trim();
}

function randint(lower, upper, step = undefined) {
    if (lower === undefined) {
        upper = 11;
        lower = 0;
    }
    if (upper === undefined) {
        upper = lower;
        lower = 0;
    }
    if (step != undefined) {
        throw new Error("randint() does not take step argument");
    }
    if (upper < lower) {
        throw new Error(`(-∞,${upper}] [${lower},∞) is not a valid range.`);
    }
    upper++
    diff = upper - lower
    let number = Math.floor(lower + Math.random() * diff)
    return number;
}

const questions = [{
    "id": "mc1",
    "type": "multiple choice",
    "score": 1,
    "question": "What is the official language of the United States?",
    "options": ["English", "Spanish", "French", "None"],
    "correct": "D",
    "fact": "Despite English being a clear majority language, the US does not have a formally codified official language."
},
{
    "id": "mc2",
    "type": "multiple choice",
    "score": 3,
    "question": "Which of the following is NOT a language spoken in France?",
    "options": ["French", "Aragonese", "Occitan", "Catalan"],
    "correct": "B",
    "fact": "Despite bordering with France, Aragonese is only spoken in the Aragon region of Spain. French is the official language of governance, Occitan is spoken mostly in Southern France, and Catalan's range narrowly crosses the border into France and is recognized as a minority language in the Pyrénées-Orientales department."
},
{
    "id" : "mc3",
    "type" : "multiple choice",
    "score" : 5,
    "question" : "Despite being the origin of English, England only places fourth as country with most speakers. With the United States being the first, which two are the countries with the second and third largest English speaking populations?",
    "options" : ["India and Pakistan", "Nigeria and Pakistan", "India and Australia", "Nigeria and India"],
    "correct" : "A",
    "fact" : "The United States has the most total English speakers, with 306 million, followed by India (129 million), Pakistan (104 million), the United Kingdom (68 million), and Nigeria (60 million). Due to its low population, Australia lands 12th with only 21 million speakers."
},
{
    "id" : "mc4",
    "type" : "multiple choice",
    "score" : 5,
    "question" : "Trade and religious missions from Portugal to Asia have resulted in an at first glance surprising influence of Portuguese in the area. What of the following is NOT an actual effect of such missions?",
    "options" : ["considerable amount of Portuguese vocabulary in Old Japanese", "Portuguese being one of the official languages of China via Macau", "Portuguese architecture all across Eastern Asia", "Vasco da Gama, first European to reach India by sea, being the face of the 10 Rupees bill"],
    "correct" : "D",
    "fact" : "Even though Vasco da Gama was a real person and his achievements true as displayed, all Indian bills bear the face of late political ethicist Mahatma Gandhi, including the 10 rupees bill."
},
{
    "id" : "mc5",
    "type" : "multiple choice",
    "score" : 5,
    "question" : "Trade and religious missions from Portugal to Asia have resulted in an at first glance surprising influence of Portuguese in the area. What of the following is NOT an actual effect of such missions?",
    "options" : ["considerable amount of Portuguese vocabulary in Old Japanese", "Portuguese being one of the official languages of China via Macau", "Portuguese architecture all across Eastern Asia", "Vasco da Gama, first European to reach India by sea, being the face of the 10 Rupees bill"],
    "correct" : "D",
    "fact" : "In actuality, all Indian bills bear the face of Mahatma Gandhi, including the 10 rupees bill."
},
{
    "id" : "mc6",
    "type" : "multiple choice",
    "score" : 3,
    "question" : "What proto language is the mother of all Romance languages?",
    "options" : ["Proto Celtic","Proto Germanic","Proto Italic","Proto Slavic"],
    "correct" : "C",
    "fact" : "Proto Italic is named after the Italic peninsula, where most of Italy's territory sits, and where Latin developed, which would spread via the Roman Empire and plant multiple seeds that'd become the tens of . The Celtic languages living today include Irish, Welsh and Scottish Gaelic. Proto Slavic evolved into the languages of Eastern Europe like Russian, Ukranian, Polish and Belorussian. Proto Germanic evolved into the languages of Northern Europe like English, German, Dutch and Frisian."
},
{
    "id" : "mc7",
    "type" : "multiple choice",
    "score" : 3,
    "question" : "What major world language belongs to the Hellenic branch of the Indo European family?",
    "options" : ["Hebrew","Greek","Koine","Doric"],
    "correct" : "B",
    "fact" : "Hebrew is part of the Semitic language family. Koine and Doric are terms for Ancient Greek dialects."
},
{
    "id" : "mc8",
    "type" : "multiple choice",
    "score" : 2,
    "question" : "Which of the following languages did not use hanzi (Chinese characters) as its writing system at any point?",
    "options" : ["Korean", "Vietnamese", "Thai", "Japanese"],
    "correct" : "C",
    "fact" : "The Chinese language has had a very large influence in the entire Asian continent for thousands of years, contributing to science, mythology, philosophy and culture across nations and centuries. The Korean implementation of hanzi was called hanja. In Japanese, it was kanji. In Vietnamese, it was chữ Hán. Thai has been written with the Thai script (อักษรไทย, akson thai) since 1283."
},
{
    "id" : "mc9",
    "type" : "multiple choice",
    "score" : 1,
    "question" : "What language does the word “kamikaze” come from?",
    "options" : ["Hawaiian", "Japanese", "Navajo", "Russian"],
    "correct" : "Japanese",
    "fact" : "The literal translation of 神風 is “divine wind”, because it's the name given to the typhoons that protected Japan from Mongol invasions twice during the late 13th century. It was originally from its Chinese pronunciation “shinpuu”, and was used to refer to the 神風特別攻撃隊 (shinpuu tokubetsu kougeki tai): “Divine Wind” special attack unit. Kamikaze was the native Japanese pronunciation that the media and the populace used, which is how it made its way into English."
},
{
    "id" : "ap1",
    "type" : "approximation",
    "question" : "What percentage of English vocabulary is of Latin origin, whether directly through Latin or indirectly through French?",
    "magnitude" : "tens",
    "score" : 35,
    "answer" : 58,
    "fact" : "Two factors have primarily driven English to have such a large pool of non-Germanic words. First is the constant invasions the British isles have received. From the Romans, to the Nords, to the Normans, French rule for little under 200 years. The second is the language's status as a global lingua franca, forcing it to enter contact with a multitude of languages as it travels the world. Less than a quarter of all words in the English language are of German origin."
},
{
    "id" : "ap2",
    "type" : "approximation",
    "question" : "How many living languages does Papua New Guinea have, according to Ethnologue?",
    "magnitude" : "hundreds",
    "score" : 55,
    "answer" : 840,
    "fact" : "Due to how mountainous and tree covered the island is, and how isolated the tribes are, Papua New Guinea is the single most linguistically diverse place on earth. Usually isolation breeds linguistic diversity as the languages of disconnected tribes tend to drift apart faster and harder than tribes that maintain tight contact, as it is the case of the caucasus mountains and the himalayas as well."
},
{
    "id" : "ap3",
    "type" : "approximation",
    "question" : "How many living languages does the Romance language family have, according to Linguasphere?",
    "magnitude" : "tens",
    "score" : 35,
    "answer" : 51,
    "fact" : "A famous Medieval Latin saying goes “Beati hispani, quibus vivere bibere est.” or “Fortunate are the Hispani, for whom living is drinking.” This is because, during the time of Medieval Latin, the Vulgar Latins of Hispania (Roman province of current say Iberic peninsula) would've begun to undergo a process called betacism, in which /b/ and /v/ would merge into a single sound, resulting in the words “vivere” (To live) and “bibere” (To drink) becoming indistinguishable."
},
{
    "id" : "ap4",
    "type" : "approximation",
    "question" : "How many living languages does the entire Germanic family have, according to Linguasphere?",
    "magnitude" : "tens",
    "score" : 35,
    "answer" : 52,
    "fact" : "Words like “knee”, “knight” and “knife” have a seemingly random silent <k> word initially because, at first, it used to actually be pronounced. <Knee> comes from Middle English's <kne>, pronounced /kneː/, <knife> from <knyf> /kniːf/, and <knight> from <knyght> /kniːxt/. This process where the initial part of a word is eliminated is called apheresis. This process didn't occur in Germany to the same degree, which means that the word-initial <k> is still pronounced in words like <Knecht>, cognatge of knight, <Knoten>, cognate of knot, and <Knie>, cognate of knee."
},
{
    "id" : "ap5",
    "type" : "approximation",
    "question" : "How many native speakers does English have?",
    "magnitude" : "hundreds of millions",
    "score" : 45,
    "answer" : 392391852,
    "fact" : "If we don't count L2 speakers, English is the third language with the most native speakers. If we count L2 speakers, English jumps to the first position as the most widely spoken language on the planet, getting an edge over Mandarin Chinese of over 500 million speakers, despite having less than a third the amount of native speakers. This is because English is the most widely learned language in the world with more than 1.1 billion L2 speakers. The second position is Hindi with merely 264 million."
},
{
    "id" : "ap6",
    "type" : "approximation",
    "question" : "English has a very large discrepancy of native speakers to L2 speakers, with L2 speakers constituing 74.3% of all speakers of English, or in other words, almost 3 learners for every native speaker. However, Swahili gets the crown for the most discrepancy of native speakers to L2 speakers of any non-creole language. What percentage of the entire speaking population is L2?",
    "magnitude" : "tens, 1 significant figure decimal",
    "score" : 100,
    "answer" : 95.4,
    "fact" : "Swahili has 87 million speakers, of which, only 3 million are native speakers. This, curious enough, is for the same reason English has so many more learners than native speakers: Swahili is a very popular candidate as the African lingua franca, learned by many fans and residents of the African continent alike to communicate internationally."
},
{
    "id": "ap7",
    "type": "approximation",
    "score": 40,
    "magnitude": "hundreds of thousands",
    "question": "The largest English dictionary is the English Wiktionary. How many entries does it have?",
    "answer": 755865,
    "fact": "The quote “There are approximately 1,010,300 words in the English Language, but I could never string enough words together to properly express how much I want to hit you with a chair.” often circulates the internet as something Alexander Hamilton said to Thomas Jefferson. However, there is no actual record of Hamilton ever actually saying such a thing."
},
{
    "id" : "ap8",
    "type" : "approximation",
    "question" : "The largest dictionary, according to Wikipedia, is the Sorkuvai, an online open dictionary run by the Tamil Nadu government. How many entries does it have?",
    "magnitude" : "millions",
    "score" : 55,
    "answer" : 1516952,
    "fact" : "Tamil has had a remarkable degree of resilience to change over time, or rather, to lose its past iterations. Classical works like the Tirukkuṛaḷ, who is over 2000 years old, can be read by Tamil children without much effort."
}
]
const QUESTION_COUNT = questions.length
const ABCD = ["A", "B", "C", "D"];

function print_question(chosen_question) {
    let score = chosen_question.score;
    let question = chosen_question.question
    let type = chosen_question.type;
    let options = chosen_question.options
    print(`For ${score} point${(score > 1) ? "s" : ""}: ${question}`);
    if (type == "approximation") {
        print(`magnitude: ${chosen_question.magnitude}`)
    } else {
        for (let i = 0; i < 4; i++) {
            print(`${ABCD[i]}: ${options[i]}`);
        }
    }
}
let provided_questions = [];
function serve_question(question_index = -1) {
    if (question_index == -1) {
        question_index = randint(QUESTION_COUNT);
        while (provided_questions.includes(question_index)) {
            question_index = randint(QUESTION_COUNT);
        }
    }
    print_question(questions[question_index])
    return question_index
}
let user_score = 0;

function process_user_input(user_input, current_question) {
    if (user_input.slice(0, 11) == "debugserve ") {
        for (let i = 0; i < QUESTION_COUNT; i++) {
            if (questions[i].id == user_input_input.slice(11, 14)) {
                serve_question(i)
            }
        }
    } else if (user_input.slice(0, 10) == "debugscore") {
        print(user_score);
    } else {
        if (current_question.type == "approximation") {
            print("Sorry, haven't made it yet; just have the score.")
            user_score += current_question.score;
        } else {
            if (user_input == current_question.answer) {
                user_score += current_question.score;
                print(`Correct!\n${current.question.fact}`)
            }
        }
    }
}

print("Welcome to Matalya's Linguistic Quiz.\nEach question has an inherent score. There are two types of questions. Multiple choice questions give you a small score if you select the correct option out of four. Approximation questions have a precise numerical answer that you have to get as close to as possible. The closer you get, the closer your score will be to the full score of the question. Good luck, and may Babel be with you!\nTo exit, just type \"exit\"");
let user_input = input("Input \"begin\" when you're ready:\n");
while (provided_questions.length != QUESTION_COUNT && user_input != "exit") {
    current_question = serve_question()
    provided_questions.push(current_question);
    user_input = input("Your answer:\n");
    process_user_input(user_input, current_question);
}