import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

class ConfirmStateModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
    };
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  render() {
    // console.log("confirm state modal");
    // console.log(this.props)
    return (
      <div>
        <div>
          <Modal isOpen={this.props.isOpen1} toggle={this.props.toggle1}>
            <ModalHeader toggle={this.props.toggle1}>
              Where are you today?
            </ModalHeader>
            <ModalBody>
              We need to know what state you're in right now while completing
              your online visit. This is so we can match you with the right
              provider. We'll only show you pharmacies in this state.
              <div style={{ marginTop: "1rem" }}>
                <Form>
                  <FormGroup>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      value={this.state.city}
                      onChange={this.handleChange}
                    >
                      <option value="">Choose any state...</option>
                      <option value="texus">Texas</option>
                      <option value="florida">Florida</option>
                      <option value="illinois">Illinois</option>
                    </Input>
                  </FormGroup>
                </Form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Link to="/confirmappointmentcalendly">
                <Button
                  color="primary"
                  disabled={this.state.city === "" ? true : false}
                  onClick={()=>this.props.setModelClose(false)}
                >
                  Confirm
                </Button>
              </Link>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ConfirmStateModal;
