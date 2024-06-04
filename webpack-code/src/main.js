import sum from "./js/sum";

import './css/index.css';
import './less/index.less';
import './sass/index.sass';
import './stylus/index.styl';

import './css/iconfont.css';

console.log(sum(1, 2, 3, 4, 5, 0))

new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

