const express = require('express');
const router = express.Router();

const mysql = require('serverless-mysql')({
  config: {
    //host: '66.147.249.208',
    host: '127.0.0.1',
    port: '3306',
    // port: '3000',
    database: 'clafenor_ggth',
    user: 'clafenor_chirris',
    password: 'zudenSachen0!0',
  },
});

const version1 = (version, currentDay) => {
  console.log(version);
  try {
    const insertV = mysql.query(
      'INSERT INTO TConfiguracion(VersionPublicacion, FechaPublicacion) VALUES(?,?)',
      [version, currentDay]
    );
  } catch (error) {
    console.log(error);
  }
  mysql.end();
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  const version = Object.values(req.body);

  const date = new Date();
  const currentDay =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  const results = version1(version, currentDay);
  return res.send('Version actualizada');
});

module.exports = router;
