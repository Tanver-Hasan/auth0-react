import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Invitations = ()=> {
    const { loginWithRedirect } = useAuth0();

    let url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const organization = params.get('organization');
    const invitation = params.get('invitation');
    loginWithRedirect ({ organization, invitation, });

    return (
      <div className="next-steps my-5">
        Redirecting 
      </div>
    );
  
}

export default Invitations;
