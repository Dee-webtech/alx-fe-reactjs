import AddRecipeForm from "./components/AddRecipeForm";

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
  <Route path="/add" element={<AddRecipeForm />} />
</Routes>
