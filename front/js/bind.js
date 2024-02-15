//#number 1
function number_1() {
    const person = { name: 'mh', greet: function (term) { console.log('hi ', this.name, term) } }
    person.greet('world');
    const personGreet = person.greet;
    personGreet('world');
    const boundPresonGreet = person.greet.bind(person);
    boundPresonGreet('currect');
}
//function
//#number 2
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
//#number 3 
function number_3() {
    (function iifi_function(params) {
        console.log(params);
    })('hi')
}

//function
//#number 4
function number_4() {
    let a = 10;
    x = a;
    console.log(x);
}

//function
//#number 5 
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
//#number 6 
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
//#number 7 
function number_7() {
    const x = undefined;
    const z = null;
    if (z === x)
        console.log('equal')
    else console.log('not equal')
}




//function
//#number 8 
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
}


//function
//#number 9 
function number_9() {
    const clock = function (callback, interval) {
        callback();
    }

    clock(function () {
        console.log('mi', new Date().getSeconds());
    }, 1000);
}


//function
//#number 10 
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
        console.info('there is an error : ',error)
    }
    try {
        obj.printAdvanced('printAdvanced');
    } catch (error) {
        console.info('there is an error : ',error)
    }
    
}


//function
//#number 11
function number_11() {
    
}
