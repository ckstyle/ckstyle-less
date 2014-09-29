# ckstyle-autoprefixer

Autoprefixer Plugin for CKStyle

## Usage

`npm install ckstyle-less`

```javascript

var less = require('ckstyle-less')

var css = '.a { .b {width: 1 + 1;} }'


var res = CKStyle.start(css, {
        fileName: 'a.css'
    })
    .plugin(less, {
        a: 1
    })
    .fix(function(res) {
        console.log(res)  // ==> .a .b {
                          // ==>      width: 2;
                          // ==> }
    })
    .compress()
    .output(function(res) {
        console.log(res)  // ==>  .a .b{width:2}
    })

console.log(res)  // ==> .a .b{width:2}

```