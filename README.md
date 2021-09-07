# Overview

This application provides forms for Soundside Church in Tacoma, WA. Forms can be accessed via '/forms/:form-name'. Submissions can be found at '/submissions'. Submissions are organized by date and form type on the backend and transferred into CSV's on the frontend.

The backend may be found here: https://github.com/jls-github/soundside-forms-backend 

# Roadmap

- Phase one: Forms are hard-coded on the frontend and organized into CSV files for the administrators to access.
- Phase two: Forms are fetched from a CMS that the adminstrator can access. This may or may not be a part of this app (TBD). QR Codes should be generated upon form creation. Forms should be fetched by based on url parameters.

# TODO's

## Phase 1

- [ ] Lock admin view behind password

## Phase 2

- [ ] Create csv column table in backend
- [ ] Create frontend for cms
- [ ] Add required fields

# Frontend Technologies

- React
- React Router
- React CSV
- Styled Components
