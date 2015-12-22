# ng2-seed
## Project Structure
```
.
├── gulp/
│   ├── config.js               Contains all project paths to be used in gulp workflows
│   │
│   └── tasks/                  Gulp tasks are modularized and put in here
│
├── src/                        This is where the source code resides
│   │
│   ├── vendor/                 Vendor imports
│   │   ├── vendor-scripts.ts
│   │   └── vendor-styles.sass
│   │
│   ├── public/                 Static assets
│   │   └── favicon.ico
│   │
│   └── app/                    Angular2 app
│       ├── bootstrap.ts        Entry script
│       ├── index.html          Main template
│       │
│       ├── components/
│       ├── services/
│       └── pipes/
│
└── builds/                     Folders in here get cleaned every time their Gulp workflow is executed
    ├── dev/                    The dev 'build' is not as optimized as the prod build
    └── prod/                   Compiled through a different Gulp workflow, is more optimized than dev
```
