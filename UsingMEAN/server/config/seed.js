/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
/* Thing specific */
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('Seeded sample users');
    }
  );
});

var Survey = require('../api/survey/survey.model');
Survey.find({}).remove(function(){
  Survey.create({
    QuestionAnswers: [{
      Question: 'This is a test first question',
      AnswerType: ['Text']
    },
    {
      Question: 'This is a test second question',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No']
    }],
    CreatedDate: new Date('01.02.2015'),
    CreatedBy: 'Seeded Survey Guy',
    State: ['Active']
  },{
  QuestionAnswers: [{
      Question: 'What is the name of your first pet?',
      AnswerType: ['Text']
    },
    {
      Question: 'Did you like the service you were given?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No']
    }],
    CreatedDate: new Date('01.02.2015'),
    CreatedBy: 'Seeded Survey Guy',
    State: ['Active']
  }, function(){
    console.log('Seeded sample surveys');
  })
});

/* CompletedSurvey specific */
var CompletedSurvey = require('../api/completedSurvey/completedSurvey.model'); 
CompletedSurvey.find({}).remove(function(){
  CompletedSurvey.create({
    CompletedQuestionAnswers: [{
        Question: 'This is a test first question',
        Answer: 'Sample first answer',
        AnswerType: 'Text'
    },
    {
        Question: 'This is a test second question',
        Answer: 'No,',
        AnswerType: 'Radio'
    }],
    DateCompleted: new Date('01.02.2015'),
    SurveyTaker: 'Survey Taker Guy',
    SurveySupervisor: 'Survey Supervisor Guy'
  },{
  CompletedQuestionAnswers: [{
        Question: 'This is a test first question',
          Answer: 'First question answer',
          AnswerType: 'Text'
      },
      {
          Question: 'This is a test second question',
          Answer: 'Yes,',
          AnswerType: 'Radio'
    }],
    DateCompleted: new Date('01.02.2015'),
    SurveyTaker: 'Survey Taker Guy',
    SurveySupervisor: 'Survey Supervisor Guy'
  },{
  CompletedQuestionAnswers: [{
        Question: 'What is the name of your first pet?',
          Answer: 'Joey',
          AnswerType: 'Text'
      },
      {
          Question: 'Did you like the service you were given?',
          Answer: 'No,',
          AnswerType: 'Radio'
    }],
    DateCompleted: new Date('01.03.2015'),
    SurveyTaker: 'Survey Taker Guy',
    SurveySupervisor: 'Survey Supervisor Girl'
  },{
  CompletedQuestionAnswers: [{
          Question: 'What is the name of your first pet?',
          Answer: 'Joey again',
          AnswerType: 'Text'
      },
      {
          Question: 'Did you like the service you were given?',
          Answer: 'Yes,',
          AnswerType: 'Radio'
    }],
    DateCompleted: new Date('01.03.2015'),
    SurveyTaker: 'Survey Taker Guy',
    SurveySupervisor: 'Survey Supervisor Girl'
  }, function(){
      console.log('Seeding sample completedSurveys');
    }
  );
});