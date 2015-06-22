/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
/* Thing specific */
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function () {
    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
    }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});

User.find({}).remove(function () {
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
    }, function () {
        console.log('Seeded sample users');
    });
});

var Survey = require('../api/survey/survey.model');
Survey.find({}).remove(function () {
    Survey.create({
        QuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text'
    },
            {
                Question: 'Which age group do you fall into?',
                AnswerType: 'Dropdown',
                AnswerOptions: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80+']
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                AnswerOptions: ['Yes', 'No', 'Sometimes']
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                AnswerOptions: ['Yes', 'No', 'Sometimes']
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                AnswerOptions: ['1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6-7 hours', '7-8 hours', 'longer than 8 hours']
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                AnswerOptions: ['Yes', 'No', 'Not Sure']
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                AnswerOptions: ['Very Satisfied', 'Somewhat Satisfied', 'Neutral', 'Somewhat Dissatisfied', 'Dissatisfied', 'Not Sure']
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text'
    }],
        CreatedDate: new Date('01.02.2015'),
        CreatedBy: 'Seeded Survey Guy',
        State: 'Active',
        Name: 'Medical Health Survey'
    },{
        QuestionAnswers: [{
                Question: 'What is your favourite food?',
                AnswerType: 'Text'
    },
            {
                Question: 'What is your favourite restaurant? ',
                AnswerType: 'Text',
    }],
        CreatedDate: new Date('01.02.2015'),
        CreatedBy: 'Seeded Survey Guy',
        State: 'Active',
        Name: 'Sample Food Survey'
    }, function () {
        console.log('Seeded sample surveys');
    })
});

/* CompletedSurvey specific */
var CompletedSurvey = require('../api/completedSurvey/completedSurvey.model');
CompletedSurvey.find({}).remove(function () {
    CompletedSurvey.create({
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '10-20'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date(),
        SurveyTaker: 'Joe Soap',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '20-30'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '1-2 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-03-01'),
        SurveyTaker: 'Nakesha Sulzer',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '20-30'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-03-01'),
        SurveyTaker: 'Han Ali',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '20-30'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-02-03'),
        SurveyTaker: 'Wendolyn Delagarza',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '30-40'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-01-03'),
        SurveyTaker: 'Maegan Neville',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '10-20'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-03-03'),
        SurveyTaker: 'Willie Ruby',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '20-30'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-04-03'),
        SurveyTaker: 'Brigida Sawyers',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '10-20'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-05-03'),
        SurveyTaker: 'Keena Degraff',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '10-20'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2015-06-03'),
        SurveyTaker: 'Marianna Catlin',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, {
        CompletedQuestionAnswers: [{
                Question: 'Which community (or rural area) do you live?',
                AnswerType: 'Text',
                Answer: 'KZN'
    },
            {
                Question: 'Which age group do you fall into? ',
                AnswerType: 'Dropdown',
                Answer: '10-20'
    },
            {
                Question: 'Do you pay more for the same service at certain hospitals?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Was there adequate staff at the hospitals you visited?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How long on average did you wait?',
                AnswerType: 'Dropdown',
                Answer: '2-3 hours'
    },
            {
                Question: 'Was there good signage in the hospital?',
                AnswerType: 'YesNo',
                Answer: 'No'
    },
            {
                Question: 'How satisfied are you with the skill and competency of the staff?',
                AnswerType: 'Dropdown',
                Answer: 'Very Satisfied'
    },
            {
                Question: 'Does the hospital have equipment for modern diagnosis and treatment?',
                AnswerType: 'YesNo',
                Answer: 'Yes'
    },
            {
                Question: 'Overall cleanliness of the hospital?',
                AnswerType: 'Dropdown',
                Answer: 'Somewhat Satisfied'
    },
            {
                Question: 'Efficiency of nursing care?',
                AnswerType: 'Dropdown',
                Answer: 'Neutral'
    },
            {
                Question: 'Can you suggest any improvements to the hospital?',
                AnswerType: 'Text',
                Answer: 'None as yet'
    }],
        DateCompleted: new Date('2014-01-03'),
        SurveyTaker: 'Eliseo Selph',
        SurveySupervisor: 'Survey Supervisor Girl',
        SurveyName: 'Medical Health Survey'
    }, function () {
        console.log('Seeding sample completedSurveys');
    });
});