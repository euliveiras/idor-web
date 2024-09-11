import * as Msal from "@azure/msal-browser"; // if using CDN, 'Msal' will be available in global scope
// Configuration object constructed.
const config = {
    auth: {
        clientId: import.meta.env.CLIENT_ID
    }
};

// create PublicClientApplication instance
export const publicClientApplication = new Msal.PublicClientApplication(config);
