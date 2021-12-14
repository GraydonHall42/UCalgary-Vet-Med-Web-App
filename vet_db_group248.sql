DROP DATABASE IF EXISTS vet_db_group248;
CREATE DATABASE vet_db_group248;
USE vet_db_group248;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	user_id				int not null auto_increment,
	first_name			varchar(25) not null,
    last_name			varchar(25) not null,
    email				varchar(25) not null,
    phone				varchar(15) not null,
    password			varchar(100) not null,
    blocked				boolean not null,
	primary key (user_id)
);

INSERT INTO USER (first_name, last_name, email, phone, password, blocked)
VALUES ('Jared', 'Kraus', 'jared@gmail.com', '403-403-1111', '$2a$10$NvpSu0zOBo9gOV8VfQZcRuZW4uBeRy7lfIByk6GC1SZEwpiOste8m', false),
       ('Deylin', 'Yiao', 'deylin@gmail.com', '403-403-2222', '$2a$10$6p2AAfe4N3nBH.ryM3X8q.GioiaUJPD8Tux2Ox3BT4ZITEULyMN0G', false),
       ('Graydon', 'Hall', 'graydon@gmail.com', '403-403-3333', '$2a$10$px44AetKRxJczf0R5EtfvuVqWzpH2m9OY8EcjnaesdcbDzWVj1rpG', false),
       ('Karen', 'Kares', 'karen@gmail.com', '403-403-4444', '$2a$10$NvpSu0zOBo9gOV8VfQZcRuZW4uBeRy7lfIByk6GC1SZEwpiOste8m', false),
       ('Susan', 'Sue', 'susan@gmail.com', '403-403-5555', '$2a$10$6p2AAfe4N3nBH.ryM3X8q.GioiaUJPD8Tux2Ox3BT4ZITEULyMN0G', false),
       ('Heather', 'Heat', 'heather@gmail.com', '403-403-6666', '$2a$10$px44AetKRxJczf0R5EtfvuVqWzpH2m9OY8EcjnaesdcbDzWVj1rpG', false);
       
DROP TABLE IF EXISTS ROLES;
create table ROLES
(
	role_id int not null auto_increment,
    user_id int not null,
	name varchar(25) not null,
	primary key (role_id),
    foreign key (user_id) references USER(user_id)
);

INSERT INTO ROLES (user_id, name)
VALUES (1, 'ADMIN'),
       (2, 'TEACHING_TECH'),
       (3, 'HEALTH_TECH'),
       (4, 'CARE_ATTENDANT'),
       (5, 'STUDENT'),
       (6, 'ADMIN');

DROP TABLE IF EXISTS ANIMAL;
create table ANIMAL
(
	animal_id int not null auto_increment,
	animal_name     varchar(255) not null,
	animal_type     varchar(255) not null,
	profile_photo      varchar(255) not null,
	sex             varchar(255) not null,
	birth_date      date,
	color           varchar(255) not null,
	active          boolean not null,
	microchip_num   int,
	breed           varchar(255),
	last_checkup    date,
	status          varchar(255),
	primary key (animal_id)
);


