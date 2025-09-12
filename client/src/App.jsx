import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Herosection from "./pages/student/Herosection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import Navbar from "./components/Navbar";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import SearchPage from "./pages/student/SearchPage";
import Terms from "./pages/Terms";
import P_Policy from "./pages/P_Policy";

import {
  AdminRoute,
  AuthenticatedUser,
  ProtectedRoute,
} from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtected";
import { ThemeProvider } from "./components/ThemeProvider"; // import your provider
import Footer from "@/components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
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
                  <Login />
                </AuthenticatedUser>
              }
            />
              <Route path="/terms" element={<Terms />} />
              <Route path="/policy" element={<P_Policy />} />
             
            <Route
              path="/"
              element={
                <>
                  <Herosection />
                  <Courses />
                </>
              }
            />
            <Route
              path="/my-learning"
              element={
                <ProtectedRoute>
                  <MyLearning />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course/search"
              element={
                <ProtectedRoute>
                  <SearchPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-detail/:courseId"
              element={
                <ProtectedRoute>
                  <CourseDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-progress/:courseId"
              element={
                <ProtectedRoute>
                  <PurchaseCourseProtectedRoute>
                    <CourseProgress />
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
                <Sidebar />
              </AdminRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="course" element={<CourseTable />} />
            <Route path="course/create" element={<AddCourse />} />
            <Route path="course/:courseId" element={<EditCourse />} />
            <Route
              path="course/:courseId/lecture"
              element={<CreateLecture />}
            />
            <Route
              path="course/:courseId/lecture/:lectureId"
              element={<EditLecture />}
            />
            
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
