const cardBody = document.querySelector('.card-body');
const target   = new Date('2023-01-01 00:00:00');
let   from     = new Date();
let   timeDiff = target.getTime() - from.getTime();

const frontZero = (data) => {
    if(data>=0 && data<=9){
        data = `0${data}`;
    }
    return data;
}

const counterFunc = () => {
    from = new Date();
    timeDiff = target.getTime() - from.getTime();
    
    const days    = frontZero(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    const hours   = frontZero(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = frontZero(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = frontZero(Math.floor((timeDiff % (1000 * 60)) / 1000));

    const template = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;

    cardBody.textContent = template;
    
};

const interval = setInterval(counterFunc, 1000);
