///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>

import 'zone.js/dist/zone';
import 'reflect-metadata';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Component, OnInit} from '@angular/core';
import {bootstrap} from "@angular/platform-browser-dynamic";
import {App}         from 'components/app'


bootstrap(App);
