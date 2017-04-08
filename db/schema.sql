CREATE DATABASE youhired;

DROP TABLE contactNotes, contactApplicationJoin, contacts, activityLog, jobApplication, tokens, users;

DELETE FROM jobApplication;





--enter in in ONE command!

CREATE TABLE users (
  userId SERIAL PRIMARY KEY,
  seedUserId INT,
  userEmail VARCHAR(100) UNIQUE NOT NULL,
  userPassword VARCHAR(255) UNIQUE NOT NULL,
  userFirstName VARCHAR(50) NOT NULL,
  userLastName VARCHAR(50) NOT NULL
);

CREATE TABLE tokens (
  token VARCHAR(255) PRIMARY KEY,
  userId INT,
  seedUserId INT,
  FOREIGN KEY (userId) REFERENCES users (userId)
  -- FOREIGN KEY (seedUserId) REFERENCES users (seedUserId)
);

CREATE TABLE jobApplication (
  applicationId SERIAL PRIMARY KEY,
  seedApplicationId INT,
  userId INT,
  seedUserId INT,
  positionName VARCHAR(100),
  companyName VARCHAR(100),
  jobPostURL VARCHAR(1500),
  status VARCHAR(50),
  companyAddress VARCHAR(150),
  companyCity VARCHAR(150),
  companyState CHAR(2),
  companyZip CHAR(5),
  offerSalary INT,
  offerOptions VARCHAR(2000),
  offerBenefits VARCHAR(5000),
  FOREIGN KEY (userId) REFERENCES users (userId)
  -- FOREIGN KEY (seedUserId) REFERENCES users (seedUserId)
);

CREATE TABLE activityLog (
  activityLogId SERIAL PRIMARY KEY,
  applicationId INT,
  seedApplicationId INT,
  activityType VARCHAR(50),
  activityLogContent VARCHAR(1000),
  activityCreatedAt TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (applicationId) REFERENCES jobApplication (applicationId)
  -- FOREIGN KEY (seedApplicationId) REFERENCES jobApplication (seedApplicationId)
);

CREATE TABLE contacts (
  contactId SERIAL PRIMARY KEY,
  seedContactId INT,
  userId INT,
  seedUserId INT,
  contactFirstName VARCHAR(50),
  contactLastName VARCHAR(50),
  contactCompany VARCHAR(100),
  contactPositionTitle VARCHAR(100),
  contactPhoneNumber VARCHAR(14),
  contactEmail VARCHAR(100),
  contactAddress VARCHAR(255),
  contactCity VARCHAR(100),
  contactState VARCHAR(2),
  contactZip INT,
  secondaryPhoneNumber VARCHAR(14),
  secondaryEmail VARCHAR(100),
  FOREIGN KEY (userId) REFERENCES users (userId)
);

CREATE TABLE contactApplicationJoin (
  contactId INT,
  seedContactId INT,
  applicationId INT,
  seedApplicationId INT,
  FOREIGN KEY (contactId) REFERENCES contacts (contactId),
  -- FOREIGN KEY (seedContactId) REFERENCES contacts (seedContactId),
  FOREIGN KEY (applicationId) REFERENCES jobApplication (applicationId)
  -- FOREIGN KEY (seedApplicationId) REFERENCES jobApplication (seedApplicationId)
);

CREATE TABLE contactNotes (
  notesId SERIAL PRIMARY KEY,
  contactId INT,
  seedContactId INT,
  notesContent VARCHAR(1000),
  activityCreatedAt TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (contactId) REFERENCES contacts (contactId)
  -- FOREIGN KEY (seedContactId) REFERENCES contacts (seedContactId)
);

------------------------------------------------

--SEEDING COMMANDS--

--INSERT THREE USERS INTO USERS TABLE--

INSERT INTO users(seedUserId, userEmail, userPassword, userFirstName, userLastName) VALUES (111111, 'samsimple@gmail.com', '3kjblkj4j3nin2i1', 'Sam', 'Simple'),
(222222, 'susysimple@gmail.com', '3kjb3s24j3nin2i1', 'Susy', 'Simple'),
(333333, 'johndoe@gmail.com', '3kjbdhw4j3nin2i1', 'John', 'Doe');

