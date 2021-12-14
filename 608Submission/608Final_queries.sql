USE vet_db_group248FINAL;


# 2) A basic retrieval query
# Show all our users
SELECT * FROM user;

# 3) A retrieval query with ordered results
# Show our animals, order by their birthdate
SELECT animal_name, animal_type, birth_date
FROM animal
ORDER BY birth_date;

# 4) A nested retrieval query
# Select name, type, status of all animals who have an ongoing medical issue
SELECT animal_name, animal_type, status
FROM animal
WHERE animal_id IN (
    SELECT animal_id
    FROM medical_issues
    WHERE close_date IS NOT NULL
    );

# 5) A retrieval query using joined tables
# Get the animals name, and their weight over time.
SELECT a.animal_name, w.date ,w.weight
FROM ANIMAL AS a
LEFT JOIN WEIGHT AS w
    ON a.animal_id = w.animal_id;

# 6) An update operation with any necessary triggers
SELECT animaL_name FROM ANIMAL WHERE animal_id=1;  # Prior to update

UPDATE ANIMAL
SET animal_name = "Spudzy"
WHERE animal_id = 1;

SELECT animaL_name FROM ANIMAL WHERE animal_id=1;  # After update

# KEY POINT: based on relational integrity, if you try and update a primary key,
# an error will be thrown disallowing the operation
SELECT animaL_name, animal_id FROM ANIMAL WHERE animal_id=1;  # Prior to update

# as discussed above, running this will produce an error (uncommoment to test if desired)
# UPDATE ANIMAL
# SET animal_id = 5
# WHERE animal_id = 1;

SELECT animaL_name, animal_id FROM ANIMAL WHERE animal_id=1;  # After to update



# 7) A deletion operation with any necessary triggers
# we delete a user, and see evidence that rows corresponding to that user in the ROLES
# table are now gone.
SELECT * FROM ROLES; # before

DELETE FROM USER
WHERE user_id=1;

SELECT * FROM ROLES; # before