import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
    test('has title', async ({ page }) => {

        await page.goto('http://localhost:5173/');

        await expect(page).toHaveTitle('AI Writer Assistant');
    });

    test('get started navigation', async ({ page }) => {
        await page.pause()
        await page.goto('http://localhost:5173/');

        const heroCta = page.getByTestId('@hero/register-link')
        await heroCta.click();

        await expect(page).toHaveURL('http://localhost:5173/auth/register');

        const loginInput = page.getByTestId('@register/login');
        await loginInput.fill('loginfrome2etest')

        const passwordInput = page.getByTestId('@register/password');
        await passwordInput.fill('passwordfrome2etest')
    })
});