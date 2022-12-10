import {
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
} from "reactstrap";
import PickerDefault from "../../forms/form-elements/datepicker/PickerDefault";
import { Star, Users } from "react-feather";
import { FormattedMessage, useIntl } from "react-intl";

// ** React Imports
import { Fragment } from "react";

import MultiSelectOptions from "./MultiSelect";
import Rating from "react-rating";
import { Filter } from "react-feather";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const FilterSidebarLeft = (props) => {
  const intl = useIntl();
  const t = intl.formatMessage;
  const locale = intl.locale;
  console.log(intl);
  // ** Props
  const { toggleSidebar } = props;

  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false);
  };

  return (
    <Fragment>
      <div className="sidebar-wrapper filter-sidebar">
        <CardBody className="card-body d-flex justify-content-center my-sm-0 mb-3">
          <Button.Ripple
            color="primary"
            block
            onClick={handleAddEventClick}
            outline
          >
            <Users size={14} />
            <span className="align-middle ml-25">
              <FormattedMessage id={"ConfigureAccount"} />
            </span>
          </Button.Ripple>
        </CardBody>
        <CardBody>
          <h5 className="section-label mb-1">
            <Filter size={12} />
            <span className="align-middle ml-25">
              <FormattedMessage id={"Filter"} />
            </span>
          </h5>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">
                    <FormattedMessage id={"NamePhoneEmail"} />
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="nameVertical"
                    placeholder={t({id: "NamePhoneEmailPlaceholder"})}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="enterpriseVertical">
                    <FormattedMessage id={"Enterprise"} />
                  </Label>
                  <Input
                    type="text"
                    name="Enterprise"
                    id="enterpriseVertical"
                    placeholder={t({id: "EnterprisePlaceholder"})}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="positionVertical">
                    <FormattedMessage id={"Position"} />
                  </Label>
                  <Input
                    type="text"
                    name="position"
                    id="positionVertical"
                    placeholder={t({id: "PositionPlaceholder"})}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="rating" className="d-block">
                    <FormattedMessage id={"Rating"} />
                  </Label>
                  <Rating
                    direction={"ltr"}
                    emptySymbol={
                      <Star size={20} fill="#babfc7" stroke="#babfc7" />
                    }
                    fullSymbol={
                      <Star size={20} fill={"#ff9f43"} stroke={"#ff9f43"} />
                    }
                    id="rating"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="managementAccountVertical">
                    <FormattedMessage id={"ManagementAccount"} />
                  </Label>
                  <Input
                    type="text"
                    name="managementAccount"
                    id="managementAccountVertical"
                    placeholder={t({id: "ManagementAccountPlaceholder"})}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="createdAtVertical">
                    <FormattedMessage id={"CreatedAt"} />
                  </Label>
                  <PickerDefault id="createdAtVertical" />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="updatedAtVertical">
                    <FormattedMessage id={"UpdatedAt"} />
                  </Label>
                  <PickerDefault id="updatedAtVertical" />
                </FormGroup>
              </Col>
              <Col sm="12"  className={`multiselect--${locale}`}>
                <FormGroup>
                  <Label for="passwordVertical"><FormattedMessage id={"CustomerList"} /></Label>
                  <MultiSelectOptions placeholder={t({id: "CustomerListPlaceholder"})}/>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </div>
    </Fragment>
  );
};

export default FilterSidebarLeft;
