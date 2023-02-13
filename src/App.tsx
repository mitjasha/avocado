import React from "react";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import EditProfileDataScreen, {
  UserDataExample,
} from "./pages/EditProfileDataScreen/EditProfileDataScreen";
// import RecipeScreen from "./pages/RecipeScreen/RecipeScreen";
// import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
// import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
// import EventScreen from "./pages/EventScreen/EventScreen";
// import MainScreen from "./pages/MainScreen/MainScreen";
// import ProductCardScreen from "./pages/ProductCardScreen/ProductCardScreen";
// import ProfileScreen from "./pages/ProfileScreen/ProfieScreen";
// import ProgressScreen from "./pages/ProgressScreen/ProgressScreen";
// import RecipesScreen from "./pages/RecipesScreen/RecipesScreen";
// import CategoriesRecipesScreen from "./pages/CategoriesRecipesScreen/CategoriesRecipesScreen";
// import SettingScreen from "./pages/SettingScreen/SettingScreen";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-app">
        <EditProfileDataScreen data={UserDataExample} />
        {/* <AboutUsScreen />
        <MainScreen />
        <EventScreen type="breakfast" />
        <RecipeScreen />
        <RecipesScreen />
        <SettingScreen />
        <CategoriesRecipesScreen />
        <ProductCardScreen />
        <ProfileScreen />
        <ProgressScreen />
        <RegistrationScreen /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
