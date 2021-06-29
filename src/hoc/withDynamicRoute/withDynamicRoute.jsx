import React from "react";
import { useParams } from "react-router-dom";

export const withDynamicRoute = (Component) => {
  
  return function (props) {
    let { id } = useParams();

    const { location, history } = props;
    const { state } = location;

    if (state === undefined || id !== state.contactInfo.id) {
      return <p>page not found!</p>;
    }

    const { contactInfo } = state;

    const redirectToContactUpdatePage = () => {
      history.push({
        pathname: `/contacts/update/${contactInfo.id}`,
        state: { contactInfo },
      });
    };

    const redirectToContactsPage = () => {
      history.push("/contacts");
    };

    const redirectToDetailsPage = () => {
      history.push({
        pathname: `/contacts/${id}`,
        state: { contactInfo },
      });
    };

    return (
      <Component
        {...props}
        redirectToDetailsPage={redirectToDetailsPage}
        redirectToContactUpdatePage={redirectToContactUpdatePage}
        redirectToContactsPage={redirectToContactsPage}
      />
    );
  };
};
