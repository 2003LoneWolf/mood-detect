import { SignIn } from "@clerk/nextjs";
 
const SignInPage = () =>{
    return <div className="flex justify-center py-16">
        <SignIn/>
    </div>
    
}

export default SignInPage;