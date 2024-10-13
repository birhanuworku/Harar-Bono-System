import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

import NewUsers from "./NewUsers";
import UserAddForm from "./UserAddForm";
import Signin from "./examples/Signin";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import BonoGeneratedUsers from "./BonoGeneratedUsers";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminAddForm from "./AdminAddForm";
import AddAdmins from "./AdminsPage";
import DashboardOverview from "./dashboard/DashboardOverview";
import Settings from "./Settings";
const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Sidebar />
          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer
              toggleSettings={toggleSettings}
              showSettings={showSettings}
            />
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={Routes.Signin.path} />
    </Route>
    <RouteWithSidebar exact path={Routes.NewUsers.path} component={NewUsers} />
    <RouteWithSidebar
      exact
      path={Routes.BonoGeneratedUsers.path}
      component={BonoGeneratedUsers}
    />
    <RouteWithSidebar
      exact
      path={Routes.UserAddForm.path}
      component={UserAddForm}
    />
    <RouteWithSidebar
      exact
      path={Routes.AdminAddForm.path}
      component={AdminAddForm}
    />
    <RouteWithSidebar
      exact
      path={Routes.AddAdmins.path}
      component={AddAdmins}
    />
    <RouteWithSidebar
      exact
      path={Routes.DashboardOverview.path}
      component={DashboardOverview}
    />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <Route exact path={Routes.Signin.path} component={Signin} />
    <Route exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <Route exact path={Routes.ResetPassword.path} component={ResetPassword} />
  </Switch>
);
