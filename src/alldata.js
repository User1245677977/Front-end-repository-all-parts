// alldata.js
import { useContext } from "react";
import { UserContext, Card } from "./context";

export function AllData() {
  const { currentUser, users } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-4 text-center">All Data</h1>
        <div id="userSubmissions">
          {currentUser ? (
            <Card
              txtcolor="black"
              header="Current User"
              title={currentUser.name}
              text={`Email: ${currentUser.email}`}
              body={
                <>
                  <p><strong>Password:</strong> {currentUser.password}</p>
                  <p><strong>Balance:</strong> ${currentUser.balance}</p>
                </>
              }
            />
          ) : (
            <p>No user is currently signed in.</p>
          )}
          <h2 className="mt-5 mb-4 text-center">All Users</h2>
          {users.length > 0 ? (
            users.map((user, index) => (
              <Card
                key={index}
                txtcolor="black"
                header="User Data"
                title={user.name}
                text={`Email: ${user.email}`}
                body={
                  <>
                    <p><strong>Password:</strong> {user.password}</p>
                    <p><strong>Balance:</strong> ${user.balance}</p>
                  </>
                }
              />
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </div>
    </>
  );
}
