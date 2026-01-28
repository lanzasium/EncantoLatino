from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load local file
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Wait for rendering
        page.wait_for_timeout(1000)

        # Screenshot Services
        page.locator("#services").scroll_into_view_if_needed()
        page.screenshot(path="verification/services_unified.png")
        print("Services screenshot taken")

        # Screenshot Products
        page.locator("#products").scroll_into_view_if_needed()
        page.screenshot(path="verification/products_unified.png")
        print("Products screenshot taken")

        # Screenshot Certificates
        page.locator(".certificates-section").scroll_into_view_if_needed()
        page.screenshot(path="verification/certificates_unified.png")
        print("Certificates screenshot taken")

        browser.close()

if __name__ == "__main__":
    run()
