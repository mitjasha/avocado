import React from "react";
import { Routes } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import ActivityScreen from "./pages/ActivityScreen/ActivityScreen";
import EditProfileDataScreen, {
  UserDataExample,
} from "./pages/EditProfileDataScreen/EditProfileDataScreen";
import EditEventScreen from "./pages/EditEventsScreen/EditEventScreen";
import RecipeScreen from "./pages/RecipeScreen/RecipeScreen";
import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
import EventScreen from "./pages/EventScreen/EventScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import ProductCardScreen from "./pages/ProductCardScreen/ProductCardScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfieScreen";
import ProgressScreen from "./pages/ProgressScreen/ProgressScreen";
import RecipesScreen from "./pages/RecipesScreen/RecipesScreen";
import CategoriesRecipesScreen from "./pages/CategoriesRecipesScreen/CategoriesRecipesScreen";
import SettingScreen from "./pages/SettingScreen/SettingScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-app">
        <Routes>
          <EditProfileDataScreen data={UserDataExample} />
          <EditEventScreen />
          <AboutUsScreen />
          <MainScreen />
          <EventScreen type="breakfast" />
          <ActivityScreen />
          <RecipeScreen />
          <RecipesScreen />
          <SettingScreen />
          <CategoriesRecipesScreen />
          <ProductCardScreen />
          <ProfileScreen />
          <ProgressScreen />
          <RegistrationScreen />
          <LoginScreen />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
