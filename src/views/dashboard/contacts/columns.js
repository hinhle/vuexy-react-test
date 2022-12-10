// ** React Imports

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import { UncontrolledTooltip } from "reactstrap";
import { Phone, Mail, Trash2, Star } from "react-feather";

import Select from "react-select";
import { selectThemeColors } from "@utils";
import moment from "moment";
import Rating from "react-rating";
import { FormattedMessage, IntlProvider } from "react-intl";

// ** renders client column
const renderClient = (row) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      "light-success",
      "light-danger",
      "light-warning",
      "light-info",
      "light-primary",
      "light-secondary",
    ],
    color = states[stateNum];

  if (row.avatar.length) {
    return <Avatar className="mr-50" img={row.avatar} width="32" height="32" />;
  } else {
    return (
      <Avatar
        color={color}
        className="mr-50"
        content={row.name ?? "John Doe"}
        initials
      />
    );
  }
};

// ** Table columns
export const columns = [
  {
    name: <FormattedMessage id={"Name"} />,
    minWidth: "200px",
    selector: "client",
    sortable: true,
    cell: (row) => {
      const name = row ? row.name : "John Doe";
      return (
        <div className="d-flex justify-content-left align-items-center">
          {renderClient(row)}
          <div className="d-flex flex-column">
            <h6 className="user-name text-truncate mb-0">{name}</h6>
          </div>
        </div>
      );
    },
  },
  {
    name: <FormattedMessage id={"Phone"} />,
    selector: "phone",
    sortable: true,
    minWidth: "220px",
    cell: (row) => {
      const options = [
        {
          label: row.phone,
          value: row.phone,
        },
      ];
      return (
        <Select
          theme={selectThemeColors}
          className="react-select w-100"
          classNamePrefix="select"
          defaultValue={options[0]}
          options={options}
          isClearable={false}
        />
      );
    },
  },
  {
    name: <FormattedMessage id={"Position"} />,
    minWidth: "120px",
    selector: "position",
    sortable: true,
    cell: (row) => {
      const position = row ? row.position : "";
      return (
        <div className="d-flex justify-content-left align-items-center">
          <div className="d-flex flex-column">
            <h6 className="user-name text-truncate mb-0">{position}</h6>
          </div>
        </div>
      );
    },
  },
  {
    name: <FormattedMessage id={"Enterprise"} />,
    minWidth: "170px",
    selector: "enterprise",
    sortable: true,
    cell: (row) => {
      const enterprise = row ? row.enterprise : "";
      return (
        <div className="d-flex justify-content-left align-items-center">
          <div className="d-flex flex-column">
            <h6 className="user-name text-truncate mb-0">{enterprise}</h6>
          </div>
        </div>
      );
    },
  },
  {
    name: <FormattedMessage id={"Rating"} />,
    minWidth: "145px",
    selector: "rating",
    sortable: true,
    cell: (row) => {
      const rating = row ? row.rating : 0;
      return (
        <div className="d-flex justify-content-left align-items-center">
          <Rating
            direction={"ltr"}
            emptySymbol={<Star size={20} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={20} fill={"#ff9f43"} stroke={"#ff9f43"} />}
            id="rating"
            initialRating={rating}
            readonly
          />
        </div>
      );
    },
  },
  {
    name: <FormattedMessage id={"ManagementAccount"} />,
    minWidth: "230px",
    selector: "account",
    sortable: true,
    cell: (row) => {
      const account = row ? row.account : "";
      return (
        <div className="d-flex justify-content-left align-items-center">
          <div className="d-flex flex-column">
            <h6 className="user-name text-truncate mb-0">{account}</h6>
          </div>
        </div>
      );
    },
  },
  {
    name: <FormattedMessage id={"CreatedAt"} />,
    selector: "createdAt",
    sortable: true,
    minWidth: "220px",
    cell: (row) =>
      moment(new Date(row.createdAt)).format("DD/MM/YYYY, hh:mm:ss a"),
  },
  {
    name: <FormattedMessage id={"UpdatedAt"} />,
    selector: "updatedAt",
    sortable: true,
    minWidth: "220px",
    cell: (row) =>
      moment(new Date(row.updatedAt)).format("DD/MM/YYYY, hh:mm:ss a"),
  },
  {
    name: <FormattedMessage id={"Action"} />,
    minWidth: "150px",
    selector: "",
    sortable: true,
    cell: (row) => (
      <div className="column-action d-flex align-items-center">
        <Phone size={17} id={`call-tooltip-${row.id}`} />
        <UncontrolledTooltip placement="top" target={`call-tooltip-${row.id}`}>
          Call
        </UncontrolledTooltip>
        <Mail size={17} className="mx-1" id={`msg-tooltip-${row.id}`} />
        <UncontrolledTooltip placement="top" target={`msg-tooltip-${row.id}`}>
          Message
        </UncontrolledTooltip>
        <Trash2 size={17} id={`delete-tooltip-${row.id}`} />
        <UncontrolledTooltip
          placement="top"
          target={`delete-tooltip-${row.id}`}
        >
          Delete
        </UncontrolledTooltip>
      </div>
    ),
  },
];
