import React from "react";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    <div className="alert">
      {alerts !== null &&
        alerts?.length > 0 &&
        alerts?.map((alert) => (
          <div
            className={`bg-${alert.alertType}-100 border border-${alert.alertType}-400 text-${alert.alertType}-700 mb-2 px-4 py-3 rounded relative`}
            role="alert"
          >
            <span className="block sm:inline">{alert.msg}</span>
          </div>
        ))}
    </div>
  );
};

export default Alert;
