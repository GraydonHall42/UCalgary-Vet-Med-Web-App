DROP DATABASE IF EXISTS vet_db_group248;
CREATE DATABASE vet_db_group248;
USE vet_db_group248;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	user_id				int not null auto_increment,
	name				varchar(25) not null,
    email				varchar(25) not null,
    password			varchar(25) not null,
    user_type			varchar(25) not null,
	primary key (user_id)
);

INSERT INTO USER (name, email, password, user_type)
VALUES ('John', 'John@gmail.com', '1234', 'Vet'),
       ('Jim', 'Jim@gmail.com', '2345', 'Animal Care Attendant'),
       ('Jane', 'Jane@gmail.com', '3456', 'Animal Health Technician'),
       ('Mo', 'Mo@gmail.com', '4567', 'Teaching Technician'),
       ('Ali', 'Ali@gmail.com', '5678', 'Student');

DROP TABLE IF EXISTS ANIMAL;
create table ANIMAL
(
	animal_id int not null auto_increment,
	animal_name varchar(25) not null,
	animal_type varchar(25) not null,
	primary key (animal_id)
);


INSERT INTO ANIMAL (animal_name, animal_type)
VALUES ('Sally', 'Dog'),
       ('Jimmy', 'Dog'),
       ('Ralph', 'Cat'),
       ('Buttercup', 'Cat');


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
VALUES (1, '2021-09-01', 25),
       (1, '2021-10-01', 26),
       (1, '2021-11-01', 27),
       (1, '2021-12-01', 28),
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
       (4, '2021-12-01', 19);

DROP TABLE IF EXISTS PROFILE_IMAGES;
CREATE TABLE PROFILE_IMAGES(
    photo_id         int auto_increment,
    animal_id        int not null,
    date            datetime,
    image          varchar(10) not null,
    primary key (photo_id),
    foreign key (animal_id) references ANIMAL(animal_id)
);

INSERT INTO PROFILE_IMAGES (animal_id, date, image)
VALUES (1, '2021-09-01', 'img1.jpg'),
       (1, '2021-09-01', 'img2.jpg'),
       (1, '2021-09-01', 'img3.jpg'),
       (1, '2021-09-01', 'img4.jpg'),
       (2, '2021-09-01', 'img5.jpg'),
       (2, '2021-09-01', 'img6.jpg'),
       (2, '2021-09-01', 'img7.jpg'),
       (2, '2021-09-01', 'img8.jpg'),
       (3, '2021-09-01', 'img9.jpg'),
       (3, '2021-09-01', 'img10.jpg'),
       (3, '2021-09-01', 'img11.jpg'),
       (3, '2021-09-01', 'img12.jpg'),
       (4, '2021-09-01', 'img13.jpg'),
       (4, '2021-09-01', 'img14.jpg'),
       (4, '2021-09-01', 'img15.jpg'),
       (4, '2021-09-01', 'img16.jpg');


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
VALUES (1, 'Scratched Ear', 'Green', '2020-09-01', '2020-09-05', 'Sally Cut her ear and it was bleeding'),
       (1, 'Broken Leg', 'Yellow', '2021-09-01', NULL, 'Sally broke leg running'),
       (2, 'Upset Stomach', 'Green', '2020-12-01', '2020-12-01', 'Jimmy had upset stomach issues'),
       (2, 'Infected Tooth', 'Yellow', '2021-11-10', NULL, 'Jimmy has a tooth that has become infected'),
       (3, 'Broken Ankle', 'Red', '2021-11-10', NULL, 'Ralph has broken his ankle and needs surgery'),
       (4, 'Ingrown claw', 'Yellow', '2021-11-10', NULL, 'Buttercup has an ingrown claw on her right paw');

DROP TABLE IF EXISTS TREATMENT;
CREATE TABLE TREATMENT(
    treatment_id            int auto_increment,
    medical_issue_id	            int not null,
    author_id                int not null,  # COMMENTIN THIS OUT FOR NOW
    title                   varchar(30),
    date                    datetime,
    description             varchar(500),
    primary key (treatment_id),
    foreign key (author_id) references USER(user_id),
    foreign key (medical_issue_id) references MEDICAL_ISSUES(medical_issue_id)
);

# INSERT INTO TREATMENT (animalID, medicalIssueID, authorID, title, date, description)
INSERT INTO TREATMENT (medical_issue_id, author_id, title, date, description)
VALUES (1, 1, 'Give Stiches', '2020-09-01', 'Gave sally stitches for her cut ear'),
       (1, 1, 'Remove Stiches', '2020-09-05', 'Took out stitches for sally, issue resolved'),
       (2, 1, 'Splint broken leg', '2021-09-01', 'Gave sally splint for leg. Follow up to check healing in 2 months'),
       (2, 1, 'Change splint dressing', '2021-10-01', 'Changed dressing for Sallys splint'),
       (3, 1, 'Administer stomach medication', '2020-12-01', 'Gave Jimmy stomach meds to ease stomach issues'),
       (4, 1, 'Pull tooth', '2020-11-10', 'Pulled Jimmys infected tooth. Follow up in one week');
        # going to leave out last 2 issues... we will assume the issue has been created, but the animals have not yet been seen.


DROP TABLE IF EXISTS TREATMENT_IMAGES;
CREATE TABLE TREATMENT_IMAGES(
    treatment_photo_id        int auto_increment,
    treatment_id              int not null,
    image                     varchar(10) not null,
    primary key (treatment_photo_id),
    foreign key (treatment_id) references TREATMENT(treatment_id)
);

INSERT INTO TREATMENT_IMAGES (treatment_id, image)
VALUES (1, 'img13.jpg'),
       (1, 'img14.jpg'),
       (2, 'img15.jpg'),
       (2, 'img16.jpg'),
       (3, 'img17.jpg'),
       (3, 'img18.jpg'),
       (4, 'img19.jpg'),
       (4, 'img20.jpg'),
       (5, 'img21.jpg'),
       (5, 'img22.jpg'),
       (6, 'img23.jpg'),
       (6, 'img24.jpg');

DROP TABLE IF EXISTS CLASSROOM_BOOKINGS;
CREATE TABLE CLASSROOM_BOOKINGS(
    booking_id                   int auto_increment,
    animal_id                    int not null,
    teacher_id                   int not null,
    approvee_id                  int,
    booking_date                DATE,
    start_time                  TIME,
    return_time                 TIME,
    approval_status             varchar(10) not null,
    primary key (booking_id),
    foreign key (animal_id) references ANIMAL(animal_id),
    foreign key (teacher_id) references USER(user_id),
    foreign key (approvee_id) references USER(user_id)
);

INSERT INTO CLASSROOM_BOOKINGS (animal_id, teacher_id, approvee_id, booking_date, start_time, return_time, approval_status)
VALUES (3, 4, 1, '2021-11-15', '12:00:00', '13:00:00', 'Approved'),
       (4, 4, NULL, '2021-11-16', '12:00:00', '13:00:00', 'Pending')

# SELECT a.animal_name, ams.issue_name, ams.current_status, ams.open_date, ams.close_date
# FROM ANIMAL_MEDICAL_ISSUES AS ams
# LEFT JOIN ANIMAL as a
#     ON ams.animalID = a.animalID
# WHERE ams.current_status != 'Green'

