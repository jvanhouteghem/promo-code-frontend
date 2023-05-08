# promo-code-frontend

## Architecture & technical choices:
- **Typescript**: (cf: https://www.typescriptlang.org/why-create-typescript)
- **NextJS**: One of the best tool at the moment to create a full-stack Web application
- **Tailwind**: Why tailwind is not used? (cf: https://blog.shimin.io/why-i-dont-use-tailwind-in-production/#:~:text=Tailwind%20forces%20an%20extra%20HTML,bunch%20of%20new%20class%20names)
- **Git Flow**: Git flow is used to separate each branch responsabilities. Its a powerfull way to clean and facilitate the delivery process (cf: https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html)
- **Git Action**: A powerfull CI/CD system
- **AWS EC2**: A powerfull cloud service, which is very usefull to focus only on develop/deploy and ignore hardware part.
- **Conventional Commits Rules**: https://www.conventionalcommits.org/en/v1.0.0-beta.4/#specification
- **react-form-catalog**: Auto form generation
- **SASS**
- **React-Query**
- **grid/filter**: https://mui.com/x/react-data-grid/filtering/ --> TODO pro cons (ex cons: responsive ko)
- **Cypress**: E2E testing
- **File naming**: [Google JS style guide](https://google.github.io/styleguide/jsguide.html#file-name)
--------- TODO ---------
- **CI/CD with git actions**
- **linter**
- **tsrules**

## App CORE Concepts
- DRY (ex: use header layout)
- "Scaling" app
- Clean console

## Tests CORE concepts
- Readability + DRY: create Page Object class and use high order function in tests
- custom data-test-id for selector (!data-cy) with uniq name

## Good practices: 
- **Be careful about good error messages** ([link](https://uxplanet.org/how-to-write-good-error-messages-858e4551cd4))
- **Folders clean architecture**

## Inspiration sources UI UX:

#### [Hey James!](https://dribbble.com/shots/14677586-CouponsCoupons)
![image](https://cdn.dribbble.com/users/251359/screenshots/14677586/media/b56bdb130fa0dbcc8d81ba8506ad3730.png)

#### [RM dashboard — Untitled UI](https://dribbble.com/shots/18567097-CRM-dashboard-Untitled-UI)

![image](https://cdn.dribbble.com/userupload/2960625/file/original-42deb2e9bedff93d05e2cbf08000afa3.jpg?compress=1&resize=752x)

#### [SkinnyGlow - My Cart Page](https://dribbble.com/shots/20991067-SkinnyGlow-My-Cart-Page)
![image](https://cdn.dribbble.com/userupload/5552497/file/original-5c31202465023edb5fda3fa9e9b7160f.png?compress=1&resize=752x)