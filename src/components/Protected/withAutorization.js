import React, { useEffect } from "react";
import { error } from "pages";
import { useSelector } from "react-redux";
import { getAutorization } from "state/AutorizationSlice";
import "utils/styles/skeleton.scss";

const isAutorization = (targs, autorization) => {
  const permissionExiste = autorization.filter((item) =>
    targs.includes(item.tag)
  );

  const Notautorize = permissionExiste.length === 0;
  return !Notautorize;
};
export default function withAutorizationNotification(Component, ...targs) {
  return (props) => {
    const autorization = useSelector(getAutorization);

    if (isAutorization(targs, autorization)) {
      return <Component {...props} />;
    } else {
      return (
        <div className="dashboardHeight">
          <error.NotFound />
        </div>
      );
    }
  };
}
export function withAutorizationInVisible(Component, ...targs) {
  return (props) => {
    const autorization = useSelector(getAutorization);

    if (isAutorization(targs, autorization)) {
      return <Component {...props} />;
    }
  };
}
