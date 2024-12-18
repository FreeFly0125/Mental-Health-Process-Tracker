/** @format */

import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
  useAuth,
  SignInButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  const { isSignedIn } = useAuth();
  console.log("isSignedIn", isSignedIn);
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