INSERT INTO ANIMAL (animal_name, animal_type, profile_photo, sex, birth_date, color, active, microchip_num, breed, last_checkup, status)
VALUES ('Spud', 'Dog', '/images/dogs/dog1.jpg', 'male', "2020-02-14", "white", true, 1234, "Corgi", "2021-10-01", "Attention"),
       ('Jimmy2', 'Dog', '/images/dogs/dog2.jpg', 'female', "2019-03-14", "white", true, 1235, "Corgi", "2021-10-01", "Healthy"),
       ('Jimmy3', 'Dog', '/images/dogs/dog3.jpg', 'male', "2018-04-14", "white", true, 1236, "Corgi", "2021-10-01", "Healthy"),
       ('Jimmy4', 'Dog', '/images/dogs/dog4.jpg', 'female', "2017-05-14", "white", true, 1237, "Corgi", "2021-10-01", "Attention"),
       ('Jimmy5', 'Dog', '/images/dogs/dog5.jpg', 'male', "2020-06-14", "white", true, 1238, "Beagle", "2021-10-01", "Healthy"),
       ('Jimmy6', 'Dog', '/images/dogs/dog6.jpg', 'female', "2019-07-14", "white", true, 1239, "Beagle", "2021-10-01", "Urgent"),
       ('Jimmy7', 'Dog', '/images/dogs/dog7.jpg', 'male', "2018-08-14", "white", true, 1240, "Beagle", "2021-10-01", "Healthy"),
       ('Jimmy8', 'Dog', '/images/dogs/dog8.jpg', 'female', "2017-09-14", "white", true, 1241, "Beagle", "2021-10-01", "Attention"),
       ('Ralph1', 'Cat', '/images/cats/cat1.jpg', 'male', "2017-10-14", "white", true, 1242, "Persian", "2021-10-01", "Healthy"),
       ('Ralph2', 'Cat', '/images/cats/cat2.jpg', 'female', "2016-11-14", "white", true, 1243, "Persian", "2021-10-01", "Healthy"),
       ('Ralph3', 'Cat', '/images/cats/cat3.jpg', 'male', "2020-01-14", "white", true, 1244, "Persian", "2021-10-01", "Healthy"),
       ('Ralph4', 'Cat', '/images/cats/cat4.jpg', 'female', "2021-02-14", "white", true, 1245, "Persian", "2021-10-01", "Attention"),
       ('Ralph5', 'Cat', '/images/cats/cat5.jpg', 'male', "2021-03-14", "white", true, 12346, "Munchkin", "2021-10-01", "Healthy"),
       ('Ralph6', 'Cat', '/images/cats/cat6.jpg', 'female', "2015-04-14", "white", true, 1247, "Munchkin", "2021-10-01", "Urgent"),
       ('Ralph7', 'Cat', '/images/cats/cat7.jpg', 'male', "2016-05-14", "white", true, 1248, "Munchkin", "2021-10-01", "Healthy"),
       ('Ralph8', 'Cat', '/images/cats/cat8.jpg', 'female', "2017-06-14", "white", true, 1249, "Munchkin", "2021-10-01", "Healthy"),
       ('Mercury1', 'Horse', '/images/horses/horse1.jpg', 'male', "2018-07-14", "white", true, 1250, "Arabian", "2021-10-01", "Healthy"),
       ('Mercury2', 'Horse', '/images/horses/horse2.jpg', 'female', "2019-08-14", "white", true, 1251, "Arabian", "2021-10-01", "Healthy"),
       ('Mercury3', 'Horse', '/images/horses/horse3.jpg', 'male', "2020-09-14", "white", true, 1252, "Arabian", "2021-10-01", "Attention"),
       ('Mercury4', 'Horse', '/images/horses/horse4.jpg', 'female', "2021-10-14", "white", true, 1253, "Arabian", "2021-10-01", "Healthy"),
       ('Mercury5', 'Horse', '/images/horses/horse5.jpg', 'male', "2020-11-14", "white", true, 1254, "Clydesdale", "2021-10-01", "Healthy"),
       ('Mercury6', 'Horse', '/images/horses/horse6.jpg', 'female', "2018-12-14", "white", true, 1255, "Clydesdale", "2021-10-01", "Healthy"),
       ('Mercury7', 'Horse', '/images/horses/horse7.jpg', 'male', "2019-01-14", "white", true, 1256, "Clydesdale", "2021-10-01", "Healthy"),
       ('Mercury8', 'Horse', '/images/horses/horse8.jpg', 'female', "2020-02-14", "white", true, 1257, "Clydesdale", "2021-10-01", "Urgent");


DROP TABLE IF EXISTS WEIGHT;
CREATE TABLE WEIGHT(
    weight_id        int auto_increment,
    animal_id        int not null,
    date            datetime,
    weight          double,
    primary key (weight_id),
    foreign key (animal_id) references ANIMAL(animal_id)
);

