import Navbar from '@/components/Navbar';
import SessionProviderWrapper from '../../components/SessionProviderWrapper';
function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProviderWrapper>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                {children}
            </div>
        </SessionProviderWrapper>
    )
}
export default Layout;