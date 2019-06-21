Feature: Signup to revollet
  As an internet user
  I want to signup to Revollet Wallet

  Scenario: Login to Revollet Wallet
    When I visited "https://prod-staging.revollet.io/"
    Then I Click Link Button "Create Account"
    Then I input "naruchan" and "ngocbichdo031095@gmail.com" and "Naru2311" and "Naru2311"

