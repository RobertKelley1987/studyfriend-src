import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import useCategories from './hooks/useCategories';
import useUserId from './hooks/useUserId';
import CategoriesPage from './pages/CategoriesPage';
import NewCategoryPage from './pages/NewCategoryPage';
import EditCategoryPage from './pages/EditCategoryPage';
import NewFlashcardPage from './pages/NewFlashcardPage';
import CategoryPage from './pages/CategoryPage';
import DeleteFlashcardPage from './pages/DeleteFlashcardPage';
import DeleteCategoryPage from './pages/DeleteCategoryPage';
import EditFlashcardPage from './pages/EditFlashcardPage';
import FlashcardPage from './pages/FlashcardPage';
import CompletedPage from './pages/CompletedPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from './components/layout/Header';
import ProtectedRoute from './components/ui/ProtectedRoute';
import Loading from './components/ui/Loading';
import { UserIdContext } from './context/UserIdContext';
import './App.css';

function App() {
  const [userId, setUserId, loadingUserId] = useUserId();
  const [isStudying, setIsStudying] = useState(false);
  const [categories, setCategories, categoriesLoading] = useCategories(userId);
  const gettingSessionData = loadingUserId || userId === undefined;

  // Location state for modal routes
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <UserIdContext.Provider value={userId}>
      <div className="app">
        <Header 
          setIsStudying={setIsStudying} 
          gettingSessionData={gettingSessionData}
          setUserId={setUserId} 
          setCategories={setCategories} 
        />

        <Routes location={background || location}>
          <Route 
            exact path="/"
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <Navigate to="/categories" />
                </ProtectedRoute>
              </Loading>
            }
          />
          <Route 
            path="/signup" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <SignupPage setUserId={setUserId}/>
              </Loading>
            } 
          />
          <Route 
            path="/login"
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <LoginPage setUserId={setUserId}/>
              </Loading>
            } 
          />
          <Route 
            path="/categories" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <CategoriesPage categories={categories} categoriesLoading={categoriesLoading} />
                </ProtectedRoute>
              </Loading>
            }
          />
          <Route 
            path="/categories/new" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <NewCategoryPage setCategories={setCategories} />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <Loading isLoading={categoriesLoading} loadingEl="Loading...">
                    <CategoryPage 
                      setIsStudying={setIsStudying} 
                      categories={categories} 
                      setCategories={setCategories} 
                    />
                  </Loading>
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/edit" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <Loading isLoading={categoriesLoading} loadingEl="Loading...">
                    <EditCategoryPage categories={categories} setCategories={setCategories} />
                  </Loading>
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/completed" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <CompletedPage setIsStudying={setIsStudying} />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route
            exact path="/categories/:categoryId/flashcards/new" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <NewFlashcardPage categories={categories} setCategories={setCategories} />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/flashcards/:flashcardId" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <Loading isLoading={categoriesLoading} loadingEl="Loading...">
                    <FlashcardPage 
                      categories={categories}
                      setCategories={setCategories} 
                      isStudying={isStudying} 
                      setIsStudying={setIsStudying} 
                    />
                  </Loading>
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/flashcards/:flashcardId/edit" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <Loading isLoading={categoriesLoading} loadingEl="Loading...">
                    <EditFlashcardPage categories={categories} setCategories={setCategories} />
                  </Loading>
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route
            path="*"
            element={<div className="center-content"><p>404 - Page Not Found.</p></div>}
          />
        </Routes>

        {/* MODAL ROUTES */}
        {background && 
          <Routes>
            <Route 
              path="/categories/:categoryId/flashcards/:flashcardId/delete" 
              element={
                <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                  <ProtectedRoute userId={userId}>
                    <Loading isLoading={categoriesLoading} loadingEl="Loading...">
                      <DeleteFlashcardPage setCategories={setCategories} />
                    </Loading>
                  </ProtectedRoute>
                </Loading>
              }
            />
            <Route 
              path="/categories/:categoryId/delete" 
              element={
                <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                  <ProtectedRoute userId={userId}>
                    <DeleteCategoryPage categories={categories} setCategories={setCategories} />
                  </ProtectedRoute>
                </Loading>
              }
            />
          </Routes>}
      </div>
    </UserIdContext.Provider>
  );
}


export default App;
