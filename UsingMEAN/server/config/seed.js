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
      Question: 'Which community (or rural area) do you live?',
      AnswerType: ['Text']
    },
                      {
      Question: 'How many years have you lived in this community?',
      AnswerType: ['Text']
    },
                      {
      Question: 'Is there a wide difference in performance between the available hospitals in this area?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
                      {
      Question: 'Do you have a favorite hospital?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No']
    },
                      {
      Question: 'Is there a wide difference in the cost of the different hospitals in this area?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
                      {
      Question: 'Do you receive considerable amount of pressure from other family members to get health care problems taken care of promptly?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Only Sometimes']
    },
                      {
      Question: 'Do you feel comfortable judging the differences between hospitals in this area?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
                      {
      Question: 'Do you generally receive care from the same hospital?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
                      {
      Question: 'Can you be helpful to friends who are having difficulty making section of a hospital?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
                      {
      Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
                      {
      Question: 'Does the hospital have modern operating room facilities?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
                      {
      Question: 'Overall cleanliness of the hospital?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
                      {
      Question: 'Efficiency of nursing care?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
                      {
      Question: 'Friendliness and courtesy of the staff?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
                      {
      Question: 'Convenience of location for you?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
                      {
      Question: 'Cost to you?',
      AnswerType: ['Radio'],
      AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
                      {
      Question: 'What kind of medical insurance coverage do you have?',
      AnswerType: ['Radio'],
      AnswerOptions: ['None', 'Private', 'Employer Sponsored', 'Medical Aid', 'Other']
    },
                      {
      Question: 'How many times have you and any member of your family been to your doctor in the last year?',
      AnswerType: ['Text']
    },
                      {
      Question: 'How many times have you visited a friend or loved one in the hospital in the last year?',
      AnswerType: ['Text']
    },
                      {
      Question: 'How many times have you and other members of your family been a patient in a hospital in the last 3 years?',
      AnswerType: ['Text']
    },
                      {
      Question: 'Which source of care would you prefer if you had a personal injury that could be handled equally well by each of these sources of health care:',
      AnswerType: ['Radio'],
      AnswerOptions: ['I would prefer to go to a walk in clinic', 'I would prefer to go to my personal pysician', 'I would prefer to go to the hospital emergency room', 'Other']
    },
                      {
      Question: 'If you or a member of your family have received medical care at another hospital while living in the [HOSPITAL] area, why did you choose the other hospital?',
      AnswerType: ['Radio'],
      AnswerOptions: ['A specialist was available', 'Special hospital care was required that was not available in the local area', 'My physician practices there', 'More familiar with that hospital', 'Wanted a second opinion from another physician', 'Religious preference', 'Cost was too high in the local area', 'Other']
    },
                      {
      Question: 'Sex of person completing this questionnaire:',
      AnswerType: ['Radio'],
      AnswerOptions: ['Male', 'Female']
    },
                      {
      Question: 'Age of person completing this questionnaire:',
      AnswerType: ['Text']
    },
                      {
      Question: 'Number of Children',
      AnswerType: ['Text']
    },
                      {
      Question: 'Marital status of person completing this questionnaire:',
      AnswerType: ['Radio'],
      AnswerOptions: ['Married', 'Widow(er)', 'Divorced or Separate', 'Have Never Been Married']
    },
                      {
      Question: 'What was your total household income (from all sources, in Rands) before taxes for the year [Year]?',
      AnswerType: ['Text']
    },
                      {
      Question: 'Please indicate the highest level of formal education that you have completed.',
      AnswerType: ['Radio'],
      AnswerOptions: ['Matric', 'University Graduate', 'Other']
    },
                      {
      Question: 'What is your primary occupation',
      AnswerType: ['Text']
    }],
    CreatedDate: new Date('01.02.2015'),
    CreatedBy: 'Seeded Survey Guy',
    State: ['Active'],
    Name: 'Medical Health Survey'
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
    State: ['Active'],
    Name: 'Survey 2'
  }, function(){
    console.log('Seeded sample surveys');
  })
});

/* CompletedSurvey specific */
var CompletedSurvey = require('../api/completedSurvey/completedSurvey.model'); 
CompletedSurvey.find({}).remove(function(){
  CompletedSurvey.create({
  CompletedQuestionAnswers: [{
        Question: 'What is the name of your first pet?',
          Answer: 'Joey',
          AnswerType: 'Text'
      },
      {
          Question: 'Did you like the service you were given?',
          Answer: 'No',
          AnswerType: 'Radio'
    }],
    DateCompleted: new Date('01.03.2015'),
    SurveyTaker: 'Survey Taker Guy',
    SurveySupervisor: 'Survey Supervisor Girl',
    SurveyName: 'Survey 2'
  },{
  CompletedQuestionAnswers: [{
          Question: 'What is the name of your first pet?',
          Answer: 'Joey again',
          AnswerType: 'Text'
      },
      {
          Question: 'Did you like the service you were given?',
          Answer: 'Yes',
          AnswerType: 'Radio'
    }],
    DateCompleted: new Date('01.03.2015'),
    SurveyTaker: 'Survey Taker Guy',
    SurveySupervisor: 'Survey Supervisor Girl',
    SurveyName: 'Survey 2'
  }, function(){
      console.log('Seeding sample completedSurveys');
    }
  );
});