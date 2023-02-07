import React from "react";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import RecipeScreen from "./pages/RecipeScreen/RecipeScreen";
import EventScreen from "./pages/EventScreen/EventScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import ProductCardScreen from "./pages/ProductCardScreen/ProductCardScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfieScreen";
import RecipesScreen from "./pages/RecipesScreen/RecipesScreen";
import CategoriesRecipesScreen from "./pages/CategoriesRecipesScreen/CategoriesRecipesScreen";
import SettingScreen from "./pages/SettingScreen/SettingScreen";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-app">
        <MainScreen />
        <EventScreen />
        <RecipeScreen />
        <RecipesScreen />
        <SettingScreen />
        <CategoriesRecipesScreen />
        <ProductCardScreen />
        <ProfileScreen />
      </main>
      <Footer />
    </>
  );
};

export default App;
