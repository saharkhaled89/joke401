'use strict';

require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const express=require('express');

const pg=require ('pg');
const superagent= require('superagent');
const { response } = require('express');
const PORT=process.env.PORT
const client = new pg.Client(process.env.DATABASE_URL);
const app=express();
app.use(express.static('./public'));
app. get ('/hello',testpage);
app.get('/', homepage);

app.post('/add',addtofav)
app.get('/fav',favjoke);
app.get ('/detail/:id',showdetails)
app.post('/update/:id',updatejoke)
app.post('/delete/:id',deletejoke)

function testPage(req,res){
    res.status(200).send('hello')
}
function homepage (req,res){

    const url=`https://github.com/15Dkatz/official_joke_api`;
    superagent.get(url)
    .then(data=>{
        res.render('index',{joke:data.body})
    })
}

function addtofav(req,res){
    let{ joke_type, joke_setup,joke_punchline}=req.body;
    let SQL=
    `INSERT INTO jockeTable(joke_type, joke_setup,joke_punchline)VALUES($1,$2,$3) `;
    let safeValues=[joke_type, joke_setup,joke_punchline];
    client.query(SQL,safeValues)
    .then(()=>{
        res.redirect('/fav');
})
}


function addtofav(req,res){
    let{ joke_type, joke_setup,joke_punchline}=req.body;
    let SQL=
    `INSERT INTO jockeTable(joke_type, joke_setup,joke_punchline)VALUES($1,$2,$3) `;
    let safeValues=[joke_type, joke_setup,joke_punchline];
    client.query(SQL,safeValues)
    .then(()=>{
        res.redirect('/fav');
})
}

function favjoke(req,res){

    let SQL =`SELECT*FROM jockeTable`;
    client.query(SQL)
    .then((data)=>{
        response.render('fav',{joke:data.rows});
}

function updatejoke(req,res){

    let{ joke_type, joke_setup,joke_punchline}=req.body;
    let SQL=
    `INSERT INTO jockeTable(joke_type, joke_setup,joke_punchline)VALUES($1,$2,$3) `;
    let value=[req.params.id];
    client.query(SQL,value);

  .then((data)=>{
        response.render('detail',{joke:data.rows[0]});
}

