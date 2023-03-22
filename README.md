# Deel FE test - Hector Serrano

## Description

This aims to solve the FE test outlined by Deel.

This repo will contain an <AutomComplete /> component that expects the following properties:

* id
* options

This is an effort to reproduce a similar behavior as open source components like Material UI's Autocomplete component. Important to mention that there is another approach for filtering out an autocomplete component which is by debouncing the user input + hitting an endpoint which accepts queryParameters. Given the time API endpoint limitation for this test, we'll try to mimick the Material UI one.

Please take a moment to read over any comment outlined throughout the application.

## repo instructions

* install Vite (if plan on using CLI)
* install dependencies outlined in package.json ~> npm run install
* run project ~> npm run dev

## make sure to create a .env file

**in this case we're exposing the URL through the readme but this is often share through a 1Password or LastPass app when in a development team**
API_BASE_URL=<https://reqres.in/api>

## environment variable VITE exposure

<https://vitejs.dev/guide/env-and-mode.html>
