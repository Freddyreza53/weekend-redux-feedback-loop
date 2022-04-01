const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST students
router.post('/', (req, res) => {
    let feedback = req.body;
    const queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

    const values = [
        feedback.feelingInput, 
        feedback.understandingInput, 
        feedback.supportInput, 
        feedback.commentInput
    ];

    pool.query(queryText, values)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;