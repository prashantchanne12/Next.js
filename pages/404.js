import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) -> just like pressing back button
            // router.go(1) -> forward button
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div className='not-found'>
            <h1>Oooops....</h1>
            <h2>Page Not Found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;