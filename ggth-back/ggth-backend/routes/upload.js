const express = require('express');
const router = express.Router();
const mysqldump = require('mysqldump');

const mysql = require('serverless-mysql')({
  config: {
    // host: '66.147.249.208',
    host: '127.0.0.1',
    port: '3306',
    // port: '3000',
    database: 'clafenor_ggth',
    user: 'clafenor_chirris',
    password: 'zudenSachen0!0',
  },
});

const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Set desired value here
    },
  },
};

const truncateTable = async () => {
  //Make a backup of the database
  await mysqldump({
    connection: {
      host: 'localhost',
      user: 'clafenor_chirris',
      password: 'zudenSachen0!0',
      database: 'clafenor_ggth',
    },
    dumpToFile: './respaldo.sql',
  });

  //Truncate the table
  try {
    const truncate = await mysql.query('TRUNCATE TABLE TGlosario;');
    await mysql.end();
  } catch (error) {
    console.log(error);
  }
};

/* GET users listing. */
router.get('/', async (req, res, next) => {
  await truncateTable();
  const arrayFile = req.body.data;
  await arrayFile.forEach(async (element) => {
    try {
      await mysql.query(
        'INSERT INTO TGlosario(RId, TSHARP, YR, AU, ST, C1, C2, C3, C4, C5, C6, C7, C8, C9, N1, N2, N3, N4, N5, N6, N7, N8, N9, O1, O2, O3, O4, O5, O6, O7, O8, O9, S1, S2, S3, S4, S5, S6, S7, S8, S9, LSHARP, L0) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          element.RId,
          element.TSHARP,
          element.YR,
          element.AU,
          element.ST,
          element.C1,
          element.C2,
          element.C3,
          element.C4,
          element.C5,
          element.C6,
          element.C7,
          element.C8,
          element.C9,
          element.N1,
          element.N2,
          element.N3,
          element.N4,
          element.N5,
          element.N6,
          element.N7,
          element.N8,
          element.N9,
          element.O1,
          element.O2,
          element.O3,
          element.O4,
          element.O5,
          element.O6,
          element.O7,
          element.O8,
          element.O9,
          element.S1,
          element.S2,
          element.S3,
          element.S4,
          element.S5,
          element.S6,
          element.S7,
          element.S8,
          element.S9,
          element.LSHARP,
          element.L0,
        ]
      );
    } catch (error) {
      console.log(error);
    }
  });
  await mysql.end();

  return res.send('Done!');
});

module.exports = router;
