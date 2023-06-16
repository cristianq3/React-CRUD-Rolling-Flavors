import { Form, Button, Container, Card } from "react-bootstrap";
import  {login} from "../helpers/queries"
import { useForm } from "react-hook-form";

const Login = () => {
 const {register, handleSubmit, formState: {errors}, reset} = useForm();

   const onSubmit = (usuario)=>{
    console.log(usuario); 
    login();
  };
  return (
    <Container className="mainSection col-md-6">
      <Card className="my-5 fondoDetalle  shadow-lg">
        <Card.Header as="h5">Ingresar a <b>Rolling Flavors</b> </Card.Header>
        <Card.Body>
          <Form className="">
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
             
              />
             <Form.Text className="text-danger">
     
             </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                
              />
             <Form.Text className="text-danger">
        
             </Form.Text>
            </Form.Group>
            <Button className="btn btnEliminar" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
