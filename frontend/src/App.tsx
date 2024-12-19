/** @format */

import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
  useSignIn,
  SignInButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  const { isLoaded, signIn } = useSignIn();
  console.log("signIn", signIn);
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
    </div>
  );
}

export default App;
