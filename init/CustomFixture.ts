import {test as base} from "@playwright/test";

type CustomFixtures = {
    authToken: string;
    sessionId?: string;
};

type CustomFixtures2 = {
    authToken1: string;
    sessionId3?: string;
};

export const test = base.extend<CustomFixtures, CustomFixtures2>({
    authToken: async ({page}, use) => {
        // In a real scenario, you might fetch this token from a secure source or generate it
        const token = 'dummy-auth-token-12345';
        console.log("before use authToken");
        await use(token);
        console.log("after use authToken");
    },
    sessionId: async ({}, use) => {
        // Simulate fetching a session ID
        const session = 'session-67890';
        console.log("before use session");
        await use(session);
        console.log("after use session");
    },

});