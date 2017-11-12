function fakePromise(fn) {
    let value = null;
    let callBacks = [];

    this.then = (onFulfilled) => {
        callBacks.push(onFulfilled);
    };

    const resolve = (value) => {
        callBacks.map((callBack) => {
            callBack(value);
        });
    }

    fn(resolve);
}

//////////////////////////////////////////////
let p = new fakePromise((resolve) => {
    setTimeout(() => {
        let num = Math.random() * 10;
        if (num >= 5) {
            resolve(num);
        } else {
            console.log('Not a lucky boy')
        }
    }, 100);
});

p.then((value) => {
    console.log(value);
})