INSERT INTO WEIGHT (animal_id, date, weight)
VALUES (1, '2021-09-01', 85),
       (1, '2021-10-01', 95),
       (1, '2021-11-01', 100),
       (1, '2021-12-01', 110),
       (2, '2021-09-01', 22),
       (2, '2021-10-01', 23),
       (2, '2021-11-01', 24),
       (2, '2021-12-01', 25),
       (3, '2021-09-01', 15),
       (3, '2021-10-01', 16),
       (3, '2021-11-01', 17),
       (3, '2021-12-01', 18),
       (4, '2021-09-01', 16),
       (4, '2021-10-01', 17),
       (4, '2021-11-01', 18),
       (4, '2021-12-01', 19),
       (5, '2021-09-01', 25),
       (5, '2021-10-01', 26),
       (5, '2021-11-01', 27),
       (5, '2021-12-01', 28),
       (6, '2021-09-01', 22),
       (6, '2021-10-01', 23),
       (6, '2021-11-01', 24),
       (6, '2021-12-01', 25),
       (7, '2021-09-01', 15),
       (7, '2021-10-01', 16),
       (7, '2021-11-01', 17),
       (7, '2021-12-01', 18),
       (8, '2021-09-01', 16),
       (8, '2021-10-01', 17),
       (8, '2021-11-01', 18),
       (8, '2021-12-01', 19),
       (9, '2021-09-01', 25),
       (9, '2021-10-01', 26),
       (9, '2021-11-01', 27),
       (9, '2021-12-01', 28),
       (10, '2021-09-01', 22),
       (10, '2021-10-01', 23),
       (10, '2021-11-01', 24),
       (10, '2021-12-01', 25),
       (11, '2021-09-01', 15),
       (11, '2021-10-01', 16),
       (11, '2021-11-01', 17),
       (11, '2021-12-01', 18),
       (12, '2021-09-01', 16),
       (12, '2021-10-01', 17),
       (12, '2021-11-01', 18),
       (12, '2021-12-01', 19),
       (13, '2021-09-01', 25),
       (13, '2021-10-01', 26),
       (13, '2021-11-01', 27),
       (13, '2021-12-01', 28),
       (14, '2021-09-01', 22),
       (14, '2021-10-01', 23),
       (14, '2021-11-01', 24),
       (14, '2021-12-01', 25),
       (15, '2021-09-01', 15),
       (15, '2021-10-01', 16),
       (15, '2021-11-01', 17),
       (15, '2021-12-01', 18),
       (16, '2021-09-01', 16),
       (16, '2021-10-01', 17),
       (16, '2021-11-01', 18),
       (16, '2021-12-01', 19),
       (17, '2021-09-01', 25),
       (17, '2021-10-01', 26),
       (17, '2021-11-01', 27),
       (17, '2021-12-01', 28),
       (18, '2021-09-01', 22),
       (18, '2021-10-01', 23),
       (18, '2021-11-01', 24),
       (18, '2021-12-01', 25),
       (19, '2021-09-01', 15),
       (19, '2021-10-01', 16),
       (19, '2021-11-01', 17),
       (19, '2021-12-01', 18),
       (20, '2021-09-01', 16),
       (20, '2021-10-01', 17),
       (20, '2021-11-01', 18),
       (20, '2021-12-01', 19),
       (21, '2021-09-01', 25),
       (21, '2021-10-01', 26),
       (21, '2021-11-01', 27),
       (21, '2021-12-01', 28),
       (22, '2021-09-01', 22),
       (22, '2021-10-01', 23),
       (22, '2021-11-01', 24),
       (22, '2021-12-01', 25),
       (23, '2021-09-01', 15),
       (23, '2021-10-01', 16),
       (23, '2021-11-01', 17),
       (23, '2021-12-01', 18),
       (24, '2021-09-01', 16),
       (24, '2021-10-01', 17),
       (24, '2021-11-01', 18),
       (24, '2021-12-01', 19);



DROP TABLE IF EXISTS PRESCRIPTION;
CREATE TABLE PRESCRIPTION(
    prescription_id         int auto_increment,
    animal_id               int not null,
    date                    datetime,
    medicine              varchar(255) not null,
    directions                   varchar(255),
    primary key (prescription_id),
    foreign key (animal_id) references ANIMAL(animal_id)
);

INSERT INTO PRESCRIPTION (animal_id, date, medicine, directions)
VALUES (1, '2021-10-01', 'Advil', '1 month, daily'),
       (1, '2021-10-11', 'Tylenol', '2 months, 3x daily'),
       (2, '2021-11-01', 'Penicillan', '1 week, 2x daily'),
       (3, '2021-09-05', 'Pepto Bismol', '1 week, as needed'),
       (4, '2020-05-01', 'Reactin', '1 month, 2x daily with food');

