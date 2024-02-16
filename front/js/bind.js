
function number_1() {
    const person = { name: 'mh', greet: function (term) { console.log('hi ', this.name, term) } }
    person.greet('world');
    const personGreet = person.greet;
    personGreet('world');
    const boundPresonGreet = person.greet.bind(person);
    boundPresonGreet('currect');
    // hi there
}
//function
function number_2() {
    const human = { name: undefined, talk: function (term) { return `${this.name ?? 'human'} is saying ${term}` } };
    const iranianPerson = { name: 'mohammad', talk(term) { console.log(`${super.talk(term)} in persian`) }, __proto__: human };
    const englishPerson = { name: 'john', talk(term) { console.log(`${super.talk(term)} in english`) }, __proto__: human };
    const unknownPerson = { name: '👽', talk(term) { console.log(`${super.talk(term)} is unknown`) } };
    iranianPerson.talk('سلام');
    englishPerson.talk('hi there');
    unknownPerson.talk('');
}
//function 
function number_3() {
    (function iifi_function(params) {
        console.log(params);
    })('hi')
}

//function
function number_4() {
    let a = 10;
    x = a;
    console.log(x);
}

//function 
function number_5() {
    const env = { apiUrl: 'https://google.com', version: 'v1', platforms: 'server' }
    const env2 = { apiUrl: 'https://google.com', version: 'v1', platforms: 'server' }
    Object.freeze(env2);
    env.version = 'v2';
    console.log(`evn :`, env.version);
    env2.version = 'v2';
    console.log(`evn2 :`, env2.version);

}

//function 
function number_6() {
    const values = [
        "",
        undefined,
        null,
        NaN,
        0,
        -0,
        +0,
        [],
        {},
        function () { }
    ];
    for (const item in values) {
        if (values[item])
            console.log(`value ${values[item]} is ok`);
    }

}

//function 
function number_7() {
    const x = undefined;
    const z = null;
    if (z === x)
        console.log('equal')
    else console.log('not equal')
}




//function 
function number_8() {
    const interatable = function* (start, end, step) {
        let i = 0;
        for (let index = start; index < end; index += step) {
            i++;
            yield i
        }
        return i;
    }

    console.log(interatable(0, 10, 1));
    console.log([...interatable(0, 10, 1)]);
}


//function 
function number_9() {
    const customDelay = function (callback, delay) {
        let start = null;
        let id = null;
        function animate(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            if (elapsed < delay) {
                id = requestAnimationFrame(animate);
            } else {
                callback();
                cancelAnimationFrame(id)
            }
        }

        id = requestAnimationFrame(animate);
    }

    customDelay(() => console.log("Hello World! after customDelay"), 2500);
}


//function
function number_10() {
    const obj = {
        level: 1,
        logger:
            () => {
                switch (this.level) {
                    case 1:
                        return console.debug;
                    case 2:
                        return console.info;
                    case 3:
                        return console.warn;
                    default:
                        return console.log;
                }
            },

        print: (term) => {
            this.logger()(term);
        },
        printAdvanced: function (term) {
            this.logger()(term);
        }
    };
    try {
        obj.print('print');
    } catch (error) {
        console.info('there is an error : ', error)
    }
    try {
        obj.printAdvanced('printAdvanced');
    } catch (error) {
        console.info('there is an error : ', error)
    }

}

