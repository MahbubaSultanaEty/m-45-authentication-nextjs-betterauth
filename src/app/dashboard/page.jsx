import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';


const DashboardPage = async() => {

 const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log("session", session);
    const user = session?.user;
    if (!user) {
        redirect('/auth/signin')
        return <div>Please Sign In to access the dashboard</div>
    }

    return (
        <div>
            <h2 className="text-center font-bold">This is dashing board</h2>
        </div>
    );
};

export default DashboardPage;