# Ballot Request App:
A collaborative team project with UX/UI

Team Members:

- Annie Wang (https://github.com/annie1289)
- Brian Nester (https://github.com/CyberDragonWizard)
- Dani Broadwater (https://github.com/bw-dani)
- Chris Cano (Git Tzar)

# Outline & Figma

- [Ballot-Request Whimsical](https://whimsical.com/5hp8zvk6E1jwmU3gSpYndv)

![Imgur](https://i.imgur.com/JtIYYzs.png)

- [Election Team High-Fidelity Mobile Figma](https://www.figma.com/file/uI6hwQTjMUy0VTsEojnrGT/Elections-Team-Copy?node-id=99%3A137)

![Imgur](https://i.imgur.com/WZAmX5C.png)

# Second Iteration Figma

![Imgur](https://i.imgur.com/piPLGCM.png)

# UX Team Resources

- [Assets](https://drive.google.com/drive/folders/1BjxuwwJl_1vnPyIMUVP1PaX4ptEjFxRn?usp=sharing)
- [Zeplin](https://scene.zeplin.io/project/5f806a04a6f04374b3fc28d6)
- [Complete Figma](https://www.figma.com/file/2ZIcvEJAQ08cZWwx8uYdIu/Elections-Team?node-id=99%3A137)


# Team Expectations

[Google Docs](https://docs.google.com/document/d/1MCu87NczJqWrbCnXlhNCebWg2PJXXtUMn8x4R68w30c/edit?usp=sharing)

# Overview

This concept app is a demonstration of how we can bring one aspect of the election process to the 21st century by allowing you to request an absentee ballot for the state of NY from your phone 

# Schemas

Our backend schemas
```
const RequestBallot = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    apartmentSuite: { type: String, required: false },
    city: { type: String, required: true },
    county: { type: String, required: true },
    zipCode: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: false },
    cell: { type: String, required: false }
  }
)

module.exports = mongoose.model('RequestBallot', RequestBallot)

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        streetAddress: { type: String, required: true },
        apartmentSuite: { type: String, required: false },
        city: { type: String, required: true },
        county: { type: String, required: true },
        zipCode: { type: String, required: true },
        day: { type: String, required: true },
        month: { type: String, required: true },
        year: { type: String, required: true },
        email: { type: String, required: false },
        cell: { type: String, required: false },
    }
);

module.exports = mongoose.model('users', User)
```

# MVP

[Kanban Project Timeline/Overview](https://github.com/ccano2011/election-app/projects/1)

# Post-MVP

- Dynamic styling/animation

# Existing Issues

- Authentication is only partially working; Logic to retrieve the user information saved in the back-end and store it in Context is not built out yet. Only matches username and password.