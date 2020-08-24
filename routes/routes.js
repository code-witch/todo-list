const fs = require('fs');


const index = (req, res) => {
    let data = JSON.parse(fs.readFileSync('./config.json'));
    completed = 0;
    for(datum of data) {
        if(datum.completed) {
            completed++;
        }
    }
    res.render('index', {
        list: data,
        completed
    });
}

const update = (req, res) => {
    let data = JSON.parse(fs.readFileSync('./config.json'));
    if(data[req.params.id].completed) {
        data[req.params.id].completed = false;
    } else {
        data[req.params.id].completed = true;
    }
    fs.writeFileSync('./config.json',JSON.stringify(data,null,4), {

    });
    res.redirect('/');
}


module.exports = {
    index,
    update
}