DROP TABLE IF EXISTS PROFILE_IMAGES;
CREATE TABLE PROFILE_IMAGES(
    photo_id         int auto_increment,
    animal_id        int not null,
    date            datetime,
    image          varchar(60) not null,
    primary key (photo_id),
    foreign key (animal_id) references ANIMAL(animal_id)
);

INSERT INTO PROFILE_IMAGES (animal_id, date, image)
VALUES (1, '2021-09-01', '/images/profileImages/profileImage16.jpg'),
       (1, '2021-09-01', '/images/profileImages/profileImage2.jpg'),
       (1, '2021-09-01', '/images/profileImages/profileImage3.jpg'),
       (1, '2021-09-01', '/images/profileImages/profileImage4.jpg'),
       (2, '2021-09-01', '/images/profileImages/profileImage5.jpg'),
       (2, '2021-09-01', '/images/profileImages/profileImage6.jpg'),
       (2, '2021-09-01', '/images/profileImages/profileImage7.jpg'),
       (2, '2021-09-01', '/images/profileImages/profileImage8.jpg'),
       (3, '2021-09-01', '/images/profileImages/profileImage9.jpg'),
       (3, '2021-09-01', '/images/profileImages/profileImage10.jpg'),
       (3, '2021-09-01', '/images/profileImages/profileImage11.jpg'),
       (3, '2021-09-01', '/images/profileImages/profileImage12.jpg'),
       (4, '2021-09-01', '/images/profileImages/profileImage13.jpg'),
       (4, '2021-09-01', '/images/profileImages/profileImage14.jpg'),
       (4, '2021-09-01', '/images/profileImages/profileImage15.jpg'),
       (4, '2021-09-01', '/images/profileImages/profileImage1.jpg');


DROP TABLE IF EXISTS MEDICAL_ISSUES;
CREATE TABLE MEDICAL_ISSUES(
    medical_issue_id          int auto_increment,
    animal_id                int not null,
    issue_name               varchar(25),
    current_status           varchar(10),
    open_date                datetime,
    close_date               datetime,
    description             varchar(500),
    primary key (medical_issue_id),
    foreign key (animal_id) references ANIMAL(animal_id)
);

