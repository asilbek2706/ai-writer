import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import DashboardLayout from '@/components/layouts/dashboard-layout.tsx';
import DashboardHome from '@/pages/dashboard-home.tsx';
import { AppContextProvider } from '@/contexts/app.context.tsx';
import { Toaster } from 'react-hot-toast';
import { ContentContextProvider } from '@/contexts/content.context.tsx';
import { DashboardContent } from '@/pages/dashboard-content.tsx';
import ContentNotFound from '@/components/dashboard/content-not-found.tsx';
import Share from './pages/share';
import AuthLayout from '@/components/layouts/auth-layout.tsx';
import Register from '@/components/auth/register.tsx';
import { AuthProvider } from '@/components/auth.context.tsx';
import Login from '@/components/auth/login.tsx';
import ProtectedRoute from '@/components/auth/protected-route.tsx';

import './i18n.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1 className={'text-5xl'}>Home</h1>,
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <DashboardHome />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'content/:id',
                element: <DashboardContent />,
                errorElement: <ContentNotFound />,
            },
        ],
    },
    {
        path: 'share/:id',
        element: <Share />,
        errorElement: <ContentNotFound />,
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'login'} replace />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster />
        <AppContextProvider>
            <AuthProvider>
                <ContentContextProvider>
                    <RouterProvider router={router} />
                </ContentContextProvider>
            </AuthProvider>
        </AppContextProvider>
    </StrictMode>,
);