--INSERT SEVERAL JOBS AT SEVERAL STAGES INTO JOBAPPLICATION TABLE (ALL ARE ASSOCIATED WITH USER 111111--

INSERT INTO jobApplication(seedApplicationId, seedUserId, positionName, companyName, jobPostURL, status, companyAddress, companyCity, companyState, companyZip) VALUES
(222, 111111, 'Open feedback dialog Principal, Strategy and Business Operations, Google Cloud', 'Google', 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Strategic_Account_Specialist_Google_Cloud_Google_LinkedIn_liseeq.pdf', 'INTERVIEW', 'One Great Google Way', 'Mountain View',  'CA', 94015),
(333, 111111, 'Leasing Specialist ­Xchange', 'Uber', 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Careers_at_Uber_Leasing_Specialist_-_Xchange_-_Richmond_CA_jqddoy.pdf', 'INTERVIEW', '1000 Awesome Uber Way', 'Oakland', 'CA', 58438);

INSERT INTO jobApplication(seedApplicationId, seedUserId, positionName, companyName, jobPostURL, status) VALUES
(111, 111111, 'Business Analyst', 'LifeLock', 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607406/Business_Analyst_LifeLock_LinkedIn_rq6sep.pdf', 'INTERESTED');

INSERT INTO jobApplication(seedApplicationId, seedUserId, positionName, companyName, jobPostURL, status, companyAddress, companyCity, companyState, companyZip, offerSalary, offerOptions, offerBenefits) VALUES (444, 111111, 'Security Engineer, Information Security', 'Pinterest', 'http://res.cloudinary.com/dlsmih11r/image/upload/r_11/v1491607405/Security_Engineer_Information_Security_Pinterest_Careers_od1vyr.pdf', 'OFFER', '12 Pinterest Point', 'San Francisco', 'CA', 94101, 110000, '1000 shares at $10 each', 'Health, Dental, 4 weeks paid vacation'),
  (555, 111111, 'Web Producer', 'Okta', 'http://res.cloudinary.com/dlsmih11r/image/upload/v1491607405/Web_Producer_-_Okta_Jobs.com_ltemve.pdf', 'OFFER', '12 Okta Way', 'San Francisco', 'CA', 94401, 120000, '2000 shares at $10 each', 'Health, Dental, Vision, childcare');

--INSERT ACTIVITIES FOR A JOBAPPLICATION--

INSERT INTO activityLog (seedApplicationId, activityType, activityLogContent) VALUES
(444, 'NOTE', 'saw job and applied'),
(444, 'NOTE', 'recruiter called me back and said they were interested in chatting further.  Very cool!'),
(444, 'ARTICLE', 'http://www.adweek.com/digital/pinterest-175-million-monthly-active-users/'),
(444, 'ARTICLE', 'http://www.cnbc.com/2017/04/03/pinterest-ceo-future-of-search.html'),
(444, 'NOTE', 'did some research'),
(444, 'NOTE', 'recruiter called back and said they were interested in setting up a phone screen'),
(444, 'NOTE', 'had phone screen today she said to prepare on toy problems, especially ones dealing with time complexity'),
(444, 'NOTE', 'have not heard anything for a week.  Emailed recruiter'),
(444, 'NOTE', 'heard back.  they want to set up an interview!  The interview will be in two weeks.'),
(444, 'ARTICLE', 'http://www.adweek.com/digital/pinterest-app-shortcuts-android/'),
(444, 'NOTE', 'recruiter called to set up time for interview prep session'),
(444, 'NOTE', 'had prep session with recruiter.  Need to improve the tell me about yourself question'),
(444, 'NOTE', 'had interview.  Ultimately I think it went alright except for the second interviewer whoe would not stop giving me other toy problems to do.  He gave me like 1000 of them.  He also seemed a bit cranky - maybe he had a bad day.  But everyone else was great, and I got a good vibe from the place.  Certainly hope that they make me an offer');

--INSERT CONTACTS INTO CONTACTS TABLE--

INSERT INTO contacts(seedUserId, seedContactId, contactFirstName, contactLastName, contactCompany, contactPositionTitle, contactPhoneNumber, contactEmail, contactAddress, contactCity, contactState, contactZip, secondaryPhoneNumber, secondaryEmail) VALUES
(111111, 123451, 'Connie', 'Machado', 'JobsRUs', 'Tech Recruiter', '(291) 391-1928', 'cmachado@gmail.com', 'contactAddress', 'San Jose', 'CA', 94931, '(111) 291-4932', 'connie@hotmail.com'),
(111111, 123452, 'Bradford', 'Sharpe', 'Pinterest', 'VP Engineering', '(111) 291-4932', 'bsharpe@pinterest.com', '3821 Pinterest Place', 'San Francisco', 'CA', 48321, '(222) 222-2222', 'bsharpe@hotmail.com'),
(111111, 123453, 'Rodrigo', 'DeSouza', 'Pinterest', 'Back End Engineer', '(333) 333-3333', 'rodrigo@pinterest.com', '3821 Pinterest Place', 'San Francisco', 'CA', 48321, '(444) 444-4444', 'rodrigo@hotmail.com');

INSERT INTO contactApplicationJoin(seedContactId, seedApplicationId) VALUES
(123451, 444),
(123451, 222),
(123451, 333),
(123452, 444),
(123453, 444);

--TEST QUERIES--

SELECT u.userfirstName, u.userlastName, a.positionName, a.companyName, c.contactFirstName, c.contactLastName, c.contactCompany, c.contactPositionTitle FROM (((users u INNER JOIN jobApplication a ON u.seedUserId = a.seedUserId) INNER JOIN contactApplicationJoin j ON a.seedApplicationId = j.seedApplicationId) INNER JOIN contacts c ON j.seedContactId = c.seedContactId);






