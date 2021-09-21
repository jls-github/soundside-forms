# Overview

This application provides forms for Soundside Church in Tacoma, WA. Forms can be accessed via '/forms/:form-name'. Submissions can be found at '/submissions'. Submissions are organized by date and form type on the backend and transferred into CSV's on the frontend.

The backend may be found here: https://github.com/jls-github/soundside-forms-backend 

# Roadmap

This document organizes future planning for all parts of the app

- Phase one (completed): Forms are hard-coded on the frontend and organized into CSV files for the administrators to access.
- Phase two (in process): Forms are fetched from a CMS that the adminstrator can access. This will be a separate repository and url. QR Codes should be generated upon form creation. Forms should be fetched based on url parameters.

# TODO's

## Phase 2

### Fontend

- [ ] Add required fields (maybe switch the app to Formik + Yup?)
- [ ] Fetch form data from backend using url to grab form name (blocked, mock up for now)
    - Maybe we have a FormUrl table that links to both the guest and member form. If it only finds one associated form, it will not display a guest toggle.
    - Or maybe that is thinking too far ahead. Should delay this until the future.

### CMS

- [ ] Build submissions view
- [ ] Build forms creation panel
- [ ] Create csv column table in backend

### Backend

- [ ] Create auth system (jwt to start)
- [ ] New cors policy to allow CMS

# Frontend Technologies

- React
- React Router
- React CSV
- Styled Components
- React Spinners
