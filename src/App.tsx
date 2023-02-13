import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
// import ActivityScreen from "./pages/ActivityScreen/ActivityScreen";
// import EditProfileDataScreen, {
//   UserDataExample,
// } from "./pages/EditProfileDataScreen/EditProfileDataScreen";
// import EditEventScreen from "./pages/EditEventsScreen/EditEventScreen";
// import RecipeScreen from "./pages/RecipeScreen/RecipeScreen";
//
// import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
// import EventScreen from "./pages/EventScreen/EventScreen";
//
// import ProductCardScreen from "./pages/ProductCardScreen/ProductCardScreen";
// import ProfileScreen from "./pages/ProfileScreen/ProfieScreen";
// import ProgressScreen from "./pages/ProgressScreen/ProgressScreen";
// import RecipesScreen from "./pages/RecipesScreen/RecipesScreen";
// import CategoriesRecipesScreen from "./pages/CategoriesRecipesScreen/CategoriesRecipesScreen";
// import SettingScreen from "./pages/SettingScreen/SettingScreen";
//

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/main" element={<MainScreen />} />

          {/* <EditProfileDataScreen data={UserDataExample} />
          <EditEventScreen />
          <AboutUsScreen />
          
          <EventScreen type="breakfast" />
          <ActivityScreen />
          <RecipeScreen />
          <RecipesScreen />
          <SettingScreen />
          <CategoriesRecipesScreen />
          <ProductCardScreen />
          <ProfileScreen />
          <ProgressScreen />
           */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
