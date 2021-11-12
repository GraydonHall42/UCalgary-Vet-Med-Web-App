DROP DATABASE IF EXISTS vet_db_group248;
CREATE DATABASE vet_db_group248; 
USE vet_db_group248;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	UserID				varchar(10) not null,
	Name				varchar(25) not null,
    Email				varchar(25) not null,
    Password			varchar(25) not null,
    UserType			varchar(25) not null,
	primary key (UserID)
);

INSERT INTO USER (UserID, Name, Email, Password, UserType)
VALUES ('1', 'John', 'John@gmail.com', '1234', 'Vet'),
       ('2', 'Jim', 'Jim@gmail.com', '2345', 'Animal Care Attendant'),
       ('3', 'Jane', 'Jane@gmail.com', '3456', 'Animal Health Technician'),
       ('4', 'Mo', 'Mo@gmail.com', '4567', 'Teaching Technician'),
       ('5', 'Ali', 'Ali@gmail.com', '5678', 'Student');

DROP TABLE IF EXISTS ANIMAL;
create table ANIMAL
(
	AnimalID int not null,
	Name varchar(25) not null,
	Type varchar(25) not null,
	primary key (AnimalID)
);



INSERT INTO ANIMAL (AnimalID, Name, Type)
VALUES (1, 'Sally', 'Dog'),
       (2, 'Jimmy', 'Dog'),
       (3, 'Ralph', 'Cat'),
       (4, 'Buttercup', 'Cat');

DROP TABLE IF EXISTS ANIMAL_WEIGHT;
CREATE TABLE ANIMAL_WEIGHT(
    AnimalID        int not null,
    Date            datetime,
    Weight          double,
    foreign key (AnimalID) references ANIMAL(AnimalID)
);

INSERT INTO ANIMAL_WEIGHT
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

DROP TABLE IF EXISTS ANIMAL_PROFILE_IMAGES;
CREATE TABLE ANIMAL_PROFILE_IMAGES(
    AnimalID        int not null,
    Date            datetime,
    Image          varchar(10) not null,
    foreign key (AnimalID) references ANIMAL(AnimalID)
);

INSERT INTO ANIMAL_PROFILE_IMAGES (AnimalID, Date, Image)
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


DROP TABLE IF EXISTS ANIMAL_MEDICAL_ISSUES;
CREATE TABLE ANIMAL_MEDICAL_ISSUES(
    AnimalID                int not null,
    MedicalIssueID          varchar(10) not null,
    IssueName               varchar(25),
    CurrentStatus           varchar(10),
    OpenDate                datetime,
    CloseDate               datetime,
    Description             varchar(500),
    primary key (MedicalIssueID),
    foreign key (AnimalID) references ANIMAL(AnimalID)
);

INSERT INTO ANIMAL_MEDICAL_ISSUES (AnimalID, MedicalIssueID, IssueName, CurrentStatus, OpenDate, CloseDate, Description)
VALUES (1, '1', 'Scratched Ear', 'Green', '2020-09-01', '2020-09-05', 'Sally Cut her ear and it was bleeding'),
       (1, '2', 'Broken Leg', 'Yellow', '2021-09-01', NULL, 'Sally broke leg running'),
       (2, '3', 'Upset Stomach', 'Green', '2020-12-01', '2020-12-01', 'Jimmy had upset stomach issues'),
       (2, '4', 'Infected Tooth', 'Yellow', '2021-11-10', NULL, 'Jimmy has a tooth that has become infected'),
       (3, '5', 'Broken Ankle', 'Red', '2021-11-10', NULL, 'Ralph has broken his ankle and needs surgery'),
       (4, '6', 'Ingrown claw', 'Yellow', '2021-11-10', NULL, 'Buttercup has an ingrown claw on her right paw')

