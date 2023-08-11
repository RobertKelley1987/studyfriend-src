import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import useCategories from './hooks/useCategories';
import useUserId from './hooks/useUserId';
import useCategory from './hooks/useCategory'
import useFlashcards from './hooks/useFlashcards'
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
import ErrorMessage from './components/ui/ErrorMessage';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isStudying, setIsStudying] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const { userId, setUserId, loadingUserId } = useUserId();
  const { categories, setCategories, categoriesLoading } = useCategories(userId);
  const { flashcards, setFlashcards, loadingFlashcards } = useFlashcards(userId, categoryId);
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
        {errorMessage && <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage}/>}
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
                <SignupPage setUserId={setUserId} setErrorMessage={setErrorMessage} />
              </Loading>
            } 
          />
          <Route 
            path="/login"
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <LoginPage setUserId={setUserId} setErrorMessage={setErrorMessage} />
              </Loading>
            } 
          />
          <Route 
            path="/categories" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <CategoriesPage 
                    categories={categories} 
                    categoriesLoading={categoriesLoading} 
                    setCategoryId={setCategoryId}
                  />
                </ProtectedRoute>
              </Loading>
            }
          />
          <Route 
            path="/categories/new" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <NewCategoryPage setCategories={setCategories} setIsStudying={setIsStudying} />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <CategoryPage 
                    userId={userId}
                    categoryId={categoryId} 
                    setCategoryId={setCategoryId}
                    flashcards={flashcards}
                    setFlashcards={setFlashcards}
                    setIsStudying={setIsStudying}
                    loadingFlashcards={loadingFlashcards}
                  />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/edit" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                    <EditCategoryPage
                      userId={userId} 
                      categories={categories} 
                      setCategories={setCategories}
                      setIsStudying={setIsStudying}  
                    />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/completed" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <CompletedPage categoryId={categoryId} setIsStudying={setIsStudying} />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route
            exact path="/categories/:categoryId/flashcards/new" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <NewFlashcardPage 
                    userId={userId} 
                    categories={categories} 
                    setIsStudying={setIsStudying} 
                    setFlashcards={setFlashcards}
                  />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/flashcards/:flashcardId" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                    <FlashcardPage 
                      userId={userId}
                      isStudying={isStudying} 
                      setIsStudying={setIsStudying} 
                    />
                </ProtectedRoute>
              </Loading>
            } 
          />
          <Route 
            path="/categories/:categoryId/flashcards/:flashcardId/edit" 
            element={
              <Loading isLoading={gettingSessionData} loadingEl="Loading...">
                <ProtectedRoute userId={userId}>
                  <EditFlashcardPage 
                    userId={userId} 
                    setIsStudying={setIsStudying} 
                    categories={categories} 
                    setFlashcards={setFlashcards}
                  />
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
                      <DeleteFlashcardPage 
                        setErrorMessage={setErrorMessage} 
                        setFlashcards={setFlashcards} 
                      />
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
                    <DeleteCategoryPage
                      userId={userId}
                      setErrorMessage={setErrorMessage} 
                      setCategories={setCategories}
                    />
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
