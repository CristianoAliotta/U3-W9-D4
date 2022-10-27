"use strict";
let url = './assets/json/Abbigliamento.json';
let prom = fetch(url).then(response => response.json());
prom.then(json => console.log(json));
