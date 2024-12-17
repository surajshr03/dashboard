import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            // Redirect to login if not authenticated
            router.push('/login');
        }
    }, [user, router]);

    // Render children only if authenticated
    return user ? <>{children}</> : null;
};