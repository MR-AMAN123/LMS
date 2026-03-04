import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import MainLayout from "./layout/MainLayout";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import { useInitializeApp } from "./hooks/useInitializeApp";

// Lazy load components
const Login = lazy(() => import("./pages/Login"));
const Herosection = lazy(() => import("./pages/student/Herosection"));
const Courses = lazy(() => import("./pages/student/Courses"));
const MyLearning = lazy(() => import("./pages/student/MyLearning"));
const Profile = lazy(() => import("./pages/student/Profile"));
const Sidebar = lazy(() => import("./pages/admin/Sidebar"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const CourseTable = lazy(() => import("./pages/admin/course/CourseTable"));
const AddCourse = lazy(() => import("./pages/admin/course/AddCourse"));
const EditCourse = lazy(() => import("./pages/admin/course/EditCourse"));
const CreateLecture = lazy(() => import("./pages/admin/lecture/CreateLecture"));
const EditLecture = lazy(() => import("./pages/admin/lecture/EditLecture"));
const CourseDetail = lazy(() => import("./pages/student/CourseDetail"));
const CourseProgress = lazy(() => import("./pages/student/CourseProgress"));
const SearchPage = lazy(() => import("./pages/student/SearchPage"));
const Terms = lazy(() => import("./pages/Terms"));
const P_Policy = lazy(() => import("./pages/P_Policy"));

import {
  AdminRoute,
  AuthenticatedUser,
  ProtectedRoute,
} from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtected";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "@/components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  // Initialize app - loads user in the background without blocking UI
  useInitializeApp();

  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Navbar always visible */}
        <Navbar />

        <AnnouncementBar />

        <Routes>
          {/* Student layout */}
          <Route element={<MainLayout />}>
            <Route
              path="/login"
              element={
                <AuthenticatedUser>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Login />
                  </Suspense>
                </AuthenticatedUser>
              }
            />
            <Route
              path="/terms"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Terms />
                </Suspense>
              }
            />
            <Route
              path="/policy"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <P_Policy />
                </Suspense>
              }
            />

            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Herosection />
                  <Courses />
                </Suspense>
              }
            />
            <Route
              path="/my-learning"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingSpinner />}>
                    <MyLearning />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Profile />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/course/search"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingSpinner />}>
                    <SearchPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-detail/:courseId"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<LoadingSpinner />}>
                    <CourseDetail />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-progress/:courseId"
              element={
                <ProtectedRoute>
                  <PurchaseCourseProtectedRoute>
                    <Suspense fallback={<LoadingSpinner />}>
                      <CourseProgress />
                    </Suspense>
                  </PurchaseCourseProtectedRoute>
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Admin layout */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Suspense fallback={<LoadingSpinner />}>
                  <Sidebar />
                </Suspense>
              </AdminRoute>
            }
          >
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="course"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <CourseTable />
                </Suspense>
              }
            />
            <Route
              path="course/create"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <AddCourse />
                </Suspense>
              }
            />
            <Route
              path="course/:courseId"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <EditCourse />
                </Suspense>
              }
            />
            <Route
              path="course/:courseId/lecture"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateLecture />
                </Suspense>
              }
            />
            <Route
              path="course/:courseId/lecture/:lectureId"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <EditLecture />
                </Suspense>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
