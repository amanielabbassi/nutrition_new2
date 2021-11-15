import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editProfil, getProfil } from "../../JS/actions/profilAction";
const Editprofil = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [edit, setEdit] = useState({ name: "", email: "", phone: "" });
  const editID = useSelector((state) => state.profileReducer.user);
  useEffect(() => {
    dispatch(getProfil(match.params.id));
  }, [match.params.id]);
  useEffect(() => {
    setEdit({ ...editID });
  }, [editID]);

  const handleChange = (e) => {
    e.preventDefault();

    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const update = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
    };

    dispatch(editProfil(editID._id, update, history));
    setEdit({ name: "", email: "", phone: "" });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            placeholder="name"
            value={editID.name}
          />
          <Form.Label>email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            placeholder="email"
            value={editID.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>phone</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="phone"
            placeholder="name"
            value={editID.phone}
          />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Editprofil;
