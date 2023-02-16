import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfieScreen";
import ProgressScreen from "./pages/ProgressScreen/ProgressScreen";
import RecipesScreen from "./pages/RecipesScreen/RecipesScreen";
import CategoriesRecipesScreen from "./pages/CategoriesRecipesScreen/CategoriesRecipesScreen";
import RecipeScreen from "./pages/RecipeScreen/RecipeScreen";
import ActivityScreen from "./pages/ActivityScreen/ActivityScreen";
import { EventCardProductModal } from "./components/EventCardProduct/EventCardProduct";
import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
import SettingScreen from "./pages/SettingScreen/SettingScreen";
import EventScreen from "./pages/EventScreen/EventScreen";
import EditProfileDataScreen, {
  UserDataExample,
} from "./pages/EditProfileDataScreen/EditProfileDataScreen";
import EditEventScreen from "./pages/EditEventsScreen/EditEventScreen";

const App: React.FC = () => {
  const Product = {
    name: "Лук",
    namEng: "Onion",
    proteins: "25",
    fats: "36",
    carbs: "14",
    kcal: "458",
    image: "url",
  };
  return (
    <>
      <Header />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/progress" element={<ProgressScreen />} />
          <Route path="/recipes" element={<RecipesScreen />} />
          <Route
            path="/recipes/categories"
            element={<CategoriesRecipesScreen />}
          />
          <Route path="/recipes/recipe" element={<RecipeScreen />} />
          <Route path="/event/activity" element={<ActivityScreen />} />
          <Route path="/about" element={<AboutUsScreen />} />
          <Route path="/settings" element={<SettingScreen />} />
          <Route path="/event/:type" element={<EventScreen />} />
          <Route
            path="/edit-profile"
            element={<EditProfileDataScreen data={UserDataExample} />}
          />
          <Route path="/edit-event" element={<EditEventScreen />} />
        </Routes>
        <EventCardProductModal data={Product} />
      </main>
      <Footer />
    </>
  );
};

export default App;
