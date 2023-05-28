# **Gear Addict**

Gear Addict is an online application that allows users to add and categorise their music gear, and also share details about their live rigs with the community. Users can interact with other users by becoming a fan, as well as liking, commenting and saving rigs.

This project was built as the final portfolio submission for the [Code Institute](https://codeinstitute.net/) Higher National Diploma in Full Stack Software Development. 

The project has been split into two parts - the front-end built with [React](https://react.dev/), and the back-end API powered by the [Django REST Framework](https://www.django-rest-framework.org/). 

More information on the back-end of the site can be found in the back-end [README](https://github.com/Matthew-Hurrell/gear-addict-api/blob/main/README.md).

Link to the live site - [Gear Addict Live Site](https://gear-addict-react.herokuapp.com/)

Link to the live API - [Gear Addict Live API](https://gear-addict.herokuapp.com/)

Link to the back-end repository - [Gear Addict Back-End Repo](https://github.com/Matthew-Hurrell/gear-addict-api)

![Gear Addict Responsive](readme/images/gear-addict-responsive.png)

# Contents

* [**Project**](<#project>)
    * [Objective](<#objective>)
    * [Site User Goal](<#site-user-goal>)
    * [Site Owner Goal](<#site-owner-goal>)
    * [Target Audience](<#target-audience>)
    * [**Project Management**](<#project-management>)
        * [GitHub Project Board](<#github-project-board>)
        * [Database Schema](<#database-schema>)
* [**User Experience UX**](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [User Stories](<#user-stories>)
    * [Site Structure](<#site-structure>)
    * [Colour Scheme](<#colour-scheme>)
    * [Typography](<#typography>)
* [**Features**](<#features>)
    * [**Existing Features**](<#existing-features>)
        * [**Homepage**](<#homepage>)
        * [**Authorisation**](<#authorisation>)
            * [Sign Up](<#sign-up>)
            * [Log In](<#log-in>)
            * [Log Out](<#log-out>)
        * [**404 Page**](<#404-page>)
    * [**Future Features**](<#future-features>)
* [**Components**](<#components>)
* [**Testing**](<#testing>)
    * [**Validator Tests**](<#validator-tests>)
        * [W3C (HTML)](<#w3c-html>)
        * [W3C (CSS)](<#w3c-css>)
        * [ESLint (JavaScript)](<#eslint-javascript>)
    * [**Additional Tests**](<#additional-tests>)
        * [Manual Tests](<#manual-tests>)
        * [Input Validation Tests](<#input-validation-tests>)
        * [Automated Tests](<#automated-tests>)
        * [Responsive Tests](<#responsive-tests>)
        * [Browser Tests](<#browser-tests>)
        * [Lighthouse Tests](<#lighthouse-tests>)
    * [**Bugs**](<#bugs>)
        * [Resolved](<#resolved>)
        * [Unresolved](<#unresolved>)
* [**Technologies Used**](<#technologies-used>)
    * [Languages](<#languages>)
    * [Frameworks](<#frameworks>)
    * [Software](<#software>)
    * [Libraries](<#libraries>)
* [**Deployment**](<#deployment>)
    * [**Project Deployment Via Heroku**](<#project-deployment-via-heroku>)
* [**Credits**](<#credits>)
    * [**Content**](<#content>)
    * [**Media**](<#media>)
    * [**Code**](<#code>)
*  [**Acknowledgements**](<#acknowledgements>)

# Project

In this section I will detail the projects purpose and goals, as well as the project management methodologies used throughout the development process.

[Back to top](<#contents>)

## Objective

To provide a stable platform for music gear enthusiasts and collectors to organise and share their music gear and live rigs.

[Back to top](<#contents>)

## Site User Goal

Users of the Gear Addict site may have many different goals. They may wish to categorise and organise their music gear, or they may want to share their live setup with other users who have similar interests. They could just be interested in browsing other users live rigs for general interest or inspiration, or they may just wish to interact and network with the community to provide feedback.

[Back to top](<#contents>)

## Site Owner Goal

To provide a stable and enjoyable user experience that encourages continued user interaction and participation. The platform should be engaging and welcoming to new users. Content should be well structured and of high quality. Navigation and site functionality should be intuitive and accessible. 

[Back to top](<#contents>)

## Target Audience

The target audience is anyone who has an interest in live music performance and music gear. Most users will be musicians, but there could also be some collectors on the platform. Users could be male or female, but the site is styled more towards a young male audience, as this is likely to be the majority of the users. 

[Back to top](<#contents>)

## Project Management

An agile methodology was used to plan and develop the Gear Addict project. All the main features of the application were recorded as epics and then refined into user stories. These user stories were created and stored as GitHub issues and then mapped into iterations to help to plan and allocate the workload. 

[Back to top](<#contents>)

### GitHub Project Board

![Gear Addict Project Board](readme/images/gear-addict-project-board.png)

All the Gear Addict user stories were added to a GitHub project board to assist with tracking progress. All user stories started in the to-do section. On completion, each user story was moved into the done section and marked as closed. 

[Click here to view the Gear Addict Project Board](https://github.com/users/Matthew-Hurrell/projects/3)

[Back to top](<#contents>)

### Database Schema

![Gear Addict Database Schema](readme/images/gear-addict-database-schema.png)

More information on the database schema can be found on the [Gear Addict Back-end API project readme](https://github.com/Matthew-Hurrell/gear-addict-api/blob/main/README.md).

[Back to top](<#contents>)

# User Experience UX

This section will detail the planning and design choices for the Gear Addict application.

[Back to top](<#contents>)

## Wireframes

Wireframes for the Gear Addict project were created using [Balsamiq](https://balsamiq.com/). All wireframes were completed pre-development. These wireframes were used as the basis for the Gear Addict page and component designs. Some minor changes were made during the development process.

### Home Page

![Gear Addict Home Page](readme/images/home-page-wireframe.png)

[Back to top](<#contents>)

### Sign Up Page

![Gear Addict Sign Up Page](readme/images/sign-up-wireframe.png)

[Back to top](<#contents>)

### Sign-In Page

![Gear Addict Sign In Page](readme/images/sign-in-wireframe.png)

[Back to top](<#contents>)

### All Rigs Page

![Gear Addict All Rigs Page](readme/images/all-rigs-wireframe.png)

[Back to top](<#contents>)

### Rig Details Page

![Gear Addict Rig Details Page](readme/images/rig-details-wireframe.png)

[Back to top](<#contents>)

### Saved Rigs Page

![Gear Addict Saved Rigs Page](readme/images/saved-rigs-wireframe.png)

[Back to top](<#contents>)

### Add Rig Page

![Gear Addict Add Rig Page](readme/images/add-rig-wireframe.png)

[Back to top](<#contents>)

### Add Gear Page

![Gear Addict Add Gear Page](readme/images/add-gear-wireframe.png)

[Back to top](<#contents>)

### My Gear Page

![Gear Addict My Gear Page](readme/images/my-gear-wireframe.png)

[Back to top](<#contents>)

### Profile Page

![Gear Addict Profile Page](readme/images/profile-wireframe.png)

[Back to top](<#contents>)

### 404 Page

![Gear Addict 404 Page](readme/images/404-wireframe.png)

[Back to top](<#contents>)

## User Stories

![Gear Addict User Story Example](readme/images/gear-addict-user-story.png)

![Gear Addict User Story Iteration 1](readme/images/gear-addict-user-story-iteration.png)

In terms of project management, user stories are an integral part of the software development creative process. Gear Addict consists of 60 user stories, each broken down into acceptance criteria and tasks. Each user story has a story points number in relation to the time / difficulty of the tasks, and a priority label signifying the importance of the feature. The user stories were created from 'Epics', which are large over-arching features/concepts. These epics were refined down into smaller individual parts and made into user stories. Completed user stories were marked as closed. Throughout development, user stories were sorted into weekly iterations that were used to structure and allocate the workload each week. Each iteration was planned to not include more than 60% must-have user stories.

A full list of user stories can be found in a separate file here - [Gear Addict User Stories](https://github.com/Matthew-Hurrell/gear-addict/blob/main/readme/userstories.md)

[Back to top](<#contents>)

## Site Structure

![Gear Addict Site Structure](readme/images/gear-addict-site-structure.png)

The site structure for the Gear Addict application was kept relatively simple and user-friendly to avoid confusion. The main site nav bar and footer nav are present on every page of the site to allow for easy access to site navigation. Non-authenticated users have limited access to pages within the site, and this is reflected in the changing state of the nav menus. Non logged in users only have access to the home, latest, rig detail, other user profiles and log-in / sign-up auth pages. Authenticated users can access the add rig / gear forms as well as the feed, gear, rigs, saved, user profile page and sign-out functionality. 

[Back to top](<#contents>)

## Colour Scheme

![Gear Addict Colour Scheme](readme/images/gear-addict-colour-scheme.png)

The Gear Addict colour scheme colours were selected from the inbuilt Tailwind colours from the [Tailwind CSS Customizing Colors List](https://tailwindcss.com/docs/customizing-colors). They were chosen for their modern and professional look and feel.

[Back to top](<#contents>)

## Typography

Gear Addict uses [Google Fonts](https://fonts.google.com/) for its typography. [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto) was used for headings, links and nav elements. Roboto is a neo-grotesque sans-serif typeface and it was chosen for its modern geometric look. [Cardo](https://fonts.google.com/specimen/Cardo?query=cardo) was used for paragraphs and lists. Cardo is a large Unicode font, and it was chosen to add some contrast between the Roboto font and because it works well for general typesetting.

[Back to top](<#contents>)

# Features

This section will detail the features and components present in the Gear Addict application, as well as possible future features.

[Back to top](<#contents>)

## Existing Features

### Sign-Up Page

![Gear Addict Sign Up Page](readme/images/gear-addit-sign-up-page.png)

The sign-up page was created to allow users to register their details and sign-up for an account. On successful form submission the user is redirected to the sign in page to sign into their new account.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/1)

[Back to top](<#contents>)

### Sign-In Page

![Gear Addict Sign In Page](readme/images/gear-addict-sign-in-page.png)

The sign-in page was created to allow users to sign into their account to access all of the Gear Addict features. On successful form submission, the user is redirected back to the last page they were on.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/2)

[Back to top](<#contents>)

### Sign Out

![Gear Addict Sign Out](readme/images/gear-addict-sign-out.png)

The Gear Addict sign-out functionality doesn't have its own page. The user simply clicks the sign out button in one of the nav menus and they are signed out of their account and redirected back to the home page.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/3)

[Back to top](<#contents>)

### Home Page

![Gear Addict Home Page 1](readme/images/gear-addict-homepage-1.png)

![Gear Addict Home Page 2](readme/images//gear-addict-homepage-2.png)

The Gear Addict homepage features the homepage hero component as well as the intro component, how-to component and the hottest rigs list. This is the central area for the Gear Addict application.

[Click here to view the how to use section user story](https://github.com/Matthew-Hurrell/gear-addict/issues/61)

[Click here to view the view list of hottest rigs user story](https://github.com/Matthew-Hurrell/gear-addict/issues/58)

[Back to top](<#contents>)

### Latest Rigs Page

![Gear Addict Latest Rigs Page](readme/images/gear-addict-latest-rigs-page.png)

The latest rigs page is available to view for both authenticated and non-authenticated users. The page features a list of all the rigs currently on the site. The list uses the React infinite scroll component to continually load more rigs if the user scrolls to the end of the list. Rigs are loaded in groups of ten to reduce loading times. This helps to improve user experience as the user doesn't need to click to view the next page of paginated results, and can instead continue to scroll the same page. The list is ordered from newest to oldest. The page also features the search bar component so users can search for particular rigs or attributes if they want to filter out results. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/42)

[Click here to view the infinite scroll user story](https://github.com/Matthew-Hurrell/gear-addict/issues/51)

[Back to top](<#contents>)

### Feed Page

![Gear Addict Feed Page](readme/images/gear-addict-feed-page.png)

The feed page is a page where users can view all of the rigs posted by other users they are a fan of. If a user becomes a fan of another user, all of their rigs will appear in this page. This is a good way for users to keep up to date with what other users are posting in one central location. This page features infinite scroll and a search bar which users can use to search for a rig or a particular user. This page is only available to authenticated users. If non-authenticated users try to access this page they are redirected to the home page.

[Click here to view the search rigs user story](https://github.com/Matthew-Hurrell/gear-addict/issues/54)

[Back to top](<#contents>)

### Gear Page

![Gear Addict Gear Page](readme/images/gear-addict-gear-page.png)

The gear page is another page only available to authenticated users. This is the page used to display all the user's gear items. The page features a list of gear cards which use the React infinite scroll component to allow for the continued loading of cards without page pagination. This page also features a search bar to allow users to search for certain gear items. Users can only see their own gear items. If non-authenticated users try to access this page they are redirected to the home page.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/32)

[Back to top](<#contents>)

### Rigs Page

![Gear Addict Rigs Page](readme/images/gear-addict-rigs-page.png)

The rigs page is another page only available to authenticated users. This is the page used to display all the user's rigs that they own. The page features a list of rig cards which use the React infinite scroll component to allow for the continued loading of cards without page pagination. This page also features a search bar to allow users to search for certain rigs. If non-authenticated users try to access this page they are redirected to the home page.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/41)

[Back to top](<#contents>)

### Saved Page

![Gear Addict Saved Page](readme/images/gear-addict-saved-page.png)

The saved page is another page only available to authenticated users. This page displays all the rigs that the user has saved by clicking the star/save button on the rig. This allows users to create a list of rigs that they want to store on their account to view later. This page also features React infinite scroll and search functionality. If non-authenticated users try to access this page they are redirected to the home page.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/15)

[Back to top](<#contents>)

### Add Rig Form

![Gear Addict Add Rig Form](readme/images/gear-addict-add-rig-form.png)

The add rig form is only available to authenticated users. It can be accessed via the site navigation menus. If non-authenticated users try to access this page they are redirected to the home page. The page features the rig form. On successful submission, the user is redirected to the newly created rig details page. If the user clicks the cancel button they are returned to the previous page they were on. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/34)

[Back to top](<#contents>)

### Add Gear Form

![Gear Addict Add Gear Form](readme/images/gear-addict-add-gear-form.png)

The add gear form is only available to authenticated users. It can be accessed via the site navigation menus. If non-authenticated users try to access this page they are redirected to the home page. The page features the gear form. On successful submission, the user is redirected to the gear page with the new gear instance visible as a card. If the user clicks the cancel button they are returned to the previous page they were on. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/17)

[Back to top](<#contents>)

### Profile Page

![Gear Addict Profile Page](readme/images/gear-addict-profile-page.png)

All users who sign up have a profile automatically created. The user profile page is only visible to authenticated users, but users who aren't authenticated can still view other user profiles. The profile page displays a header image which can be customised, a profile image which can also be customised, as well as profile details and information as well as basic stats on fans, rigs, gear and idols. The popular profiles component is also displayed here. All of a user's rigs are displayed on their profile page. There is also a search bar component to search and filter the rigs. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/49)

[Back to top](<#contents>)

### Rig Detail Page

![Gear Addict Rig Detail 1](readme/images/gear-addict-rig-detail-1.png)

![Gear Addict Rig Detail 2](readme/images/gear-addict-rig-detail-2.png)

The rig detail page is visible to both authenticated and non-authenticated users. The page features a hero section with the rig name, an image gallery section which displays the rig attributes, a section which displays the rig details and a comments section where users can view or add comments if they are authenticated. Users can also view full-quality rig images by clicking the view image gallery button. Every rig has a rig details page which can be navigated to by clicking the view rig link on the related rig card.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/63)

[Back to top](<#contents>)

### Edit Profile Details Form

![Gear Addict Edit Profile Details Form](readme/images/gear-addict-edit-profile-form.png)

The edit profile details form is only accessible via the profile page menu to users who are authenticated and own the profile. Clicking the edit icon directs the user to the edit profile details page. The form fields are pre-populated with the user's profile details. Changing the fields and submitting the form directs the user back to their profile with the details changed. Clicking the cancel button returns the user to their profile page with no changes made. Users can also change their profile and header images using this form. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/43)

[Click here to view the change profile header image user story](https://github.com/Matthew-Hurrell/gear-addict/issues/59)

[Click here to view the change profile image user story](https://github.com/Matthew-Hurrell/gear-addict/issues/45)

[Back to top](<#contents>)

### Edit Username Form

![Gear Addict Edit Username Form](readme/images/gear-addict-edit-username-form.png)

The edit username form is only accessible via the profile page menu to users who are authenticated and own the profile. Clicking the edit username icon directs the user to the edit username page. The form field is pre-populated with the user's current username. Changing the field and submitting the form directs the user back to their profile with the username changed. Clicking the cancel button returns the user to their profile page with no changes made.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/5)

[Back to top](<#contents>)

### Edit Password Form

![Gear Addict Edit Password Form](readme/images/gear-addict-edit-password-form.png)

The edit password form is only accessible via the profile page menu to users who are authenticated and own the profile. Clicking the edit password icon directs the user to the edit password page. The form contains two fields for password entry confirmation - ensuring a user doesn't accidentally spell the password wrong or add an extra character by mistake. Changing the fields and submitting the form directs the user back to their profile with the account password changed. Clicking the cancel button returns the user to their profile page with no changes made.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/4)

[Back to top](<#contents>)

### Edit Gear Form

![Gear Addict Edit Gear Form](readme/images/gear-addict-edit-gear-form.png)

The edit gear form is only accessible via the gear card dropdown menu to users who are authenticated and own the gear. Clicking the edit icon directs the user to the edit gear form page. The form fields are pre-populated with the gear details. Changing the fields and submitting the form directs the user back to their gear page with the gear details changed. Clicking the cancel button returns the user to their gear page with no changes made.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/18)

[Back to top](<#contents>)

### Edit Rig Form

![Gear Addict Edit Rig Form](readme/images/gear-addict-edit-rig-form.png)

The edit rig form is only accessible via the rig details dropdown menu to users who are authenticated and own the rig. Clicking the edit icon directs the user to the edit rig form page. The form fields are pre-populated with the rig details. Changing the fields and submitting the form directs the user back to the rig details page with the rig details changed. Clicking the cancel button returns the user to the rig details page with no changes made.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/36)

[Back to top](<#contents>)

### Delete Gear

![Gear Addict Delete Gear](readme/images/gear-addict-delete-gear.png)

The delete gear icon is available via the gear dropdown menu to authenticated users who own the gear. There is no page for gear deletion. The user simply clicks the delete icon and the gear list is re-rendered with the gear instance deleted and removed. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/19)

[Back to top](<#contents>)

### Delete Rig

![Gear Addict Delete Rig](readme/images/gear-addict-delete-rig.png)

The delete rig icon is available via the rig details dropdown menu to authenticated users who own the rig. There is no page for rig deletion. The user simply clicks the delete icon, the rig is deleted and the user is redirected back to the last page they visited. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/37)

[Back to top](<#contents>)

### Like / Unlike Rig

![Gear Addict Like / Unlike Rig](readme/images/gear-addict-like-rig.png)

The like / unlike rig buttons are only visible to authenticated users. They are also hidden on rigs owned by the user so they cannot like / unlike their own rigs. The buttons are visible on the rig cards and on the rig detail pages. When a user likes a rig, the like button is hidden and replaced with the unlike button to display to the user that the rig has been liked. 

[Click here to view the like a rig user story](https://github.com/Matthew-Hurrell/gear-addict/issues/13)

[Click here to view the unlike a rig user story](https://github.com/Matthew-Hurrell/gear-addict/issues/14)

[Back to top](<#contents>)

### Save / Unsave Rig

![Gear Addict Save / Unsave Rig](readme/images/gear-addict-save-rig.png)

The save / unsave rig buttons are only visible to authenticated users. They are also hidden on rigs owned by the user so they cannot save / unsave their own rigs. The buttons are visible on the rig cards and on the rig detail pages. When a user saves a rig, the save button is hidden and replaced with the unsave button to display to the user that the rig has been saved. Saved rigs appear in a user's saved section so they can be easily accessed at a later date.

[Click here to view the save a rig user story](https://github.com/Matthew-Hurrell/gear-addict/issues/15)

[Click here to view the unsave a rig user story](https://github.com/Matthew-Hurrell/gear-addict/issues/16)

[Back to top](<#contents>)

### 404 Page

![Gear Addict 404 Page](readme/images/gear-addict-404-page.png)

The Gear Addict 404 page is triggered when a user navigates to a site URL which doesn't exist. This could be because of a number of reasons, including a faulty link or an expired URL. Most users will not see this page, but it is there as a backup for users who encounter these rare errors. The purpose of the 404 page is to notify the user that there has been an error, and the page that they have tried to access cannot be found.

[Back to top](<#contents>)

## Future Features

In this section, I will provide a list of potential features that could be implemented in the future.

1. Further profile statistics could be added to the profile pages. This section would only be visible to profile owners on their own profiles. The stats could include a profile view count, total value of gear, and most liked rig along with further rig/gear statistics.
2. A user could have the functionality to completely delete their account along with any related content. 
3. Adding profile contact details could be an option for users who wish to add their contact details to their profiles for networking purposes.
4. Adding profile social media links could also be an optional choice for users.
5. Sound/video fields could be added to rigs to allow users to attach recordings of what the rigs sound like live.
6. An events section could be added so users can post gig details and share them with other users.
7. Rig reviews could be added so users can rate and post rig reviews.
8. The ability for a user to draft a rig could be added so a user could save but not publish a rig.
9. A for-sale section could be added so that when users mark gear for sale, it's automatically added to the sale list for other users to view.

[Back to top](<#contents>)

## Components

React components are independent and reusable blocks of code. There are two types of React components - class based and functional. Gear Addict makes use of functional components to avoid code repetition. Here you will find a list of custom React components used in the Gear Addict application.

[Back to top](<#contents>)

### Footer

![Gear Addict Footer](readme/images/gear-addict-footer.png)

The Gear Addict footer component is visible on every page of the site. It features a site nav menu which also changes state depending on user authentication. It also contains social media links. The footer component is imported into app.js along with the nav bar component so it is displayed on every page of the site.

[Back to top](<#contents>)

### Homepage Hero

![Gear Addict Homepage Hero](readme/images/hear-addict-homepage-hero.png)

The homepage hero component is only visible on the homepage. This differs from the standard hero component as it is larger in height. This component is intended to catch a user's attention. It features a large background image and the Gear Addict site title and slogan.

[Back to top](<#contents>)

### Hero 

![Gear Addict Hero 1](readme/images/gear-addict-hero-1.png)

![Gear Addict Hero 2](readme/images/gear-addict-hero-2.png)

The hero component is a reusable component used for each page of the site other than the homepage. It features a large background image which has a grayscale filter and a page title. The page title can be passed as a prop to change the heading for different pages. The component also accepts a prop called righeader to change the background image to what is used for the rig detail pages. 

[Back to top](<#contents>)

### Searchbar

![Gear Addict Searchbar](readme/images/gear-addict-searchbar.png)

The search bar component is present across the site whenever there is a list of gear / rigs. The search bar can be used to query rig lists or gear lists. The component accepts the props of query and setQuery which are passed down from the parent element to query the results with a slight delay. The query is then passed to the rigs / gear list components. The component also accepts a gear prop which changes the input field placeholder to 'Search gear' if the search bar is displayed on a gear page. 

[Click here to view the search rigs user story](https://github.com/Matthew-Hurrell/gear-addict/issues/54)

[Click here to view the search gear user story](https://github.com/Matthew-Hurrell/gear-addict/issues/33)

[Back to top](<#contents>)

### Seperator

![Gear Addict Seperator](readme/images/gear-addict-seperator.png)

The seperator component is a simple full-width horizontal line used as a page break between sections. It is used frequently across the site to display a visual separation of content to the user. Its functionality is purely visual.

[Back to top](<#contents>)

### Icon Seperator

![Gear Addict Icon Seperator](readme/images/gear-addict-icon-seperator.png)

The icon seperator is similar to the seperator component except it includes a centralised icon in the horizontal line. It is a purely visual component, but it is reused frequently across the site to break up page content into clearly defined sections.

[Back to top](<#contents>)

### Asset

![Gear Addict Asset](readme/images/gear-addict-asset.png)

The asset component is a multi-use component that is used to display the Gear Addict loading spinner but is also used to display images by passing the image URL down to the component as a src prop. This component is used many times across the site to render the loading spinner while content is being processed.

[Back to top](<#contents>)

### Avatar

![Gear Addict Avatar](readme/images/gear-addict-avatar.png)

The avatar component user profile images across the site. It is used in the navbar to display the user profile image and also in the comment and comment create form components as well as the profile page. Image src is a prop which is passed down from the parent. It can also take a text prop.

[Back to top](<#contents>)

### Category Badge

![Gear Addict Category Badge](readme/images/gear-addict-category-badge.png)

The category badge component is used with a conditional on the gear card component to display a badge with an icon depending on the gear category. The category badge displays a different icon depending on what prop it is passed from the parent element. It provides a different icon for each gear category option.

[Back to top](<#contents>)

### Dropdown Menu

![Gear Addict Dropdown Menu 1](readme/images/gear-addict-dropdown-menu-1.png)

![Gear Addict Dropdown Menu 2](readme/images/gear-addict-dropdown-menu-2.png)

The dropdown menu component is used on the comment, gear card, profile page and rig pages. It is used to display a dropdown menu for a variety of different sources. It contains a standard dropdown menu function and a profile edit dropdown option specifically tailored towards the profile menu. It uses ref along with handle click and is active functions and state to open and close on click. The component takes handle edit and handle delete functions as props to change the functionality of the delete and edit functions depending on which parent element it is being used with.

[Back to top](<#contents>)

### Gear Status Badge

![Gear Addict Gear Status Badge](readme/images/gear-addict-status-badge.png)

The gear status badge component works in much the same way as the category badge works. The component is passed a prop based on a conditional on the gear card component and returns one or more badges based on the props. Each badge contains a different icon for repair, sale and insured. These badges are used to display the status of user gear items.

[Click here to view the mark gear for repair user story](https://github.com/Matthew-Hurrell/gear-addict/issues/29)

[Click here to view the mark gear for sale user story](https://github.com/Matthew-Hurrell/gear-addict/issues/31)

[Click here to view the mark gear as insured user story](https://github.com/Matthew-Hurrell/gear-addict/issues/30)

[Back to top](<#contents>)

### How To Use

![Gear Addict How To Use](readme/images/gear-addict-how-to-use.png)

The how-to-use section component is just used for the Gear Addict home page. It displays a basic step-by-step guide on some of the features of the site. It is displayed on the home page so new users who are unfamiliar with the site can quickly understand how to use the application.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/61)

[Back to top](<#contents>)

### Homepage Intro

![Gear Addict Homepage Intro](readme/images/gear-addict-homepage-intro.png)

The intro home component is only used on the site homepage. It provides new users with a quick summary of the purpose and intention of the site. In the future this component could be refactored into a reusable text box component by passing it text content as props. 

[Back to top](<#contents>)

### Nav Bar

![Gear Addict Nav Bar 1](readme/images/gear-addict-navbar-1.png)

![Gear Addict Nav Bar 2](readme/images/gear-addict-navbar-2.png)

The nav bar component is a large component which handles the main site nav menu. It contains the handle sign-out function to sign the user out. It also uses the 'click outside' toggle hook and the 'is active' and 'set is active' state as well as 'ref' to handle opening and closing the mobile menu on small screens. Icons are sorted into logged-out and logged-in groups, and the relevant icons are displayed to an authenticated / non-authenticated user using a conditional with 'current user context'.

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/50)

[Back to top](<#contents>)

### Add Comment Form

![Gear Addict Add Comment Form](readme/images/gear-addict-add-comment-form.png)

The add comment form component is present on the rig detail pages. It is hidden to non-authenticated users. The form contains handle change and handle submit functions. Successful form submission re-renders the comment feed and adds the comment to the comment list. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/10)

[Back to top](<#contents>)

### Edit Comment Form

![Gear Addict Edit Comment Form](readme/images/gear-addict-edit-comment-form.png)

The edit comment form component is visible via the rig detail pages. The menu to access the form is only visible to authenticated users that own the comment. Clicking the comment edit button within the dropdown menu will render the edit comment form and pre-populate the form field with the user's previous comment. Clicking the submit button removes the form from view and re-renders the comment list with the comment content updated. Clicking the cancel button returns the user to the previous comment list with no changes made. 

[Back to top](<#contents>)

### Delete Comment

![Gear Addict Delete Comment](readme/images/gear-addict-delete-comment.png)

A delete comment option is available to authenticated users who own a comment. The delete button is visible in the comment dropdown menu. If a user clicks this button the comment is deleted and the list is re-rendered to display the new comment list without the comment.

[Back to top](<#contents>)

### Comment

![Gear Addict Comment](readme/images/gear-addict-comment.png)

The comment component is a single instance of comment which is used inside the comment loop to render multiple comments. It is displayed on the rig detail pages. It contains a handle delete function which is passed to the dropdown menu component. It also contains the logic to display and hide the comment edit form. 

[Click here to view the user story](https://github.com/Matthew-Hurrell/gear-addict/issues/10)

[Back to top](<#contents>)

### Gear Card

![Gear Addict Gear Card](readme/images/gear-addict-gear-card.png)

The gear card component is displayed as part of a loop on the gear page. The gear page is only visible to authenticated users. The gear card accepts an instance of gear as a prop and renders that instance as the card content. It contains a handle edit function to redirect the user to the edit gear page and also a handle delete function to delete the instance of gear.

[Back to top](<#contents>)

### Gear List

![Gear Addict Gear List](readme/images/gear-addict-gear-list.png)

The gear list component is the loop used to render multiple instances of the gear card component. It contains the axios request to fetch the gear list data and uses the React infinite scroll component to continually load more gear as the user scrolls. The asset component is used to display a loading spinner while the content is loading. There is also a conditional to display a no results message and image if no results are found. The gear list component accepts a filter prop to display different lists across the site. It also accepts a query prop for the search bar, as well as title and message for text elements.

[Click here to view the gear list user story](https://github.com/Matthew-Hurrell/gear-addict/issues/32)

[Click here to view the gear infinite scroll user story](https://github.com/Matthew-Hurrell/gear-addict/issues/62)

[Back to top](<#contents>)

### Rig Card

![Gear Addict Rig Card](readme/images/gear-addict-rig-card.png)

The rig card component is displayed as part of a loop on the rig page, homepage, latest page, feed page, saved page and profile pages. The rig page, feed page and saved page are only visible to authenticated users. The rig card accepts an instance of rig as a prop and renders that instance as the card content. It contains a handle edit function to redirect the user to the edit rig page and also a handle delete function to delete the instance of rig.

[Back to top](<#contents>)

### Rigs List

![Gear Addict Rigs List](readme/images/gear-addict-rigs-list.png)

The rigs list component is the loop used to render multiple instances of the rig card component. It contains the axios request to fetch the rig list data and uses the React infinite scroll component to continually load more rigs as the user scrolls. The asset component is used to display a loading spinner while the content is loading. There is also a conditional to display a no results message and image if no results are found. The rigs list component accepts a filter prop to display different lists across the site. It also accepts a query prop for the search bar, as well as title and message for text elements. The rigs list component is reused frequently across the site including on the home page, feed page, profile pages, rigs page and saved page. The rigs list component is filtered in different ways on each page to display different results.

[Click here to view the view all rigs user story](https://github.com/Matthew-Hurrell/gear-addict/issues/42)

[Click here to view the rigs infinite scroll user story](https://github.com/Matthew-Hurrell/gear-addict/issues/51)

[Back to top](<#contents>)

# Testing

The Gear Addict application has been tested rigorously throughout the development process. This section will provide details on the tests carried out on the front-end of the application. Back-end test documentation can be found on the [Gear Addict API README](https://github.com/Matthew-Hurrell/gear-addict-api/blob/main/README.md).

[Back to top](<#contents>)

## Validator Tests

[Back to top](<#contents>)

### W3C HTML

All the pages of the Gear Addict site have been passed through the [W3C HTML Markup Validation Service](https://validator.w3.org/), with minor errors rectified. No errors or warnings are now showing.

#### Homepage

![HTML Validator Homepage](readme/images/html-validator-homepage.png)

[Back to top](<#contents>)

#### Gear Detail Page

![HTML Validator Gear Detail Page](readme/images/html-validator-gear-detail-page.png)

[Back to top](<#contents>)

#### Latest Page

![HTML Validator Latest Page](readme/images/html-validator-latest-page.png)

[Back to top](<#contents>)

#### Feed Page

![HTML Validator Feed Page](readme/images/html-validator-feed-page.png)

[Back to top](<#contents>)

#### Gear Page

![HTML Validator Gear Page](readme/images/html-validator-gear-page.png)

[Back to top](<#contents>)

#### Rigs Page

![HTML Validator Rigs Page](readme/images/html-validator-rigs-page.png)

[Back to top](<#contents>)

#### Saved Page

![HTML Validator Saved Page](readme/images/html-validator-saved-page.png)

[Back to top](<#contents>)

#### Rig Create Page

![HTML Validator Rig Create Page](readme/images/html-validator-rig-create-page.png)

[Back to top](<#contents>)

#### Gear Create Page

![HTML Validator Gear Create Page](readme/images/html-validator-gear-create-page.png)

[Back to top](<#contents>)

#### Sign-In Page

![HTML Validator Sign-In Page](readme/images/html-validator-sign-in-page.png)

[Back to top](<#contents>)

#### Sign-Up Page

![HTML Validator Sign-Up Page](readme/images/html-validator-sign-up-page.png)

[Back to top](<#contents>)

#### Profile Page

![HTML Validator Profile Page](readme/images/html-validator-profile-page.png)

[Back to top](<#contents>)

#### Edit Profile Page

![HTML Validator Edit Profile Page](readme/images/html-validator-edit-profile-page.png)

[Back to top](<#contents>)

#### 404 Page

![HTML Validator 404 Page](readme/images/html-validator-404-page.png)

[Back to top](<#contents>)

### W3C CSS

![CSS Validator](readme/images/css-validator.png)

Due to the use of the Tailwind CSS framework on the Gear Addict project, there is only one small file of custom CSS. This file was passed through the [Jigsaw W3C CSS Validation Service](https://validator.w3.org/) and the only errors found were for the tailwind selectors at the top of the file, which are currently unrecognised by the validator.

[Back to top](<#contents>)

### ESLint Javascript

All JavaScript files in the Gear Addict project have been run through the [JavaScript ESLinter](https://eslint.org/). Originally the linter was throwing an error for React prop-types not being validated. As these weren't covered in the course a change was made to the ESLinter settings to ignore the prop types error.

Some errors raised by ESLint have been intentionally ignored as they are either incorrect or in relation to code provided in the Code Institute React walkthrough project. 

These errors are as follows - 

1. Form data fields being assigned values but never used - these fields are used, but they are just not being called directly
2. Do not pass children as props - this is based off of code provided by Code Institute

All other errors were corrected.

[Back to top](<#contents>)

## Additional Tests

### Manual Tests

Here you will find a comprehensive list of all the manual tests that were carried out on the Gear Addict front-end interface.

| Status | **Home Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Hottest rigs displays four rigs
| &check; | Hottest rigs displays rigs ordered by most liked
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | All links work correctly and navigate to the correct page

| Status | **Navbar**
|:-------:|:--------|
| &check; | Content is responsive
| &check; | Current page displays active class
| &check; | Logged-in nav items are displayed correctly to logged-in users
| &check; | Logged-out nav items are displayed correctly to logged-out users
| &check; | Profile image and link is correct to current authenticated user
| &check; | All links work correctly and navigate to the correct page
| &check; | Mobile menu is displayed on small screens
| &check; | Mobile nav menu opens and closes correctly
| &check; | Mobile menu is closed when a user clicks away
| &check; | Mobile menu is closed when a user clicks a nav link
| &check; | Mobile menu nav toggle menu button opens and closes the mobile menu
| &check; | Nav items change styling on hover

| Status | **Footer**
|:-------:|:--------|
| &check; | Content is responsive
| &check; | Current page displays active class
| &check; | Logged-in nav items are displayed correctly to logged-in users
| &check; | Logged-out nav items are displayed correctly to logged-out users
| &check; | All links work correctly and navigate to the correct page
| &check; | Nav items change styling on hover

| Status | **Latest Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | All links work correctly and navigate to the correct page
| &check; | Search functionality is working
| &check; | Rigs are ordered from newest to oldest
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Rig links link to correct rigs
| &check; | Profile links link to correct profiles
| &check; | No results found is displayed when there are no rigs in the list

| Status | **Feed Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | All links work correctly and navigate to the correct page
| &check; | Search functionality is working
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Rig links link to correct rigs
| &check; | Profile links link to correct profiles
| &check; | Becoming a fan of a user adds their rigs to the feed page
| &check; | Unfanning a user removes their rigs from the feed page
| &check; | No results found is displayed when there are no rigs in the list

| Status | **Gear Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Gear list infinite scroll functionality is working
| &check; | Users can only see gear that is owned by them
| &check; | Correct content is displayed on gear cards
| &check; | Delete functionality is working
| &check; | The edit button redirects the user to the correct edit gear page
| &check; | Dropdown menu functionality is working
| &check; | No results found is displayed when there is no gear in the list
| &check; | Category badge displays correctly
| &check; | Gear status badges display correctly

| Status | **Rigs Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Rig list infinite scroll functionality is working
| &check; | Users can only see rigs that are owned by them
| &check; | Correct content is displayed on rig cards
| &check; | Like / Save buttons are not visible
| &check; | No results found is displayed when there are no rigs in the list
| &check; | Rig links link to correct rigs

| Status | **Saved Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Saving a rig adds it to the list
| &check; | Unsaving a rig removes it from the list
| &check; | Users can only see their own saved rigs
| &check; | Rig links link to correct rigs
| &check; | Profile links link to correct profiles
| &check; | No results found is displayed when there are no rigs in the list

| Status | **Profile Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page dropdown menu is only visible to authenticated users who own the profile
| &check; | Profile edit button redirects the user to the profile edit page
| &check; | Username edit button redirects the user to the username edit page
| &check; | Password edit button redirects the user to the password edit page
| &check; | User profile content is displaying correctly
| &check; | Updated profile content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Rig links link to correct rigs
| &check; | Profile links like to correct profiles
| &check; | Fan count is correct
| &check; | Idol count is correct
| &check; | Rig count is correct
| &check; | Gear count is correct
| &check; | Fan and idol counts increment correctly when becoming a fan and unfanning another user
| &check; | Popular profiles is displaying correctly
| &check; | Fan button is not displayed on the users own profile or on popular profiles 
| &check; | Fan button is working correctly
| &check; | Unfan button is working correctly

| Status | **Sign In Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to non-authenticated users
| &check; | Authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission signs the user in successfully and redirects the user back to their previous page
| &check; | Sign up link redirects the user to the sign up page

| Status | **Sign Up Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to non-authenticated users
| &check; | Authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission saves the users details and redirects the user to the sign in page
| &check; | Sign in link redirects the user to the sign in page

| Status | **Sign Out**
|:-------:|:--------|
| &check; | The sign-out button link is displayed on both site navs
| &check; | The sign-out button is only displayed to authenticated users
| &check; | Sign out functionality works correctly
| &check; | On successful sign out the user is redirected to the home page

| Status | **Add Gear Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission creates a new instance of gear and redirects the user to the gear page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly

| Status | **Add Rig Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission creates a new instance of rig and redirects the user to the rig details page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly

| Status | **Rig Detail Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Image gallery is working correctly
| &check; | Dropdown menu is only displayed to authenticated users who own the rig
| &check; | Edit rig button redirects user to correct edit rig page
| &check; | Rig delete button deletes the rig and redirects the user to the last page they were on
| &check; | Profile link links to correct profile
| &check; | No comments yet message displays when there are no comments
| &check; | Comment form only displays to authenticated users
| &check; | A list of comments ordered from newest to oldest appears in a list on the correct rig
| &check; | Comment is assigned to correct user
| &check; | Comment form field handles change correctly
| &check; | Comment field input errors are displayed to the user
| &check; | Successful comment submission creates a new comment which appears at the top of the comment list
| &check; | The post button submits the comment
| &check; | The comment dropdown menu is only visible to users who are authenticated and own the comment
| &check; | The comment edit button opens the edit comment form
| &check; | The comment delete button deletes the comment and re-renders the comment list with the comment removed

| Status | **Edit Gear Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the gear
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct instance of gear
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct instance of gear and returns the user to the gear page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updating the image field changes the image

| Status | **Edit Rig Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the rig
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct instance of rig
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct instance of rig and returns the user to the rig details page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updating the image fields changes the images

| Status | **Delete Gear**
|:-------:|:--------|
| &check; | The delete button is only visible in the gear dropdown menu to authenticated users who own the gear
| &check; | Clicking the delete button deletes the correct instance of gear and re-renders the gear list with the gear removed

| Status | **Delete Rig**
|:-------:|:--------|
| &check; | The delete button is only visible in the rig dropdown menu to authenticated users who own the rig
| &check; | Clicking the delete button deletes the correct instance of rig and redirects the user to the last page they were on

| Status | **Edit Profile Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the profile
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct user profile
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct user profile and returns the user to the last page they were on
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updating the image fields changes the images
| &check; | Updated profile details are immediately reflected on the user profile page

| Status | **Edit Username Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the profile
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct user profile username
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct user profile username and returns the user to the last page they were on
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updated profile usernames are immediately reflected on the user profile page

| Status | **Edit Password Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the profile
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct user password and returns the user to the last page they were on
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted 
| &check; | Blank fields are handled correctly

| Status | **404 Page**
|:-------:|:--------|
| &check; | The 404 page is triggered by an incorrect site URL
| &check; | Content is displaying correctly
| &check; | Content is responsive

| Status | **Search Functionality**
|:-------:|:--------|
| &check; | Rigs can be searched for usernames
| &check; | Rigs can be searched for categories
| &check; | Rigs can be searched for attributes
| &check; | Rigs can be searched for genres
| &check; | Rigs can be searched for rig names
| &check; | Gear can be searched for gear names
| &check; | Gear can be searched for categories
| &check; | Gear can be searched for brands
| &check; | Gear can be searched for models
| &check; | Gear can be searched for descriptions

| Status | **Like / Unlike**
|:-------:|:--------|
| &check; | When a rig is liked the like button is hidden and the unlike button appears
| &check; | When a rig is unliked the unlike button is hidden and the like button appears
| &check; | Liking a rig adds one to the rig like count
| &check; | Unliking a rig subtracts one from the rig like count
| &check; | Like and unlike buttons are only visible to authenticated users
| &check; | Like and unlike buttons are hidden on rigs that are owned by the authenticated user

| Status | **Save / Unsave**
|:-------:|:--------|
| &check; | When a rig is saved the save button is hidden and the unsave button appears
| &check; | When a rig is unsaved the unsave button is hidden and the save button appears
| &check; | Saving a rig adds one to the rig star count
| &check; | Unsaving a rig subtracts one from the rig star count
| &check; | Save and unsave buttons are only visible to authenticated users
| &check; | Save and unsave buttons are hidden on rigs that are owned by the authenticated user
| &check; | Saving a rig adds it to the users saved list
| &check; | Unsaving a rig removes it from the users saved list

[Back to top](<#contents>)

### Input Validation Tests

This section will detail the input validation tests carried out on the Gear Addict application.

| Status | **Sign In Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a username
| &check; | Form cannot be submitted without a password

| Status | **Sign Up Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a username
| &check; | Form cannot be submitted without a password
| &check; | Form cannot be submitted without confirming password
| &check; | Username cannot be over 30 characters in length
| &check; | Form cannot be submitted without matching password fields

| Status | **Add Rig Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a rig name
| &check; | Rig name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a budget
| &check; | Form cannot be submitted without an attribute 1
| &check; | Form cannot be submitted without a genre 1
| &check; | Form cannot be submitted without a description

| Status | **Edit Rig Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a rig name
| &check; | Rig name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a budget
| &check; | Form cannot be submitted without an attribute 1
| &check; | Form cannot be submitted without a genre 1
| &check; | Form cannot be submitted without a description

| Status | **Add Gear Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a gear name
| &check; | Gear name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a value
| &check; | Value cannot be less than or equal to zero

| Status | **Edit Gear Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a gear name
| &check; | Gear name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a value
| &check; | Value cannot be less than or equal to zero

| Status | **Edit Profile Form**
|:-------:|:--------|
| &check; | Name cannot be over 20 characters in length
| &check; | Location cannot be over 30 characters in length

| Status | **Edit Username Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a username
| &check; | Username cannot be over 30 characters in length

| Status | **Edit Password Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a password
| &check; | Form cannot be submitted without confirming password
| &check; | Form cannot be submitted without matching password fields

| Status | **Add Comment Form**
|:-------:|:--------|
| &check; | Form cannot be submitted if the content field is empty

| Status | **Edit Comment Form**
|:-------:|:--------|
| &check; | Form cannot be submitted if the content field is empty

[Back to top](<#contents>)

### Automated Tests

Automated tests were run on the Gear Addict project using the [Jest Dom Testing Library](https://testing-library.com/docs/ecosystem-jest-dom/). Both the nav bar and footer components were tested to check that they were rendering the correct elements for logged in and logged out users. Details of the tests and a link to the test directory can be found below.

| Status | **Nav Bar Tests**
|:-------:|:--------|
| &check; | Renders sign in link
| &check; | Renders sign up link
| &check; | Renders latest link
| &check; | Renders home link
| &check; | Renders link to gear page for logged in user
| &check; | Renders link to rig page for logged in user
| &check; | Renders link to feed page for logged in user
| &check; | Renders link to saved page for logged in user
| &check; | Renders sign in and sign up buttons again on user log out

| Status | **Footer Tests**
|:-------:|:--------|
| &check; | Renders sign in link
| &check; | Renders sign up link
| &check; | Renders latest link
| &check; | Renders home link
| &check; | Renders link to gear page for logged in user
| &check; | Renders link to rig page for logged in user
| &check; | Renders link to feed page for logged in user
| &check; | Renders link to saved page for logged in user
| &check; | Renders sign in and sign up buttons again on user log out

[Click this link to view the testing directory](https://github.com/Matthew-Hurrell/gear-addict/tree/main/src/components/__tests__)

[Back to top](<#contents>)

### Responsive Tests

Gear Addict has been tested on a diverse range of different devices and screen sizes to test for style and layout issues. Manual responsive tests were carried out using [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/), [Responsive Design Checker](https://responsivedesignchecker.com/) and [Am I Responsive](https://ui.dev/amiresponsive) as well as on a number of physical devices. All device screen sizes were tested on Chrome Dev Tools as well as Responsive Design Checker and no issues were found.

| Status | **Chrome Dev Tools**
|:-------:|:--------|
| &check; | iPhone SE
| &check; | iPhone XR
| &check; | iPhone 12 Pro
| &check; | Pixel 5
| &check; | Samsung Galaxy S8+
| &check; | Samsung Galaxy S20 Ultra
| &check; | iPad Air
| &check; | iPad Mini
| &check; | Surface Pro 7
| &check; | Surface Duo
| &check; | Galaxy Fold
| &check; | Samsung Galaxy A51/71
| &check; | Nest Hub
| &check; | Nest Hub Max
| &check; | iPhone 6/7/8
| &check; | Responsive mode

| Status | **Responsive Design Checker**
|:-------:|:--------|
| &check; | 24" Desktop
| &check; | 23" Desktop
| &check; | 22" Desktop
| &check; | 20" Desktop
| &check; | 19" Desktop
| &check; | 15" Desktop
| &check; | 13" Notebook
| &check; | 10" Notebook
| &check; | Apple iPad Mini
| &check; | Apple iPad Retina
| &check; | Apple iPad Pro
| &check; | Amazon Kindle Fire
| &check; | Amazon Kindle Fire HD
| &check; | Asus Eee 1000
| &check; | Nexus 7
| &check; | Nexus 9
| &check; | Samsung Galaxy Tab 10
| &check; | Apple iPhone 3/4/4s
| &check; | Apple iPhone 5/5s
| &check; | Apple iPhone 6/6s/7
| &check; | Apple iPhone 6s Plus/7 Plus
| &check; | Samsung Galaxy S5/S6/S7
| &check; | Sony Xperia Z2/Z3
| &check; | Google Pixel
| &check; | Nexus 4
| &check; | Nexus 5
| &check; | Nexus 6

[Back to top](<#contents>)

### Browser Tests

The Gear Addict site has been tested on Google Chrome, Apple Safari, Microsoft Edge and Brave. Unfortunately, there is an unresolved error that is present on Safari. Due to Safari blocking cross-site tracking, the cookies used in the project are disabled, therefore preventing communication between the API and the front-end. Turning this setting off in the browser settings does resolve the problem, but this is a temporary fix. This bug is also present in the Code Institute walkthrough project. To resolve this in the future I will combine the front and back-end repositories into one and use a singular URL. But other than this, no browser errors were detected.

[Back to top](<#contents>)

### Lighthouse Tests

The Gear Addict site has been tested using the [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) [Lighthouse Tester](https://developer.chrome.com/docs/lighthouse/overview/) and has returned very good results. Performance ratings on the first lighthouse tests were lower due to large images. This was resolved by resizing and compressing the images. The final page test results can be found below.

#### Homepage

![Lighthouse Test Homepage](readme/images/lighthouse-homepage.png)

[Back to top](<#contents>)

#### Latest Page

![Lighthouse Test Latest Page](readme/images/lighthouse-latest.png)

[Back to top](<#contents>)

#### Feed Page

![Lighthouse Test Feed Page](readme/images/lighthouse-feed.png)

[Back to top](<#contents>)

#### Sign In Page

![Lighthouse Test Sign In Page](readme/images/lighthouse-sign-in.png)

[Back to top](<#contents>)

#### Sign Up Page

![Lighthouse Test Sign Up Page](readme/images/lighthouse-signup.png)

[Back to top](<#contents>)

#### Gear Page

![Lighthouse Test Gear Page](readme/images/lighthouse-gear.png)

[Back to top](<#contents>)

#### Rigs Page

![Lighthouse Test Rigs Page](readme/images/lighthouse-rigs.png)

[Back to top](<#contents>)

#### Saved Page

![Lighthouse Test Saved Page](readme/images/lighthouse-saved.png)

[Back to top](<#contents>)

#### Add Gear Page

![Lighthouse Test Add Gear Page](readme/images/lighthouse-add-gear.png)

[Back to top](<#contents>)

#### Add Rig Page

![Lighthouse Test Add Rig Page](readme/images/lighthouse-add-rig.png)

[Back to top](<#contents>)

#### Rig Details Page

![Lighthouse Test Rig Details Page](readme/images/lighthouse-rig-details.png)

[Back to top](<#contents>)

#### Profile Page

![Lighthouse Profile Page](readme/images/lighthouse-profile.png)

[Back to top](<#contents>)

#### 404 Page

![Lighthouse Test 404 Page](readme/images/lighthouse-404.png)

[Back to top](<#contents>)

## Bugs

A number of bugs presented themselves during the Gear Addict development process. Most of these bugs were resolved, but unfortunately due to time constraints, some of them weren't. This section will list the resolved and unresolved bugs.

[Back to top](<#contents>)

### Resolved

1. When the create rig form was first implemented, the image fields were not submitting unless all the fields had an image attached. The bug was caused by the image form data appends inside the on submit function not containing conditionals to check for an image. The bug was resolved by adding turnary conditionals into the image append methods to check for current files.

2. During development of the users profiles, there was a temporary bug when becoming a fan of another user through the popular profiles component. Becoming a fan of a user while on a user page was working as expected, but becoming a fan of a user while on the owner profile page was incrementing the idols count on the profile rather than the fan count. This bug was caused by incrementing the wrong field in the utils fanhelper and fanunhelper functions. The bug was resolved by incrementing the idols count in the profile is owner conditional instead of the fans count. 

[Click here to view the bug fix commit](https://github.com/Matthew-Hurrell/gear-addict/commit/6d634a89e13b897c77b6b55552fa177a15181a2f)

3. Later in development, a bug was discovered in the profile details edit form where the header image was overwriting the profile image field. This meant that when a header image was added and submitted in the profile edit form the profile header was being added into the profile image section. This was caused by a typo in the profile edit form appending the header image field to the profile image form data. The bug was resolved by simply changing the form data name to header_image to match the header field name. 

[Click here to view the bug fix commit](https://github.com/Matthew-Hurrell/gear-addict/commit/806779b6aef73a818ec7f124546f523eeea8ff1f)

4. A bug was also discovered on the homepage hottest rigs list. During development there was a duplicate rig being displayed within the list. Originally it was thought that the bug was being caused by the slice method, but it was discovered that this was originating from the axios response, which was returning two of the same rig. This issue was only visible when there were limited rigs on the database. To resolve this I changed the query to display rigs in descending like count order and then added more rigs. This seemed to resolve the problem. 

[Back to top](<#contents>)

### Unresolved

1. There is currently an ongoing issue with the Gear Addict project on Safari, which unfortunately hasn't been resolved. This is a problem which has been inherited form the Code Institute walkthrough Moments project. Regretfully, Safari blocks cross-domain cookies and prevents cross-site tracking, and as the back and front-end of this project are on different domains, the site relies on cookies for communication. This prevents communication between the front and back-end of this project on Safari and impedes the site functioning correctly. The issue can be temporarily fixed by turning off the prevent cross site tracking and cookie options within Safari, but obviously this isn't ideal as users cannot be expected to do this for the site to function correctly. As I intend to use this project for my portfolio, I will seek to resolve this issue moving forward by combining both repositories and deploying them both to one domain. This should resolve the issue in the future. 

[Back to top](<#contents>)

# Technologies Used

Here you will find a complete list of all the technologies used to help create and develop the Gear Addict front-end application.
For more information on the back-end technologies used, please view the [Gear Addict API README](https://github.com/Matthew-Hurrell/gear-addict-api/blob/main/README.md).

[Back to top](<#contents>)

## Languages

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Provided the basic content and structure for the site.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Provided the styling for the site.
* [JavaScript (ES6)](https://www.javascript.com/) - Provided the interactivity and front-end functionality for the site.
* [Git](https://git-scm.com/) - Provided the version control system for the site.

[Back to top](<#contents>)

## Frameworks

* [React](https://react.dev/) - A free and open-source front-end JavaScript library for building user interfaces based on components.
* [Tailwind CSS React](https://tailwindcss.com/) - An open-source utility-first CSS framework.

[Back to top](<#contents>)

## Software

* [Balsamiq](https://balsamiq.com/) - An online cloud based software used for creating the site wireframes
* [GitHub](https://github.com/) - An internet hosting service used for version control. Used to host the Gear Addict repositories and for the project board used for project management and user stories
* [GitPod](https://www.gitpod.io/) - A cloud development environment used as the primary site code editor
* [Heroku](https://dashboard.heroku.com/) - A cloud platform used to host the Gear Addict application
* [ElephantSQL](https://www.elephantsql.com/) - A free cloud based PostgreSQL database system used for the application database
* [Cloudinary](https://cloudinary.com/) - A cloud-based video and image management platform used to store the site images
* [Slack](https://slack.com/intl/en-gb/) - An online instant messaging program used for site feedback and guidance from the [Code Institute](https://codeinstitute.net/) community
* [Draw.io](https://app.diagrams.net/) - An online diagram software used for the database schemas
* [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - A set of web developer tools built directly into the chrome browser. Used for responsiveness tests and further testing
* [Google Fonts](https://fonts.google.com/) - A web based font service by Google used to supply the site typography
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - An open source automated testing tool used for site tests
* [Responsive Design Checker](https://responsivedesignchecker.com/) - An online testing tool used for responsive site testing
* [Am I Responsive](https://ui.dev/amiresponsive) - An online testing tool used for responsive site testing
* [Colour Contrast Checker](https://colourcontrast.cc/) - An online tool used to test background and text colour contrast
* [Font Awesome](https://fontawesome.com/) - A font and icon toolkit used for the Gear Addict icons
* [NPM JS](https://www.npmjs.com/) - The npm registry website used for information on npm libraries

[Back to top](<#contents>)

## Libraries

* [testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) v5.16.5 - Custom jest matchers to test the state of the DOM
* [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) v11.2.7 - React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components
* [testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/) v12.8.3 - A companion library for Testing Library that provides more advanced simulation of browser interactions than the built-in fireEvent method
* [axios](https://axios-http.com/docs/intro) v0.21.4 - A promise based HTTP client for the browser and node.js
* [fslightbox-react](https://fslightbox.com/react) v1.7.4 - A React component for displaying images and videos in a clean overlying box - this library improved user experience by allowing a full screen gallery for rig images. Users can click the view image gallery button and see the rig images in full quality. They can also use the arrow buttons to navigate between images. This library was chosen as I have previously used it multiple times in professional projects and it is reliable and user friendly
* [jwt-decode](https://www.npmjs.com/package/jwt-decode) v3.1.2 - A small browser library that helps decoding JWTs token which are Base64Url encoded
* [react](https://www.npmjs.com/package/react) v17.0.2 - A JavaScript library for creating user interfaces. This library / framework improved user experience greatly. The React library renders content faster for improved load times for the user, and because of the reuse of components, more content was developed in a shorter amount of time, which meant more features were available to the site users by the project deadline
* [react-boostrap](https://www.npmjs.com/package/react-bootstrap) v1.6.6 - An open-source css framework components built with React
* [react-dom](https://www.npmjs.com/package/react-dom) v17.0.2 - An entry point to the DOM and server renderers for React
* [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) v6.1.0 - An infinite scroll component for React - this library improved user experience by allowing users to continue scrolling to load more content, rather than having to navigate to another page and wait for the page to load
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) v5.3.0 - Contains bindings for using React Router in web applications
* [react-scripts](https://www.npmjs.com/package/react-scripts) v5.0.1 - Scripts and configuration used by Create React App
* [react-spinners](https://www.npmjs.com/package/react-spinners) v0.13.8 - A collection of loading spinners with React.js based on Halogen. This library enhanced the user experience by providing a visual loading spinner to display to the user when content is loading, so they are not left looking at a blank page
* [web-vitals](https://www.npmjs.com/package/web-vitals) v1.1.2 - A modular library for measuring all the web vitals metrics on real users
* [eslint](https://www.npmjs.com/package/eslint) v8.41.0 - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) v7.32.2 - React specific linting rules for eslint
* [msw](https://www.npmjs.com/package/msw) v0.35.0 - A seamless REST/GraphQL API mocking library for browser and Node.js
* [tailwindcss](https://www.npmjs.com/package/tailwindcss) v3.3.2 - A utility-first CSS framework for rapidly building custom user interfaces. I decided to work with the tailwind library rather than bootstrap because I am a big fan of the tailwind utility framework and I am very familiar with using it in a professional environment. I personally feel that it has more flexibility than bootstrap and allows for further customisation of elements. Using this framework increased my productivity throughout the project

[Back to top](<#contents>)

# Deployment

This section is a written guide on how to deploy a front-end React application to Heroku.

[Back to top](<#contents>)

## Project Deployment Via Heroku

1. Create a new repository on [GitHub](https://github.com/)

2. Name the repository

3. Click the Gitpod button to open the new repository in [GitPod](https://www.gitpod.io/)

4. Once the IDE has loaded, run the terminal command `npx create-react-app . --use-npm` to install React 

5. After it has finished installing run the command `npm start` to check the app is working

6. Add a Procfile in the root directory

7. Add the following code into the Procfile - `web: serve -s build`

8. In the root package.json file in the scripts section, add the following code - `"heroku-prebuild": "npm install -g serve"`

9. Git add, commit and push changes to GitHub

10. Log-in or sign-up to [Heroku](https://dashboard.heroku.com/) and open the dashboard

11. Click on the 'New' button to add a new app

12. Name the app (it must be unique) and choose a region closest to your location

13. Click the 'Create app' button to create the app

14. Once the app is created, click the deploy tab on the app menu

15. Scroll down to deployment method and click the GitHub option

16. Make sure your profile is selected and search for the React GitHub repository name

17. Once the correct repository appears below the searchbar - click the 'Connect' button

18. Once the repository is connected, click the 'Deploy branch' button - make sure the master / main branch is selected

19. Optional - view the build logs as the app builds

20. If the build is successful, click the 'Open app' button to view the deployed app on Heroku

[Back to top](<#contents>)

# Credits

In this final section, I would like to credit the various sources that were used throughout the development of the Gear Addict project.

[Back to top](<#contents>)

## Content

* Dummy rig text copy was sourced from various posts across the [Instagram](https://www.instagram.com/) platform
* My mentor at Code Institute [Martina](https://www.linkedin.com/in/martinaterlevic/) provided much appreciated guidance on application features and content

[Back to top](<#contents>)

## Media

* Dummy image post content was sourced from various posts across the [Instagram](https://www.instagram.com/) platform
* The Gear Addict logo was created by [Anna](https://www.linkedin.com/in/anna-appleton-claydon-ba10a215/) at [We Create Digital](https://wecreate.digital/)
* Page header images were acquired from [Shutterstock](https://www.shutterstock.com/)
* Other assorted image content was acquired from [Adobe Stock](https://stock.adobe.com/uk/)

[Back to top](<#contents>)

## Code

* Code Institute's Advanced Front-end [Moments](https://moments-ci-react.herokuapp.com/) walkthrough project was used as an inspiration and template for this project. Code from the Moments application was customised and expanded on to create further features and functionality for Gear Addict.

[Back to top](<#contents>)

# Acknowledgements

This application was created as a final portfolio project submission for the Code Institute Higher National Diploma in Software Development. The course has lasted a year and has consisted of five major projects spread out throughout the year. It has been a very intense but rewarding year and I couldn't be more thankful to the Code Institute team for making my re-entry back into education a great experience. I have learnt more than I thought was possible over the last year, and I have fallen in love with my career and the tech industry. I am now working full time as a developer and I am happy to say, I do really love my job. 

I would like to take this opportunity to thank everyone who has encouraged and supported me over the last year. It has certainly been a challenging year, but I wouldn't change anything. Thank you very much to Code Institute for helping and supporting career changers like myself to get into the tech industry. Thank you to my incredibly talented mentor [Martina](https://www.linkedin.com/in/martinaterlevic/) for all your help and advice with the last project. Thank you to the Slack community for guidance and support and allowing me to occasionally vent my stress in an understanding and empathetic environment! Finally, thank you to my family and my incredibly patient girlfriend for your belief in me and encouragement to pursue my aspirations. I love and appreciate you all.

Best wishes and happy coding,

Matthew Hobbs-Hurrell

[Back to top](<#contents>)
