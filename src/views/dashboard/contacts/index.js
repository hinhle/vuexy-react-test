// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import classnames from "classnames";
import { Row, Col } from "reactstrap";

import FilterSidebarLeft from "./FilterSidebarLeft";

// ** Custom Hooks

// ** Store & Actions
import { useSelector, useDispatch } from "react-redux";

// ** Styles
import "@styles/react/apps/app-contact.scss";
import ContactTable from "./ContactTable";

const ContactsDashboard = () => {
  // ** Variables
  const dispatch = useDispatch();
  const store = useSelector((state) => state.calendar);

  // ** states
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  // ** LeftSidebar Toggle Function
  const toggleSidebar = (val) => setLeftSidebarOpen(val);

  return (
    <Fragment>
      <div className="app-contact overflow-hidden border">
        <Row noGutters className="d-flex align-items-stretch">
          <Col
            id="app-contact-sidebar"
            className={classnames(
              "col app-contact-sidebar flex-grow-0 overflow-hidden d-flex flex-column w-30",
              {
                show: leftSidebarOpen,
              }
            )}
          >
            <FilterSidebarLeft
              store={store}
              dispatch={dispatch}
              toggleSidebar={toggleSidebar}
            />
          </Col>
          <Col className="position-relative w-70">
            <ContactTable toggleSidebar={toggleSidebar} />
          </Col>
          <div
            className={classnames("body-content-overlay", {
              show: leftSidebarOpen === true,
            })}
            onClick={() => toggleSidebar(false)}
          ></div>
        </Row>
      </div>
    </Fragment>
  );
};

export default ContactsDashboard;
