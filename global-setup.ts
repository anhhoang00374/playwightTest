import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    console.log('>>> Global setup running...');

    // sau này anh viết logic ở đây:
    // - login
    // - seed data
    // - generate token
    // - write storageState.json
}

export default globalSetup;