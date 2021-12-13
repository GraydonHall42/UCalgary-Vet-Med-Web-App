import React, {useState, useEffect} from 'react'
import {Col, Container, Row, Button} from "react-bootstrap";
import SearchBarWithCriteria from "../components/SearchBarWithCriteria";
import UserManagementModal from "../components/UserManagementModal";
import UserSearchResults from "../components/UserSearchResults";
import useAuthorization from '../hooks/useAuthorization';
import axios from 'axios';
import '../styles/UserManagement.css';

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [selectedUser, setSelectedUser] = useState([]);
    const getAccessToken = useAuthorization();

    
    const getAllUsers = () => {
        let config = { headers: {'Authorization': getAccessToken() }}
        let url = 'http://localhost:8080/api/users';
        axios.get(url, config)
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }


    useEffect(() => {
        getAllUsers();
    }, [isModalShowing]);

    const addUser = () => {
        setIsModalShowing(true)
        let user = {
            "firstName": "",
            "lastName": "",
            "email": "",
            "phone": "",
            "roles": [{name: ""}],
            "blocked": false,
        }
        setSelectedUser(user)
    }


    return (
        <div>
            <Container className="p-2">
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <SearchBarWithCriteria*/}
                {/*            searchOptions ={["User First Name", "User Type"]}*/}
                {/*        />*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row>
                    <Col>
                        <UserSearchResults users={users} setIsModalShowing={setIsModalShowing} setSelectedUser={setSelectedUser}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='addUser' variant="success" onClick={addUser}>Add User</Button>
                    </Col>
                </Row>
            </Container>
            <UserManagementModal
                show={isModalShowing}
                onHide={() => setIsModalShowing(false)}
                selectedUser={selectedUser}
            />
        </div>
    )
}

export default UserManagement;
