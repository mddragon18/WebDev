function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 1 complete');
            resolve();
        }, 5000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 2 complete');
            resolve();
        }, 3000);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 3 complete');
            resolve();
        }, 4000);
    });
}

function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 4 complete');
            resolve();
        }, 6000);
    });
}

function task5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 5 complete');
            resolve();
        }, 5500);
    });
}

task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => task4())
    .then(() => task5())
    .then(() => {
        console.log('All Tasks are completed');
    });
