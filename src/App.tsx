import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import UserRegistrationScreen from "./pages/UserRegistrationScreen/UserRegistrationScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfieScreen";
import ProgressScreen from "./pages/ProgressScreen/ProgressScreen";
import RecipesScreen from "./pages/RecipesScreen/RecipesScreen";
import CategoriesRecipesScreen from "./pages/CategoriesRecipesScreen/CategoriesRecipesScreen";
import RecipeScreen from "./pages/RecipeScreen/RecipeScreen";
import ActivityScreen from "./pages/ActivityScreen/ActivityScreen";
import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
import SettingScreen from "./pages/SettingScreen/SettingScreen";
import EventScreen from "./pages/EventScreen/EventScreen";
import EditProfileDataScreen from "./pages/EditProfileDataScreen/EditProfileDataScreen";
import EditEventScreen from "./pages/EditEventsScreen/EditEventScreen";
import ProfileRegistrationScreen from "./pages/ProfileRegistrationScreen/ProfileRegistrationScreen";
import Screen404 from "./pages/404Screen/404Screen";
import AppContext, { AppContextType } from "./context";
import RequireAuth from "./helpers/RequireAuth";

const routesWithoutHeader: string[] = [
  "/",
  "/registration/user",
  "/registration/profile",
  "/login",
];

const dateState: string = new Date().toISOString().slice(0, 10);
localStorage.setItem("date", dateState);

const App: React.FC = () => {
  const [currentDateState, setCurrentDateState] =
    useState<AppContextType["currentDateState"]>(dateState);

  const location = useLocation();
  const [isHeader, setHeader] = useState<boolean>(true);
  const [isFooter, setFooter] = useState<boolean>(false);

  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else document.documentElement.setAttribute("data-theme", "dark");
  } else document.documentElement.setAttribute("data-theme", "light");

  useEffect(() => {
    setHeader(routesWithoutHeader.includes(location.pathname));
    setFooter(routesWithoutHeader.includes(location.pathname));
  }, [location.pathname]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ currentDateState, setCurrentDateState }}>
      <>
        {!isHeader && <Header />}
        <main className="main-app">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route
              path="/registration/user"
              element={<UserRegistrationScreen />}
            />
            <Route
              path="/registration/profile"
              element={<ProfileRegistrationScreen />}
            />
            <Route
              path="/main"
              element={
                <RequireAuth>
                  <MainScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <ProfileScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/progress"
              element={
                <RequireAuth>
                  <ProgressScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/recipes"
              element={
                <RequireAuth>
                  <RecipesScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/recipes/:category"
              element={
                <RequireAuth>
                  <CategoriesRecipesScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <RequireAuth>
                  <RecipeScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/event/activity"
              element={
                <RequireAuth>
                  <ActivityScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <AboutUsScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <SettingScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/event/:type"
              element={
                <RequireAuth>
                  <EventScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <RequireAuth>
                  <EditProfileDataScreen />
                </RequireAuth>
              }
            />
            <Route
              path="/edit-event"
              element={
                <RequireAuth>
                  <EditEventScreen />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Screen404 />} />
          </Routes>
        </main>
        {!isFooter && <Footer />}
      </>
    </AppContext.Provider>
  );
};

export default App;