INSERT INTO MEDICAL_ISSUES (animal_id, issue_name, current_status, open_date, close_date, description)
VALUES (1, 'Scratched Ear', 'Low', '2020-09-01', '2020-09-05', 'cut her left ear and it was bleeding. Primary reason is due to running into a table corner, no visible injury to the head or other ear.'),
       (1, 'Broken Leg', 'Moderate', '2021-09-01', NULL, 'broke leg running'),
       (1, 'Cataract in Left Eye', 'High', '2021-10-01', NULL, 'left eye shows signs of premature cataracts'),
       (2, 'Upset Stomach', 'Low', '2020-12-01', '2020-12-01', 'had upset stomach issues'),
       (2, 'Infected Tooth', 'Moderate', '2021-11-10', NULL, 'has a tooth that has become infected'),
       (3, 'Broken Ankle', 'High', '2021-11-10', NULL, 'has broken his ankle and needs surgery'),
       (4, 'Ingrown claw', 'Moderate', '2021-11-10', NULL, 'has an ingrown claw on her right paw'),
       (5, 'Scratched Ear', 'Low', '2020-09-01', '2020-09-05', 'cut her left ear and it was bleeding. Primary reason is due to running into a table corner, no visible injury to the head or other ear.'),
       (5, 'Broken Leg', 'Moderate', '2021-09-01', NULL, 'broke leg running'),
       (5, 'Cataract in Left Eye', 'High', '2021-10-01', NULL, 'left eye shows signs of premature cataracts'),
       (6, 'Upset Stomach', 'Low', '2020-12-01', '2020-12-01', 'had upset stomach issues'),
       (6, 'Infected Tooth', 'Moderate', '2021-11-10', NULL, 'has a tooth that has become infected'),
       (7, 'Broken Ankle', 'High', '2021-11-10', NULL, 'has broken his ankle and needs surgery'),
       (8, 'Ingrown claw', 'Moderate', '2021-11-10', NULL, 'has an ingrown claw on her right paw'),
       (9, 'Scratched Ear', 'Low', '2020-09-01', '2020-09-05', 'cut her left ear and it was bleeding. Primary reason is due to running into a table corner, no visible injury to the head or other ear.'),
       (9, 'Broken Leg', 'Moderate', '2021-09-01', NULL, 'broke leg running'),
       (9, 'Cataract in Left Eye', 'High', '2021-10-01', NULL, 'left eye shows signs of premature cataracts'),
       (10, 'Upset Stomach', 'Low', '2020-12-01', '2020-12-01', 'had upset stomach issues'),
       (10, 'Infected Tooth', 'Moderate', '2021-11-10', NULL, 'has a tooth that has become infected'),
       (11, 'Broken Ankle', 'High', '2021-11-10', NULL, 'has broken his ankle and needs surgery'),
       (12, 'Ingrown claw', 'Moderate', '2021-11-10', NULL, 'has an ingrown claw on her right paw'),
       (13, 'Scratched Ear', 'Low', '2020-09-01', '2020-09-05', 'cut her left ear and it was bleeding. Primary reason is due to running into a table corner, no visible injury to the head or other ear.'),
       (13, 'Broken Leg', 'Moderate', '2021-09-01', NULL, 'broke leg running'),
       (13, 'Cataract in Left Eye', 'High', '2021-10-01', NULL, 'left eye shows signs of premature cataracts'),
       (14, 'Upset Stomach', 'Low', '2020-12-01', '2020-12-01', 'had upset stomach issues'),
       (14, 'Infected Tooth', 'Moderate', '2021-11-10', NULL, 'has a tooth that has become infected'),
       (15, 'Broken Ankle', 'High', '2021-11-10', NULL, 'has broken his ankle and needs surgery'),
       (16, 'Ingrown claw', 'Moderate', '2021-11-10', NULL, 'has an ingrown claw on her right paw'),
       (17, 'Scratched Ear', 'Low', '2020-09-01', '2020-09-05', 'cut her left ear and it was bleeding. Primary reason is due to running into a table corner, no visible injury to the head or other ear.'),
       (17, 'Broken Leg', 'Moderate', '2021-09-01', NULL, 'broke leg running'),
       (17, 'Cataract in Left Eye', 'High', '2021-10-01', NULL, 'left eye shows signs of premature cataracts'),
       (18, 'Upset Stomach', 'Low', '2020-12-01', '2020-12-01', 'had upset stomach issues'),
       (18, 'Infected Tooth', 'Moderate', '2021-11-10', NULL, 'has a tooth that has become infected'),
       (19, 'Broken Ankle', 'High', '2021-11-10', NULL, 'has broken his ankle and needs surgery'),
       (20, 'Ingrown claw', 'Moderate', '2021-11-10', NULL, 'has an ingrown claw on her right paw'),
       (21, 'Scratched Ear', 'Low', '2020-09-01', '2020-09-05', 'cut her left ear and it was bleeding. Primary reason is due to running into a table corner, no visible injury to the head or other ear.'),
       (21, 'Broken Leg', 'Moderate', '2021-09-01', NULL, 'broke leg running'),
       (21, 'Cataract in Left Eye', 'High', '2021-10-01', NULL, 'left eye shows signs of premature cataracts'),
       (22, 'Upset Stomach', 'Low', '2020-12-01', '2020-12-01', 'had upset stomach issues'),
       (22, 'Infected Tooth', 'Moderate', '2021-11-10', NULL, 'has a tooth that has become infected'),
       (23, 'Broken Ankle', 'High', '2021-11-10', NULL, 'has broken his ankle and needs surgery'),
       (24, 'Ingrown claw', 'Moderate', '2021-11-10', NULL, 'has an ingrown claw on her right paw');

DROP TABLE IF EXISTS COMMENT;
CREATE TABLE COMMENT(
    comment_id            int auto_increment,
    medical_issue_id	            int not null,
    author_id                int not null,  # COMMENTIN THIS OUT FOR NOW
    title                   varchar(30),
    date                    datetime,
    description             varchar(500),
    primary key (comment_id),
    foreign key (author_id) references USER(user_id),
    foreign key (medical_issue_id) references MEDICAL_ISSUES(medical_issue_id)
);

