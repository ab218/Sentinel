"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res, next) => {
    knex.select('*').from('users')
      .then((results) => {
        res.json(results)
      })
      .catch((e) => {
        res.status(500).send(e);
      })
      
  });

  router.get("/:id", (req, res, next) => {
    knex.select('*').from('users')
      .where('id', '=', req.params.id)
      .then((results) => {
        res.json(results)
      })
      .catch((e) => {
        res.status(500).send(e);
      })
      
  });
  router.get("/:id/vehicles", (req, res, next) => {
    knex.select('*').from('vehicles')
      .where('user_id', '=', req.params.id)
      .then((results) => {
        res.json(results)
      })
      .catch((e) => {
        res.status(500).send(e);
      })
      
  });
  return router
}