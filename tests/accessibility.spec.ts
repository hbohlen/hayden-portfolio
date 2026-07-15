import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('portfolio', () => {
  test('has no detectable accessibility violations', async ({ page }) => {
    await page.goto('/')
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })

  test('keeps the page within the viewport and exposes core actions', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }))

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth)
    await expect(page.getByRole('heading', { name: /I build practical AI tools/ })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Explore BotMentor' })).toHaveAttribute('href', 'https://botmentor.vercel.app')
    await expect(page.getByRole('heading', { name: 'A path built one step at a time.' })).toBeVisible()
    await expect(page.getByText('2015–2018')).toBeVisible()
    await expect(page.getByText('2023–2025')).toBeVisible()
    await expect(page.getByText('2026 · Put the learning to work')).toBeVisible()
    await expect(page.getByText('Prototype case study')).toBeVisible()
    await expect(page.getByText(/not a production-ready diagnostic service/)).toBeVisible()
    await expect(page.getByRole('link', { name: /Resume/ }).first()).toHaveAttribute('href', '/hayden-bohlen-resume.pdf')
    const resume = await page.request.get('/hayden-bohlen-resume.pdf')
    expect(resume.ok()).toBeTruthy()
    expect(resume.headers()['content-type']).toContain('application/pdf')
    await expect(page.getByRole('link', { name: /bohlenhayden@gmail.com/ })).toHaveAttribute('href', 'mailto:bohlenhayden@gmail.com')
  })
})
