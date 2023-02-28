import { createBrowserRouter } from "react-router-dom";
import { auth, landing, error, dashboard } from "pages";
import { AuthLayout, LandingLayout, DashboardLayout } from "layouts";
import { PreferanceDuCompte, Parametre } from "components";
export default createBrowserRouter([
  {
    path: "/landing",
    element: <LandingLayout />,
    loader: async (param) => {},
    errorElement: (
      <div style={{ height: "100vh" }}>
        <error.NotFound />
      </div>
    ),
    children: [{ index: true, element: <landing.Accueil /> }],
  },
  {
    path: "/404",
    element: <error.NotFound />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [
      {
        index: true,
        element: <dashboard.Accueil />,
      },
      {
        path: "team",
        element: <dashboard.Team />,
      },
      {
        path: "setting",
        element: <dashboard.Setting />,
        children: [
          {
            index: true,
            element: <PreferanceDuCompte />,
          },
          { path: "Parametre", element: <Parametre /> },
        ],
      },
      {
        path: "stock",
        element: <dashboard.Stock />,
      },
    ],
  },
  {
    path: "/user",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <auth.Register />,
      },
      {
        path: "login",
        element: <auth.Login />,
      },
      {
        path: "forget-password",
        element: <auth.ForgetPassword />,
      },
      {
        path: "verification-code",
        element: <auth.VerificationCode />,
      },
      {
        path: "update-password",
        element: <auth.UpdatePassword />,
      },
    ],
  },
]);
