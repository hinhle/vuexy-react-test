// ** React Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ** Table Columns
import { columns } from "./columns";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown, Send, Plus, Paperclip, Menu } from "react-feather";
import DataTable from "react-data-table-component";
import { Button, Row, Col, Card } from "reactstrap";
import { FormattedMessage } from "react-intl";

// ** Store & Actions
import { getData } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss";

const CustomHeader = ({
  toggleSidebar,
  totalCount
}) => {
  return (
    <div className="w-100 py-2">
      <Row>
        <div className="card-header">
          <div
            className="sidebar-toggle d-block d-1435-none mr-1"
          >
            <Menu size={21} onClick={() => toggleSidebar(true)}/>
          </div>
          <div>
            <span className="card-title"><FormattedMessage id={'ContactList'}/> </span>
            <span><FormattedMessage id={'Total'}/> ({totalCount})</span>
          </div>
        </div>
      </Row>
      <Row>
        <Col lg="6" className="d-flex align-items-center px-0 px-lg-1">
          <Button.Ripple tag={Link} to="/apps/invoice/add" color="primary">
            <Plus size={14} />
            <span className="align-middle ml-25"><FormattedMessage id={'CreateContact'}/></span>
          </Button.Ripple>
        </Col>
        <Col
          lg="6"
          className="actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0"
        >
          <div className="d-flex align-items-center">
            <Button.Ripple color="warning" className="mr-3 w-100">
              <Send size={14} />
              <span className="align-middle ml-25"><FormattedMessage id={'ExportData'}/></span>
            </Button.Ripple>
          </div>
          <div className="d-flex align-items-center">
            <Button.Ripple color="secondary" className="mr-1 w-100">
              <Paperclip size={14} />
              <span className="align-middle ml-25"><FormattedMessage id={'UploadContact'}/></span>
            </Button.Ripple>
          </div>
          <Button.Ripple className="btn-icon" color="secondary">
            <ChevronDown size={16} />
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  );
};

const ContactTable = ({toggleSidebar}) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.contact);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
      })
    );
  }, [dispatch, store.data.length]);

  

  const handlePagination = (page) => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
      })
    );
    setCurrentPage(page.selected + 1);
  };

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0));

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=""
        breakLabel="..."
        previousLabel=""
        activeClassName="active"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={"pagination react-paginate justify-content-end p-1"}
      />
    );
  };

  const dataToRender = () => {
    if (store.data.length > 0) {
      return store.data;
    } else if (store.data.length === 0) {
      return [];
    } else {
      return store.allData.slice(0, rowsPerPage);
    }
  };

  return (
    <div className="h-100">
      <Card className="h-100 mb-0">
        <div className="">
          <DataTable
            noHeader
            pagination
            paginationServer
            selectableRows
            subHeader={true}
            columns={columns}
            responsive={true}
            sortIcon={<ChevronDown />}
            className="react-dataTable"
            defaultSortField="id"
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
              <CustomHeader
                toggleSidebar={toggleSidebar}
                totalCount={store.allData.length}
              />
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default ContactTable;
