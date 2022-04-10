__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api', (req, res) => {
    config = {
        status: true,
        result: {
            author : 'R - hndrr',
            github: 'ItsmeHndrr',
            instagram: 'Hndrmdhn_',
            youtube: 'hndrmdhn 17',
            docs: 'https://github.com/Zhirrr/islamic-rest-api-indonesian-v2'
        }
    }
    res.json(config)
})

module.exports = router