# INSERT INTO TREATMENT (animalID, medicalIssueID, authorID, title, date, description)
INSERT INTO COMMENT (medical_issue_id, author_id, title, date, description)
VALUES (1, 1, 'Give Stitches', '2020-09-01', 'Gave Spud stitches for her cut ear'),
       (1, 1, 'Remove Stitches', '2020-09-05', 'Took out stitches for Spud, issue resolved'),
       (2, 1, 'Splint broken leg', '2021-09-01', 'Gave Spud splint for leg. Follow up to check healing in 2 months'),
       (2, 1, 'Change splint dressing', '2021-10-01', 'Changed dressing for Spud splint'),
       (3, 1, 'Administer stomach medication', '2020-12-01', 'Gave Spud stomach meds to ease stomach issues'),
       (4, 1, 'Pull tooth', '2020-11-10', 'Pulled Jimmys infected tooth. Follow up in one week');
        # going to leave out last 2 issues... we will assume the issue has been created, but the animals have not yet been seen.


DROP TABLE IF EXISTS COMMENT_IMAGES;
CREATE TABLE COMMENT_IMAGES(
    comment_photo_id        int auto_increment,
    comment_id              int not null,
    image                     varchar(255) not null,
    primary key (comment_photo_id),
    foreign key (comment_id) references COMMENT(comment_id)
);

INSERT INTO COMMENT_IMAGES (comment_id, image)
VALUES (1, '/images/commentImages/sickpuppy1.jpg'),
       (1, '/images/commentImages/sickpuppy2.jpg'),
       (2, '/images/commentImages/sickpuppy3.jpg'),
       (2, '/images/commentImages/sickpuppy4.jpg'),
       (3, '/images/commentImages/sickpuppy1.jpg'),
       (3, '/images/commentImages/sickpuppy1.jpg'),
       (4, '/images/commentImages/sickpuppy1.jpg'),
       (4, '/images/commentImages/sickpuppy1.jpg'),
       (5, '/images/commentImages/sickpuppy1.jpg'),
       (5, '/images/commentImages/sickpuppy1.jpg'),
       (6, '/images/commentImages/sickpuppy1.jpg'),
       (6, '/images/commentImages/sickpuppy1.jpg');

DROP TABLE IF EXISTS CLASSROOM_BOOKINGS;
CREATE TABLE CLASSROOM_BOOKINGS(
    booking_id                   int auto_increment,
    animal_id                    int not null,
    teacher_id                   int not null,
    admin_app_id                  int,
    tech_app_id                  int,
    booking_date                DATE,
    start_time                  TIME,
    return_time                 TIME,
    admin_app_status             varchar(40) not null,
    tech_app_status             varchar(40) not null,
    primary key (booking_id),
    foreign key (animal_id) references ANIMAL(animal_id),
    foreign key (teacher_id) references USER(user_id),
    foreign key (admin_app_id) references USER(user_id),
    foreign key (tech_app_id) references USER(user_id)
);

INSERT INTO CLASSROOM_BOOKINGS (animal_id, teacher_id, admin_app_id, tech_app_id, booking_date, start_time, return_time, admin_app_status, tech_app_status)
VALUES (1, 2, 1, 3, '2021-11-15', '12:00:00', '13:00:00', 'Approved', 'Approved'),
       (2, 2, 1, null, '2021-11-16', '12:00:00', '13:00:00', 'Rejected', 'Pending'),
       (3, 2, 1, null, '2021-11-15', '12:00:00', '13:00:00', 'Approved', 'Pending'),
       (4, 2, null, null, '2021-11-16', '12:00:00', '13:00:00', 'Pending', 'Pending'),
       (1, 2, 1, 3, '2021-11-15', '12:00:00', '13:00:00', 'Approved', 'Rejected'),
       (2, 2, 1, null, '2021-11-16', '12:00:00', '13:00:00', 'Approved', 'Pending'),
       (3, 2, null, null, '2021-11-15', '12:00:00', '13:00:00', 'Pending', 'Pending'),
       (4, 2, null, null, '2021-11-16', '12:00:00', '13:00:00', 'Pending', 'Pending');

# SELECT a.animal_name, ams.issue_name, ams.current_status, ams.open_date, ams.close_date
# FROM ANIMAL_MEDICAL_ISSUES AS ams
# LEFT JOIN ANIMAL as a
#     ON ams.animalID = a.animalID
# WHERE ams.current_status != 'Green'

