import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { createDepartment, getDepartmentById, updateDepartment } from "../Services/DepartmentServices";

type RouteParam = {
  id: string;
}

const Department: React.FC = () => {

  const history = useHistory();
  const { id } = useParams<RouteParam>();

  const [departmentName, setDepartmentName] = useState<string>();
  const [departmentDescription, setDepartmentDescription] = useState<string>();



  const saveOrUpdate = (e: FormEvent) => {
    e.preventDefault();

    const department = { departmentName, departmentDescription }

    if (id) {
      updateDepartment(Number(id), department)
        .then(() => history.push("/department"))
        .catch((error) => console.log(error)
        )
    }
    else {
      createDepartment(department)
        .then(() =>
          history.push("/department")
        )
        .catch((error) => console.log(error));
    }


  }

  useEffect(


    () => {
      if (id) {
        getDepartmentById(Number(id))
          .then((response) => {
            setDepartmentName(response.data.departmentName);
            setDepartmentDescription(response.data.departmentDescription)
          })


      }
    }, [id])

  return (


    <Container>


      <Row>
        <Col>
          <Form>
            <Form.Label >DepartmentName</Form.Label>
            <Form.Control
              type="text"

              placeholder="Department Name" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}
            />
            <Form.Label >Password</Form.Label>
            <Form.Control
              type="text"

              placeholder="Department Description" value={departmentDescription} onChange={(e) => setDepartmentDescription(e.target.value)}
            />


          </Form>
        </Col>
      </Row>
      <Button onClick={(e) => saveOrUpdate(e)} variant="primary">submit</Button>
    </Container>





  )
}

export default Department;


