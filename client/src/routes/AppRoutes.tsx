// import Home from '@/pages/home/Home';
// import Profile from '@/pages/profile/Profile';
// import { Routes, Route } from 'react-router-dom';
// import AuthGuard from '@/routes/privateRoutes/AuthGuard';
// import SignUp from '@/pages/sing-up/SignUp';
// import Login from '@/pages/login/Login';
// import OAuthRedirect from '@/components/common/AuthRedirector';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       {/* Public routes */}
//       <Route element={<AuthGuard requireAuth={false} redirectTo="/profile" />}>
//         <Route path="/login/sign-in" element={<Login />} />
//         <Route path="/login/sign-up" element={<SignUp />} />
//       </Route>
//       <Route path="/auth/:provider/callback" element={<OAuthRedirect />} />

//       {/* Protected routes */}
//       <Route element={<AuthGuard requireAuth={true} redirectTo="/login/sign-in" />}>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/profile/:userId" element={<Profile />} />
//       </Route>

//       <Route path="*" element={<div >Page not Found !</div>} />
//     </Routes>
//   );
// }

// export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import Profile from "@/pages/profile/Profile";
import AuthGuard from "./privateRoutes/AuthGuard";
import Login from "@/pages/login/Login";
import SignUp from "@/pages/sing-up/SignUp";
import OAuthRedirect from "@/components/common/AuthRedirector";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Public routes */}
      <Route element={<AuthGuard requireAuth={false} redirectTo="/profile" />}>
        <Route path="/login/sign-in" element={<Login />} />
        <Route path="/login/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/auth/:provider/callback" element={<OAuthRedirect />} />
      {/* Protected routes */}
      <Route
        element={<AuthGuard requireAuth={true} redirectTo="/login/sign-in" />}
      >
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Route>

      <Route path="*" element={<>Not Found !</>} />
    </Routes>
  );
}

export default AppRoutes;
