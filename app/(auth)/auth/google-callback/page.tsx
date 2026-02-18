// app/(auth)/auth/google-callback/page.tsx
import { getServerSession } from "next-auth";
import { gql } from '@apollo/client'
import { serverClient } from "@/lib/apollo-server";
import { generateSignature } from "@/lib/utils";

import LoginPage from "../../login/page";


export default async function GoogleCallback() {
  const session = await getServerSession();



  if (!session?.user) {
    //redirect("/login");
  }

  const { name, email } = session.user;

  console.log({ name: name.split(" ")[0], email });

   
const { data } = await serverClient.query({
  query: CHECK_USER_QUERY,
  variables: { email: email },
  
});

 
  if (data?.users.length === 0) {
   // console.log("No user found with email:", email);
    // Optionally, you could create a new user here or redirect to a registration page
    //redirect("/register");

    const password = generateSignature( email, name.split(" ")[0] );//console.log("Generated password:", password);

    const { data: createUserData } = await serverClient.mutate({ mutation: CREATE_USER_MUTATION, variables: { userName: name.split(" ")[0], email, password }}); //console.log("Create user result:", createUserData); 

    if (createUserData?.createUser) {
      //console.log("User created successfully:", createUserData.createUser);
      // Optionally, you could log the user in immediately or redirect to a welcome page
      //redirect("/welcome");

  

      return (
  <LoginPage isGoogleLogin={true} googleEmail={email} googlePassword={generateSignature( email, name.split(" ")[0] )} />
  );
     
    } else {
      //console.error("Failed to create user:", createUserData);
      // Handle the error case, e.g., show an error message or redirect to an error page
      //redirect("/error");
    }

  } else {
   // console.log("User found with email:", email);
    // User exists, you can proceed with your logic (e.g., redirect to dashboard)
    //redirect("/dashboard");
    
       return (
  <LoginPage isGoogleLogin={true} googleEmail={email} googlePassword={generateSignature( email, name.split(" ")[0] )} />
  );
  }



 
  // do whatever you want here (redirect, render, etc)
  //redirect("/membershipform");

  


}

const CHECK_USER_QUERY = gql`
  query CheckUser($email: String!) {
    users(where: { email: { equals: $email } }) { 
      email
      userName
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($userName: String!, $email: String!, $password: String!, $isEmailVerified: Boolean = true, $isGoogleAuth: Boolean = true) {
    createUser(data: { userName: $userName, email: $email, password: $password, isEmailVerified: $isEmailVerified, isGoogleAuth: $isGoogleAuth }) { 
    id
}
 }`;


 const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
           item {
               id
               email
               isProfile
               isMemberForm
               isEmailVerified
       
           }
       }

       ...on UserAuthenticationWithPasswordFailure {
           message
       }
        }
}`




