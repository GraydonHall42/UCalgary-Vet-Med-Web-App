export const login = async (username, password) => {

  const validUsers = [
    {
      "userId": 6,
      "name": "Instructor_1",
      "email": "instruct@gmail.com",
      "password": "pt@123",
      "userType": "Teaching Technician"
    

    },
    {
      "userId": 7,
      "name": "Admin_1",
      "email": "admin@gmail.com",
      "password": "pa",
      "userType": "Admin"
    },
    {
      "userId": 8,
      "name": "Technician",
      "email": "tech@gmail.com",
      "password": "pe",
      "userType": "Animal Health Technician"
    }
  ];

  for(const user of validUsers){
    if(username === user.name && password === user.password) {
      return user;
    }
  }
};
