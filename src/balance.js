// balance.js
import React, { useContext } from "react";
import { UserContext, Card } from "./context";

export function Balance() {
  const ctx = useContext(UserContext);

  return (
    <Card
      bgcolor="info"
      header="Account Balance"
      body={
        <>
          <h5>Balance</h5>
          <p>{`$${ctx.users[0].balance}`}</p>
        </>
      }
    />
  );
}

export default Balance;