DROP TABLE IF EXISTS TREATMENT;
CREATE TABLE TREATMENT(
    AnimalID                int not null,
    MedicalIssueID          varchar(10) not null,
    TreatmentID             varchar(10) not null,
    AuthorID                varchar(10) not null,
    Title                   varchar(30),
    Date                    datetime,
    Description             varchar(500),
    primary key (TreatmentID),
    foreign key (AnimalID) references ANIMAL(AnimalID),
    foreign key (AuthorID) references USER(UserID),
    foreign key (MedicalIssueID) references ANIMAL_MEDICAL_ISSUES(MedicalIssueID)
);

INSERT INTO TREATMENT (AnimalID, MedicalIssueID, TreatmentID, AuthorID, Title, Date, Description)
VALUES (1, '1', '1', '1', 'Give Stiches', '2020-09-01', 'Gave sally stitches for her cut ear'),
       (1, '1', '2', '1', 'Remove Stiches', '2020-09-05', 'Took out stitches for sally, issue resolved'),
       (1, '2', '3', '1', 'Splint broken leg', '2021-09-01', 'Gave sally splint for leg. Follow up to check healing in 2 months'),
       (1, '2', '4', '1', 'Change splint dressing', '2021-10-01', 'Changed dressing for Sallys splint'),
       (2, '3', '5', '1', 'Administer stomach medication', '2020-12-01', 'Gave Jimmy stomach meds to ease stomach issues'),
       (2, '4', '6', '1', 'Pull tooth', '2020-11-10', 'Pulled Jimmys infected tooth. Follow up in one week');
        # going to leave out last 2 issues... we will assume the issue has been created, but the animals have not yet been seen.


DROP TABLE IF EXISTS ANIMAL_TREATMENT_IMAGES;
CREATE TABLE ANIMAL_TREATMENT_IMAGES(
    TreatmentID             varchar(10) not null,
    Image                   varchar(10) not null,
    foreign key (TreatmentID) references TREATMENT(TreatmentID)
);


INSERT INTO ANIMAL_TREATMENT_IMAGES (TreatmentID, Image)
VALUES ('1', 'img13.jpg'),
       ('1', 'img14.jpg'),
       ('2', 'img15.jpg'),
       ('2', 'img16.jpg'),
       ('3', 'img17.jpg'),
       ('3', 'img18.jpg'),
       ('4', 'img19.jpg'),
       ('4', 'img20.jpg'),
       ('5', 'img21.jpg'),
       ('5', 'img22.jpg'),
       ('6', 'img23.jpg'),
       ('6', 'img24.jpg');

DROP TABLE IF EXISTS ANIMAL_CLASSROOM_BOOKINGS;
CREATE TABLE ANIMAL_CLASSROOM_BOOKINGS(
    BookingID               varchar(10) not null,
    AnimalID                int not null,
    TeacherID               varchar(10) not null,
    ApproveeID              varchar(10),
    BookingDate             DATE,
    StartTime               TIME,
    ReturnTime              TIME,
    ApprovalStatus          varchar(10) not null,
    primary key (BookingID),
    foreign key (AnimalID) references ANIMAL(AnimalID),
    foreign key (TeacherID) references USER(UserID),
    foreign key (ApproveeID) references USER(UserID)
);

INSERT INTO ANIMAL_CLASSROOM_BOOKINGS (BookingID, AnimalID, TeacherID, ApproveeID, BookingDate, StartTime, ReturnTime, ApprovalStatus)
VALUES ('1', 3, '4', '1', '2021-11-15', '12:00:00', '13:00:00', 'Approved'),
       ('2', 4, '4', NULL, '2021-11-16', '12:00:00', '13:00:00', 'Pending')

SELECT a.Name, ams.IssueName, ams.CurrentStatus, ams.OpenDate, ams.CloseDate
FROM ANIMAL_MEDICAL_ISSUES AS ams
LEFT JOIN ANIMAL as a
    ON ams.AnimalID = a.AnimalID
WHERE ams.CurrentStatus != 'Green'

