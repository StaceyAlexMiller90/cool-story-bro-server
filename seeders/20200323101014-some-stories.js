'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1584931423308-5105db746e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1582599128433-5a62556958ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1585144570627-aa9de0f47f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1798&q=80',
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1470073755300-6ec0f9cfa01c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80',
          homepageId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1439166382102-d026ec153cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          homepageId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1584907797075-c5308ada266f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          homepageId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lorem Ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lorem, rhoncus venenatis dui id, fermentum tempor est. Nulla aliquet odio dui, sit amet scelerisque metus bibendum ac. Suspendisse a lorem sem. Nullam vel mi non ante tincidunt laoreet. Sed mi quam, sollicitudin non massa placerat, lobortis eleifend nibh. Integer sodales quam non aliquam congue. Pellentesque molestie aliquam ligula id rutrum. Proin ullamcorper ex at nulla aliquam, at vestibulum odio tristique.",
          imageUrl: 'https://images.unsplash.com/photo-1505515888495-c1897b0b5740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          homepageId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }    
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  }
};
