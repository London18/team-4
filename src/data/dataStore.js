function RNG(seed) {
    // LCG using GCC's constants
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;

    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}

RNG.prototype.nextInt = function() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
};

RNG.prototype.nextFloat = function() {
    // returns in range [0,1]
    return this.nextInt() / (this.m - 1);
};

RNG.prototype.nextRange = function(start, end) {
    // returns in range [start, end): including start, excluding end
    // can't modulu nextInt because of weak randomness in lower bits
    var rangeSize = end - start;
    var randomUnder1 = this.nextInt() / this.m;
    return start + Math.floor(randomUnder1 * rangeSize);
};

RNG.prototype.choice = function(array) {
    return array[this.nextRange(0, array.length)];
};

RNG.prototype.nextDateRange = function randomDate(start, end) {
    return new Date(this.nextRange(start.getTime(), end.getTime()));
};

function randrange(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

const forms = {
    0: {
        name: 'WS-EL Self Performance',
        id: 0,
        questions: [
            {question: 'Know what is expected of you as a worker', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'help build a team as a working unit', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'determine what is expected of you on the job', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'know how things "really work" inside an organisation', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'be clear with presenting your ideas', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'work under pressure', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'master an organisation\'s slang and special jargon', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'manage conflict among group members', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'understand what all of the duties of your role entail', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'solve new and difficult problems', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'work under extreme cricumstances', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'understand the politics in the organisation', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'continue to learn once you\'re on the job', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'develop cooperative working relationships with others', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'invent new ways of doing things', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'solve most problems even though no solution is immediately apparent', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'find out exactly what a problem is when fist becoming aware of it', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'listen effectively to gain information', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'know an organisation\'s long-held traditions', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'work well in situations that other people consider stressful', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'understand the behaviour appropriate to your role', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'challenge things that are done by the book', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'learn from your mistakes', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'solve problems no matter how complex', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'coordinate tasks within you work group', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'learn to improve on your past performance', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'be sensitive to other\'s feelings and attitudes', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'function well at work even when faced with personal difficulties', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'concentrate on what someone is saying to you even though other things could distract you', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'},
            {question: 'listen effectively to understand opposing points of view', choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'], id: randrange(0, 1321232132), type: 'slider'}
        ]
    },

    1: {
        name: 'WS-EL Self',
        id: 1,
        questions: [
            {
                type: 'slider',
                choices: ['no at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'Thinking about your recent work experience, how successful have you been:',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'Learning productively on the job',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'solving problems at work',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'accomplishing recent work well under time and schedule constraints',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'understanding what is expected of you in your current role',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'demonstrating sensitivity to others',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'recognising what the accepted practices are in your organisation',
                id: randrange(0, 1321232132)
            },
            {
                type: 'slider',
                choices: ['not at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                question: 'managing yourself well in the workplace',
                id: randrange(0, 1321232132)
            }
        ]
    }
};

let questions = {};

for (let key in forms) {
    let form = forms[key];

    form['questions'].forEach((question) => {
        questions[question['id']] = question
    });
}


export const dataStore = {
    getAvaiableForms: function(callback) {
        let keys = [];

        for (const [key, value] of Object.entries(forms)) {
            keys.push(key)
        }

        callback(keys)
    },

    getForm: function(key, callback) {
        callback(forms[key]);
    },

    getRandomForm: function(callback) {
        let keys = Object.keys(forms);
        callback(forms[keys[Math.floor(randrange(0, keys.length))]]);
    },

    getUserAnswers(userId, questionId, callback) {
        let random = new RNG(userId + questionId);
        let nr_answers = randrange(10, 100);
        let question = questions[questionId];
        let answers = [];

        // debugger;

        for (let i = 0; i < nr_answers; i++) {
            let answer = random.choice(question.choices);

            answers.push({
                answer: answer,
                responseTime: random.nextRange(700, 3000),
                date: random.nextDateRange(new Date(2018, 11, 1), new Date())
            });
        }

        callback(answers);
    }
};