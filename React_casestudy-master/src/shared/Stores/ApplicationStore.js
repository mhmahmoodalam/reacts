var Dispatcher=require('./../Dispatcher/dispatcher.js').AppDispatcher;
var _=require('underscore');
var EventEmitter=require('events').EventEmitter;
var AjaxHelper=require('./../Helper/AjaxHelper.js');
var ChatWebAPIUtils = require('./../Helper/ChatWebAPIUtils');
var Router =require('react-router');
var IssueConstants=require('./../Constants/IssueConstants');
import React from 'react';
import {Redirect} from 'react-router-dom';

var CHANGE_EVENT="change";
var _purchasedItems=[];
var _productDetails=[];
var _feedbackDetails=[];
var _notifications=[];

function ValidateCreds(cred){
  var data=AjaxHelper.login("/login",cred);
  sessionStorage.setItem("username",cred.username);
  sessionStorage.setItem("role",data.role);
  console.log("inside validatecreds");
}

function AddFeedback(feedbackDetails){
  AjaxHelper.submitFeedback('/submitFeedback',feedbackDetails);
}

function DiscontinueProd(pdtCode){
  AjaxHelper.discontinueProd('/discontinue',pdtCode);
}

function Logout(){
  ChatWebAPIUtils.disconnect();
  AjaxHelper.logout('/logout',{});
  console.log('from logout store');
  sessionStorage.clear();
  console.log("loggedout",sessionStorage.getItem('username'));
}

var ApplicationStore=_.extend({},EventEmitter.prototype,{
  FetchAdminNotifications:function(){
    _notifications=AjaxHelper.fetchAdminNotifications('/dashboard',null);
    return _notifications;
  },
  FetchPurchasedItems:function(user){
    _purchasedItems=AjaxHelper.fetchItems("/purchasedItems",user);
    return _purchasedItems;
  },
  FetchProductDetails:function(pdtId){
    _productDetails=AjaxHelper.pdtDetails("/productDetails",pdtId);
    return _productDetails;
  },
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  isAuthenticated:function(){
    if(sessionStorage.getItem('username')){
      return true;
    }
    return false;
  },
  isLogout:function(){
    if(!sessionStorage.getItem('username')){
      return true;
    }
    else {
      return false;
    }
  }
});

Dispatcher.register(function(payload){
  var action=payload.action;
  switch(action.actionType){

    case IssueConstants.LOGIN:
      ValidateCreds(payload.action.data);
      break;

    case IssueConstants.PURCHASED_ITEMS:
      FetchPurchasedItems(payload.action.data);
      break;

    case IssueConstants.SUBMIT_FEEDBACK:
      AddFeedback(payload.action.data);
      break;

    case IssueConstants.DISC_PDT:
      console.log(payload.action.data);
      DiscontinueProd(payload.action.data);
      break;

    case IssueConstants.LOGOUT:
      console.log("YOU ARE GONNA LOGGEDOUT");
      Logout();
      break;

    default:
      return true;
  }

  ApplicationStore.emitChange();

  return true;
});



module.exports=ApplicationStore;
