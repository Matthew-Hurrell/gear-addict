# **User Stories**

These are the user stories for the Gear Addict project.

# Contents

* [**Epic 1 - User Authentication**](<#epic-1---user-authentication>)
* [**Epic 2 - Navigation**](<#epic-2---navigation>)
* [**Epic 3 - Rigs**](<#epic-3---rigs>)
* [**Epic 4 - Gear**](<#epic-4---gear>)
* [**Epic 5 - Comments**](<#epic-5---comments>)
* [**Epic 6 - Profiles**](<#epic-6---profiles>)
* [**Epic 7 - Like**](<#epic-7---like>)
* [**Epic 8 - Save**](<#epic-8---save>)

# Epic 1 - User Authentication

1. As a **user** I can **log into my account** so that **I can access all the site features**

### Acceptance Criteria:
* Acceptance Criteria 1: A log in page link should be visible on the nav bar and in the footer to non logged in users 
* Acceptance Criteria 2: Clicking the link should direct the user to the log in form page
* Acceptance Criteria 3: Filling in the form correctly should direct the user to the homepage and display their profile link in the navbar as well as the other pages only available to logged in users

### Tasks:
&check; Add log in page component
<br>
&check; Add conditional to only display to logged out users
<br>
&check; Add on change and on submit methods for log in form
<br>
&check; Add route for log in page component to app.js
<br>
&check; Add redirect to homepage on successful log in
<br>
&check; Test functionality
<br>
<hr>

2. As a **user** I can **sign out of my account** so that **I can close the application and navigate away from the page**

### Acceptance Criteria:
* Acceptance Criteria 1: A sign out button link should be visible to logged in users on the site nav bar and footer menu
* Acceptance Criteria 2: Clicking the button should sign out the user and redirect them to the site homepage
* Acceptance Criteria 3: The nav bar component should re-render the logged out user icons so they cannot access restricted content

### Tasks:
&check; Add sign out button link to nav bar and footer menus
<br>
&check; Add conditional to only display to logged in users
<br>
&check; Add handle sign out method
<br>
&check; Add redirect to homepage on successful sign out
<br>
&check; Test functionality
<br>
<hr>

3. As a **user** I can **sign up for an account** so that **I can create a profile**

### Acceptance Criteria:
* Acceptance Criteria 1: A sign up button link should be visible to non logged in users on the site nav bar and footer
* Acceptance Criteria 2: Clicking the sign up button should direct the user to the sign up form page
* Acceptance Criteria 3: Successful sign up form submission should direct the user to the sign in page 

### Tasks:
&check; Add sign up button link to the nav bar and footer menus
<br>
&check; Add conditional to button to only display if the user is logged out
<br>
&check; Add URL link to button to navigate to the dj rest auth sign up url
<br>
&check; Add sign up form component with on change and on submit methods
<br>
&check; Add route for sign up form to app.js
<br>
&check; Add redirect to sign in page on successful submission
<br>
&check; Test functionality
<br>

[Back to top](<#contents>)

# Epic 2 - Navigation

1. As a **user** I can **view a navbar from every page** so that **navigate easily between pages**

### Acceptance Criteria:
* Acceptance Criteria 1: A site wide nav bar component should be visible to the user from all pages of the site.
* Acceptance Criteria 2: The navbar should be accessible, intuitive and user friendly.
* Acceptance Criteria 3: All the main pages of the site should be visible on the navbar.
* Acceptance Criteria 4: Some pages should be hidden on the nav bar based on user logged in status.

### Tasks:
&check; Create navbar component
<br>
&check; Assign icons to logged in and logged out variables
<br>
&check; Add links and urls 
<br>
&check; Add active and isactive with handle click function
<br>
&check; Add responsive styling
<br>
&check; Add navbar to header and footer
<br>
<hr>

2. As a **new user** I can **view the how to use gear addict section** so that **I can be quickly briefed on how to use the site**

### Acceptance Criteria:
* Acceptance Criteria 1: A 'how to use gear addict' section should be visible to users on the homepage of the site
* Acceptance Criteria 2: The how to section should showcase a quick guide on how to use the gear addict site

### Tasks:
&check; Add how to component
<br>
&check; Import how to component into home page component
<br>

[Back to top](<#contents>)

# Epic 3 - Rigs

1. As a **user** I can **add attributes to my rig** so that **I can showcase certain qualities of the rig to the community**

### Acceptance Criteria:
* Acceptance Criteria 1: Attribute 1 and attribute 2 select fields with options should be visible to users on the rig create form
* Acceptance Criteria 2: Upon successful submission, the rig attributes should be visible on the rig page and rig card components

### Tasks:
&check; Add attribute 1 and attribute 2 select fields with options to rig create form
<br>
&check; Add attribute 1 and attribute 2 to use state and on submit functions
<br>
&check; Add attribute 1 and attribute 2 conditionals to rig page and rig card components
<br>
&check; Test functionality
<hr>

2. As a **user** I can **keep scrolling through the rigs on the site, and they are loaded automatically** so that **I don't have to click on next page to view more**

### Acceptance Criteria:
* Acceptance Criteria 1: Rigs should be displayed in lists.
* Acceptance Criteria 2: Lists should be loaded in groups of ten, and when a user scrolls down near the bottom of the list, the next section of rigs should be loaded automatically.
* Acceptance Criteria 3: A loading spinner should be displayed while the next rigs are loading.

### Tasks:
&check; Install infinite scroll package
<br>
&check; Import infinite scroll into rigs list
<br>
&check; Add Infinite Scroll component with attributes to rigs list
<hr>

3. As a **user** I can **view an ordered list of all the published rigs** so that **I can browse through them**

### Acceptance Criteria:
* Acceptance Criteria 1: A 'Latest' link should be visible to logged in users on the site nav bar and footer
* Acceptance Criteria 2: When clicked, the user should be directed to the latest page displaying a list of rigs in descending created on order

### Tasks:
&check; Add latest link to site nav bar and footer
<br>
&check; Add latest page component
<br>
&check; Add route for latest page to app.js
<br>
&check; Test functionality
<hr>

4. As a **user** I can **view an ordered list of my rigs on my rigs page** so that **I can easily see all the rigs I have added**

### Acceptance Criteria:
* Acceptance Criteria 1: A 'Rigs' link should be visible to logged in users on the site nav bar and the footer
* Acceptance Criteria 2: Clicking the rigs link should direct the user to the rigs page
* Acceptance Criteria 3: The rigs page should contain a list of rigs created by the user, ordered from most recent to oldest

### Tasks:
&check; Add rigs link to site nav bar and footer menus
<br>
&check; Add rigs page component
<br>
&check; Add route for rigs page to app.js
<br>
&check; Add conditional to rigs page link to only display if user is logged in
<br>
&check; Test functionality
<hr>

5. As a **user** I can **add a description to my rig** so that **I can add any other details that I want to record / share with the community**

### Acceptance Criteria:
* Acceptance Criteria 1: A description field should be visible to users on the rig create form
* Acceptance Criteria 2: Upon successful submission, the rig description should be visible on the rig card and the rig page components

### Tasks:
&check; Add description text area field to rig create form
<br>
&check; Add description to use state and on submit functions
<br>
&check; Add description conditional to rig card and rig page components
<br>
&check; Test functionality
<hr>

6. As a **user** I can **add a gear list to my rig** so that **I can list the individual items present in my rig**

### Acceptance Criteria:
* Acceptance Criteria 1: A gear list text area field should be visible to users on the rig create form
* Acceptance Criteria 2: Upon successful submission, the rig gear list should be visible on the rig page component

### Tasks:
&check; Add gear list text area field to rig create form
<br>
&check; Add gear list to use state and on submit functions
<br>
&check; Add gear list conditional to rig page component
<br>
&check; Test functionality
<hr>

7. As a **user** I can **edit my rig** so that **I can change and update the rig details and contents**

### Acceptance Criteria:
* Acceptance Criteria 1: A dropdown menu with an edit button link should be visible on all rig pages for rigs owned by the user
* Acceptance Criteria 2: The dropdown menu should only be visible if the user is logged in
* Acceptance Criteria 3: Clicking the edit button should direct the user to the edit rig form page
* Acceptance Criteria 4: The form fields should be pre-populated with the data from the specific rig
* Acceptance Criteria 5: Upon successful submission, the user should be redirected back to the updated rig page

### Tasks:
&check; Add dropdown menu component with edit button to rig page component
<br>
&check; Add URL to edit button to direct the user to rigs/edit/$id
<br>
&check; Add conditional to only show dropdown menu if the user is logged in and owns the rig
<br>
&check; Add rig edit form component with on change and on submit methods
<br>
&check; Add route for rig edit form to app.js
<br>
&check; Add user redirect to rig page on successful submit
<br>
&check; Add error handling and validation
<br>
&check; Test functionality
<hr>

8. As a **user** I can **draft a rig** so that **I can save it to my rigs page but not publish it publicly**

### Acceptance Criteria:
* Acceptance Criteria 1: A draft select box should be visible on the add and edit rig form components
* Acceptance Criteria 2: When selected and submitted, the rig should not be visible on the rig lists
* Acceptance Criteria 3: The rig should only be visible to the user on their my rigs page
* Acceptance Criteria 4: All drafted rigs should be marked with a draft tag icon to show their draft status

### Tasks:
x Add draft select box to create and edit rig forms
<br>
x Add draft to form use state, on change and on submit functions
<br>
x Add filtering to rigs list to remove drafted rigs except on the my rigs page
<br>
x Add conditional draft icon badge to rig cards
<br>
x Test functionality
<hr>

9. As a **user** I can **post a rig** so that **I can publicly share my rig with the site community**

### Acceptance Criteria:
* Acceptance Criteria 1: An add rig button link should be visible in the site nav menu to logged in users
* Acceptance Criteria 2: When the button is clicked the user should be directed to the rig create form component
* Acceptance Criteria 3: On submission, the user should be redirected to the rig page showing the full details of the newly created rig

### Tasks:
&check; Add 'Add rig' button to site nav bar component with URL link to rigs/create
<br>
&check; Add rig create form component with on change and on submit methods
<br>
&check; Add route for rig create form into app.js
<br>
&check; Add user redirect to rig page on successful form submission
<br>
&check;  Add error handling and validation
<br>
&check; Test functionality
<hr>

10. As a **user** I can **delete my rig** so that **I can remove it completely from the site**

### Acceptance Criteria:
* Acceptance Criteria 1: A delete icon button should be visible to a logged in user in the rig page dropdown menu
* Acceptance Criteria 2: The dropdown menu should only be visible if the user owns the rig
* Acceptance Criteria 3: Clicking the delete button should delete the rig and redirect the user back to the home page

### Tasks:
&check; Add delete button link into rig page component
<br>
&check; Add handle delete method
<br>
&check; Add user redirect to home page on successful deletion
<br>
&check; Add conditional to dropdown menu
<br>
&check; Test functionality
<hr>

11. As a **user** I can **use a search bar to search the rigs list** so that **I can find a specific rig quickly and easily**

### Acceptance Criteria:
* Acceptance Criteria 1: A search bar with a text input field should be visible to users on all pages displaying a list of rigs
* Acceptance Criteria 2: When a user adds text to the search field the rigs list should be queried and all rigs not matching the query should be filtered out and removed from view
* Acceptance Criteria 3: The rigs list query filter method should be called after a short delay
* Acceptance Criteria 4: The user should be able to search for categories, genres, attributes, names and descriptions
* Acceptance Criteria 5: If the search bar is cleared, the rigs list should return back to normal

### Tasks:
&check; Add search bar component with query method
<br>
&check; Import and add search bar component into each page with a rigs list 
<br>
&check; Add interval timer to query method
<br>
&check; Pass search query as prop into rigs list component
<br>
&check; Add search method query into rigs list 
<br>
&check; Test functionality
<hr>

12. As a **user** I can **add a budget to my rig** so that **I can share the approximate value range of the rig**

### Acceptance Criteria:
* Acceptance Criteria 1: A budget select field with options should be visible to users on the rig create form
* Acceptance Criteria 2: Upon successful submission, the rig budget should be visible on the rig page component

### Tasks:
&check; Add budget select field with options to rig create form
<br>
&check; Add budget to use state and on submit functions
<br>
&check; Add budget conditionals to rig page component
<br>
&check; Test functionality
<hr>

13. As a **user** I can **add a category to my rig** so that **so that other users can see which instruments this rig relates to**

### Acceptance Criteria:
* Acceptance Criteria 1: A category select field with options should be visible to users on the rig create form
* Acceptance Criteria 2: Upon successful submission, the rig category should be visible on the rig page component
### Tasks:
&check; Add a category select field with options to rig create form
<br>
&check; Add category to the use state and on submit functions
<br>
&check; Add category conditional to the rig page component
<br>
&check; Test functionality
<hr>

14. As a **user** I can **add genres to my rig** so that **other users can see which genres this rig would be suitable for**

### Acceptance Criteria:
* Acceptance Criteria 1: Genre 1 and genre 2 select fields with options should be visible to users on the rig create form
* Acceptance Criteria 2: Upon successful submission, the rig genres should be visible on the rig page and rig card components

### Tasks:
&check; Add genre 1 and genre 2 select fields with options to rig create form
<br>
&check; Add genre 1 and genre 2 to use state and on submit functions
<br>
&check; Add genre 1 and genre 2 conditionals to rig page component
<br>
&check; Test functionality
<hr>

15. As a **user** I can **view a list of the hottest rigs** so that **I can see what rigs are the most popular**

### Acceptance Criteria:
* Acceptance Criteria 1: A list of the hottest rigs should be visible on the home page
* Acceptance Criteria 2: The rigs list should have a max limit of four
* Acceptance Criteria 3: The rigs should be sorted by most liked in descending order

### Tasks:
&check; Add rigs list component
<br>
&check; Add hottest rigs filter to rigs list to order from most liked descending
<br>
&check; Add and import rigs list component on home page
<br>
&check; Pass rigs list slice prop and add conditional to slice rig results
<br> 
&check; Test functionality
<hr>

[Back to top](<#contents>)

# Epic 4 - Gear

1. As a **user** I can **add a location to my gear items** so that **I can see where each piece of gear is located**

### Acceptance Criteria:
* Acceptance Criteria 1: A location field should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the location field data should be visible on the gear card 

### Tasks:
&check; Add location field to gear model
<br>
&check; Migrate database
<br>
&check; Add location field to gear create and edit forms
<br>
&check; Add location field data into use state and handle submit function
<br>
&check; Test functionality
<hr>

2. As a **user** I can **add an image to my gear items** so that **my gear is displayed with images on my gear page**

### Acceptance Criteria:
* Acceptance Criteria 1: An image input field should appear on the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the image should be visible on the gear card 

### Tasks:
&check; Add image field to gear model
<br>
&check; Migrate database
<br>
&check; Add image field to gear create and edit forms
<br>
&check; Add image field data into use state and handle submit function
<br>
&check; Test functionality
<hr>

3. As a **user** I can **add a value to my gear items** so that **I can see a total value of my gear displayed on my gear page**

### Acceptance Criteria:
* Acceptance Criteria 1: A value field should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the value field data should be visible on the users gear card 

### Tasks:
&check; Add value field to gear model
<br>
&check; Migrate database
<br>
&check; Add value field to gear create and edit forms
<br>
&check; Add value field data into use state and handle submit function
<br>
&check; Test functionality
<hr>

4. As a **user** I can **add a brand and model to my gear items** so that **I can see them displayed on my gear page**

### Acceptance Criteria:
* Acceptance Criteria 1: Brand and model fields should appear in the gear 0create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the brand and model field data should be visible on the gear card

### Tasks:
&check; Add brand and model fields to gear model
<br>
&check; Migrate database
<br>
&check; Add brand and model fields to gear create and edit forms
<br>
&check; Add brand and model field data into use state and handle submit function
<br>
&check; Test functionality
<hr>

5. As a **user** I can **add a category to my gear items** so that **I they can be automatically organised on my profile**

### Acceptance Criteria:
* Acceptance Criteria 1: A category field should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: The category field should be a select field with multiple options
* Acceptance Criteria 3: Upon submission, the category field data should be visible on the gear card 

### Tasks:
&check; Add category field to gear model with category options
<br>
&check; Migrate database
<br>
&check; Add category select field to gear create and edit forms
<br>
&check; Add category field data into use state and handle submit function
<br>
&check; Test functionality
<hr>

6. As a **user** I can **delete gear items** so that **I can remove it from my gear list**

### Acceptance Criteria:
* Acceptance Criteria 1: A dropdown menu should be visible to users on their gear cards
* Acceptance Criteria 2: Clicking the delete button on the dropdown menu should delete the gear item
* Acceptance Criteria 3: Upon deletion the gear list should re-render to display the new list without the deleted item

### Tasks:
&check; Add dropdown menu component with click outside function
<br>
&check; Import dropdown menu component into gear card component
<br>
&check; Add handle delete function into gear card and pass as prop to dropdown menu component
<br>
&check; Test functionality
<hr>

7. As a **user** I can **edit gear items** so that **I can change and update item details**

### Acceptance Criteria:
* Acceptance Criteria 1: A dropdown menu with an edit icon button should be visible to users on their gear cards
* Acceptance Criteria 2: Clicking the edit icon button should redirect the user to the gear edit form 
* Acceptance Criteria 3: The form should be autofilled with the data from the instance of gear the user wishes to edit
* Acceptance Criteria 4: Any fields that are updated should be reflected in the updated gear card when the user clicks the save button on the form
* Acceptance Criteria 5: Form submission should redirect the user back to the gear page

### Tasks:
&check; Add edit icon button to the gear dropdown menu with a link to the edit gear page
<br>
&check; Add route for the edit gear form into app.js
<br>
&check; Create edit gear form component with handle submit and handle change functions
<br>
&check;  Add error handling and validation
<br>
&check; Test functionality
<hr>

8. As a **user** I can **add gear items** so that **I can add it to an the organised list on my gear page**

### Acceptance Criteria:
* Acceptance Criteria 1: An add gear button should be visible in the site nav bar
* Acceptance Criteria 2: Clicking the add gear button should direct the user to the create gear form
* Acceptance Criteria 3: On submission, the form should direct the user to the gear page with the new gear item added to the list

### Tasks:
&check; Add create gear link to site navbar component
<br>
&check; Add URL /gear/create
<br>
&check; Add create gear component with form and on submit and on change methods
<br>
&check; Import component and route for gear create page on app.js
<br>
&check;  Add error handling and validation
<br>
&check; Test functionality
<hr>

9. As a **user** I can **use a search field to search the gear on my gear page** so that **I can easily and quickly find the gear that I’m looking for**

### Acceptance Criteria:
* Acceptance Criteria 1: A search bar with a text input field should be visible to all logged in users on their gear page
* Acceptance Criteria 2: When a user adds text to the search field the gear list should be queried and all gear not matching the query should be filtered out and removed from view
* Acceptance Criteria 3: The gear list query filter method should be called after a short delay
* Acceptance Criteria 4: The user should be able to search for gear names, categories, brands, models and descriptions
* Acceptance Criteria 5: If the search bar is cleared, the gear list should return back to normal

### Tasks:
&check; Add search bar component with query method
<br>
&check; Import and add search bar component into gear page component
<br>
&check; Add interval timer to query method
<br>
&check; Pass search query as prop into gear list component
<br>
&check; Add search method query into gear list 
<br>
&check; Test functionality
<hr>

10. As a **user** I can **view an ordered list of my gear items on my gear page** so that **I can easily see all the gear I have added**

### Acceptance Criteria:
* Acceptance Criteria 1: A 'Gear' link should be visible to logged in users on the site nav bar and footer
* Acceptance Criteria 2: When clicked, the user should be directed to the gear page displaying a list of gear created by the user in descending created on order

### Tasks:
&check; Add gear link to site nav bar and footer
<br>
&check; Add conditional for gear link in nav bar and footer
<br>
&check; Add gear page component
<br>
&check; Add route for gear page to app.js
<br>
&check; Test functionality
<hr>

11. As a **user** I can **add serial/model numbers to my gear items** so that **I can have proof of ownership incase of theft**

### Acceptance Criteria:
* Acceptance Criteria 1: Serial and model text fields should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the serial and model field data should be visible on the gear card 

### Tasks:
&check; Add serial and model text fields to gear create and edit forms
<br>
&check; Add serial and model field data into use state, handle change and handle submit functions
<br>
&check; Add conditionals for serial and model data into gear cards
<br>
&check; Test functionality
<hr>

12. As a **user** I can **add a year to my gear items** so that **I can keep a record of how old my gear is**

### Acceptance Criteria:
* Acceptance Criteria 1: A year number field should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the year field data should be visible on the gear card 

### Tasks:
&check; Add year number field to gear create and edit forms
<br>
&check; Add year field data into use state, handle change and handle submit functions
<br>
&check; Add conditional for year data into gear cards component
<br>
&check; Test functionality
<hr>

13. As a **user** I can **add a condition rating to my gear items** so that **I can keep an updated record of the changing condition of my gear**

### Acceptance Criteria:
* Acceptance Criteria 1: A condition rating select field with options should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the condition field data should be visible on the gear card 

### Tasks:
&check; Add condition rating select field with options to gear create and edit forms
<br>
&check; Add condition rating field data into use state, handle change and handle submit functions
<br>
&check; Add conditional for condition rating data into gear cards component
<br>
&check; Test functionality
<hr>

14. As a **user** I can **add a description to my gear items** so that **I can record any other information that I deem necessary or useful**

### Acceptance Criteria:
* Acceptance Criteria 1: A description text area field should appear in the gear create form as well as the edit gear form
* Acceptance Criteria 2: Upon submission, the description field data should be visible on the gear card 

### Tasks:
&check; Add description text area field to gear create and edit forms
<br>
&check; Add description field data into use state, handle change and handle submit functions
<br>
&check; Add conditional for description data into gear card component
<br>
&check; Test functionality
<hr>

15. As a **user** I can **mark gear items for repair** so that **I easily keep track of which items need repairing**

### Acceptance Criteria:
* Acceptance Criteria 1: A repair select option field with yes or no options should be visible on the gear create and edit forms
* Acceptance Criteria 2: When a user selects the yes option and submits the form, a repair badge should be visible on the gear card

### Tasks:
&check; Add repair select field with yes and no option to gear create and edit form
<br>
&check; Add conditional to gear card to display repair badge
<br>
&check; Style repair badge
<br>
&check; Test functionality
<hr>

16. As a **user** I can **mark gear items as for sale** so that **I can easily keep track of gear that I am selling**

### Acceptance Criteria:
* Acceptance Criteria 1: A sale select option field with yes or no options should be visible on the gear create and edit forms
* Acceptance Criteria 2: When a user selects the yes option and submits the form, a sale badge should be visible on the gear card

### Tasks:
&check; Add sale select field with yes and no option to gear create and edit form
<br>
&check; Add conditional to gear card to display sale badge
<br>
&check; Style sale badge
<br>
&check; Test functionality
<hr>

17. As a **user** I can **mark gear items as insured** so that **I easily keep track of which items are insured**

### Acceptance Criteria:
* Acceptance Criteria 1: An insured select option field with yes or no options should be visible on the gear create and edit forms
* Acceptance Criteria 2: When a user selects the yes option and submits the form, an insured badge should be visible on the gear card

### Tasks:
&check; Add insured field with options to gear model
<br>
&check; Migrate database
<br>
&check; Add insured field with yes and no option to gear create and edit form
<br>
&check; Add conditional to gear card to display insured badge
<br>
&check; Style insured badge
<br>
&check; Test functionality
<hr>

18. As a **user** I can **keep scrolling through my gear on the site, and they are loaded automatically** so that **I don't have to click on next page to view more**

### Acceptance Criteria:
* Acceptance Criteria 1: Gear should be displayed in a list.
* Acceptance Criteria 2: The list should be loaded in groups of ten, and when a user scrolls down near the bottom of the list, the next section of gear should be loaded automatically.
* Acceptance Criteria 3: A loading spinner should be displayed while the next gear section is loading.

### Tasks:
&check; Install infinite scroll package
<br>
&check; Import infinite scroll into gear list
<br>
&check; Add Infinite Scroll component with attributes to gear list

[Back to top](<#contents>)

# Epic 5 - Comments

1. As a **user** I can **edit my comments** so that **I can change and update the comment**

### Acceptance Criteria:
* Acceptance Criteria 1: A menu button icon should be visible on any comments made by a user 
* Acceptance Criteria 2: Clicking the menu button should open a dropdown menu with an edit button 
* Acceptance Criteria 3: Clicking the edit button should open the edit comment form component
* Acceptance Criteria 4: The form fields should be pre filled out with the content of the comment
* Acceptance Criteria 5: If a user edits the form field and clicks the submit button the comment should be returned back into view with the edited content visible
* Acceptance Criteria 6: If a user clicks the cancel button the form should be closed and the unedited comment returned to view

### Tasks:
&check; Import and add dropdown component into comment component
<br>
&check; Add conditional to only be visible if user is logged in and owns the comment
<br>
&check; Add edit comment form component with on submit and on change methods
<br>
&check; Test functionality
<hr>

2. As a **user** I can **comment on rigs** so that **I can engage with the community and the author**

### Acceptance Criteria:
* Acceptance Criteria 1: A list of comments from users should be visible on the rig pages
* Acceptance Criteria 2: A comment form should be visible to logged in users so they can post a comment
* Acceptance Criteria 3: Clicking the comment form submit button should add the comment at the top of the rig page comment list 

### Tasks:
&check; Add comment section to rig page
<br>
&check; Add loop to display comments on page in descending updated on order
<br>
&check; Add comment form 
<br>
&check; Add conditional to comment form to display only to logged in users
<br>
&check; Add comment form on change and on submit methods
<br>
&check; Test functionality
<hr>

3. As a **user** I can **delete my comments** so that **I can remove my comment from the rig comment section**

### Acceptance Criteria:
* Acceptance Criteria 1: A delete button should be visible in the comment dropdown menu to logged in users that own the comment
* Acceptance Criteria 2: When clicked, the comment should be deleted and the comment list should be re-rendered displaying the new list without the comment 

### Tasks:
&check; Add delete button to comment dropdown menu
<br>
&check; Add conditional for comment dropdown menu
<br>
&check; Add handle delete function to comment component
<br>
&check; Test functionality

[Back to top](<#contents>)

# Epic 6 - Profiles

1. As a **user** I can **remove myself as a user fan** so that **I can remove updates of that user from my feed**

### Acceptance Criteria:
* Acceptance Criteria 1: An unfan button should be visible to logged in users when they navigate to a user profile that they are currently a fan of
* Acceptance Criteria 2: This button should also be visible on the popular profiles component
* Acceptance Criteria 3: Clicking this button should remove the user as a fan, remove the unfan button from view and display the fan button

### Tasks:
&check; Add unfan button to profile page and popular profiles components
<br>
&check; Add unfan method
<br>
&check; Add conditional to only show the button when a user is logged in and currently a fan
<br>
&check; Add conditional to hide the button on users own profile
<br>
&check; Add functionality to hide button on click and display fan button
<br>
&check; Test functionality
<hr>

2. As a **user** I can **become a fan of other users** so that **I can stay easily keep updated with any new rigs that they post**

### Acceptance Criteria:
* Acceptance Criteria 1: A fan button should be visible on the profile page and popular profiles components if a user is logged in and not currently listed as a fan
* Acceptance Criteria 2: The button should not be visible on the users own profile
* Acceptance Criteria 3: Clicking the button should add the user to the users fan count, remove the fan button from the page and display the unfan button

### Tasks:
&check; Add fan button to profile page and popular profiles components
<br>
&check; Add fan method
<br>
&check; Add conditional to only display to logged in users who are currently not fans
<br>
&check; Add conditional to not display on users own profile
<br>
&check; Add functionality to remove from view on successful fan request 
<br>
&check; Add functionality to display unfan button when user is a fan
<br>
&check; Test functionality
<hr>

3. As a **user** I can **delete my account** so that **I can remove my profile and all its content from the platform instantly**

### Acceptance Criteria:
* Acceptance Criteria 1: A delete button should be visible within a users profile dropdown menu
* Acceptance Criteria 2: Clicking the delete button should display a pop up window prompting the user to confirm their request to delete their profile
* Acceptance Criteria 3: If a user clicks the delete button on the pop up their profile should be deleted along with all their content and they should be logged out and redirected back to the home page

### Tasks:
x Add delete button icon to profile page dropdown menu
<br>
x Add delete user/profile method
<br>
x Add pop up delete confirmation to confirm user deletion
<br>
x Add redirect to method on successful completion
<br>
x Test functionality
<hr>

4. As a **user** I can **change my account username** so that **other users will see my updated username on my profile**

### Acceptance Criteria:
* Acceptance Criteria 1: A change username button icon should appear on a users profile dropdown menu
* Acceptance Criteria 2: Clicking the button should direct the user to the change username form page
* Acceptance Criteria 3: The form field should be pre populated with the users current username
* Acceptance Criteria 4: Changing the field and submitting the form should redirect he user back to their profile with the username display changed to the new value
* Acceptance Criteria 5: Clicking the cancel button should return the user back to their profile with no changes made

### Tasks:
&check; Add change username button icon to profile dropdown menu
<br>
&check; Add URL link to edit username form to edit username button
<br>
&check; Add edit username form component with on change and on submit methods
<br>
&check; Add route for edit username page to app.js
<br>
&check; Test functionality
<hr>

5. As a **user** I can **change my account password** so that **I can log into my account with a new password**

### Acceptance Criteria:
* Acceptance Criteria 1: A change password button icon should appear on a users profile dropdown menu
* Acceptance Criteria 2: Clicking the button should direct the user to the change password form page
* Acceptance Criteria 3: Changing the fields and submitting the form should redirect he user back to their profile page with their password changed
* Acceptance Criteria 4: Clicking the cancel button should return the user back to their profile with no changes made

### Tasks:
&check; Add change password button icon to profile dropdown menu
<br>
&check; Add URL link to edit password form to edit username button
<br>
&check; Add edit password form component with on change and on submit methods
<br>
&check; Add route for edit password page to app.js
<br>
&check; Test functionality
<hr>

6. As a **user** I can **view my profile statistics on my profile** so that **I can keep a track of how popular my profile is**

### Acceptance Criteria:
* Acceptance Criteria 1: Profile statistics should be visible to a logged in user on their own profile
* Acceptance Criteria 2: These statistics should not be visible to other users and non logged in users
* Acceptance Criteria 3: Statistics should include page views, number of rigs, number of likes, number of saves, number of fans and total value of gear

### Tasks:
x Add profile statistics component
<br>
x Add method to get statistics data
<br>
x Import and add component to profile page
<br>
x Add conditional to only display to logged in users who own the profile
<br>
x Test functionality
<hr>

7. As a **user** I can **delete my contact details on my profile** so that **I can hide them from other users who view my profile**

### Acceptance Criteria:
* Acceptance Criteria 1: A delete all button should be visible to logged in users on the create / edit contact details form page
* Acceptance Criteria 2: Clicking the delete all button should delete all the users contact details and redirect them back to their profile page
* Acceptance Criteria 3: All contact details should be removed from the user profile

### Tasks:
x Add delete all button to create / edit contact details form page
<br>
x Add handle delete method to edit contact details component
<br>
x Add redirect to user profile on successful deletion 
<br>
x Test functionality
<hr>

8. As a **user** I can **add contact details to my profile** so that **I can have my contact information visible to other users**

### Acceptance Criteria:
* Acceptance Criteria 1: An add contact details button link should be visible to users on their profile dropdown menu
* Acceptance Criteria 2: Clicking the button link should direct users to the add/edit contact details form page
* Acceptance Criteria 3: The form fields should be pre-populated with any details already added to the profile
* Acceptance Criteria 4: Form fields should include phone number, email address and social media links
* Acceptance Criteria 5: Successful submission of the form should redirect the user back to their profile with the new contact details visible

### Tasks:
x Add contact details button to profile dropdown menu
<br>
x Add contact details form URL to contact details button
<br>
x Add contact details form component with on change and on submit methods
<br>
x Add contact details form route to app.js
<br>
x Add redirect to user profile on successful form submission
<br>
x Test functionality
<hr>

9. As a **user** I can **use a default profile image** so that **I don’t have to upload my own**

### Acceptance Criteria:
* Acceptance Criteria 1: When a user first signs up, a new profile should be automatically created for them
* Acceptance Criteria 2: The users new profile should contain a default profile image as one hasn't yet been added

### Tasks:
&check; Upload default profile image to cloudinary
<br>
&check; Copy profile image URL
<br>
&check; Add url to profile image model field as default
<br>
&check; Test functionality
<hr>

10. As a **user** I can **change my profile image** so that **I can update my profile picture for other users to see**

### Acceptance Criteria:
* Acceptance Criteria 1: An edit profile button link should be visible to a logged in user in their profile dropdown menu
* Acceptance Criteria 2: Clicking the link should direct the user to the edit profile form page
* Acceptance Criteria 3: The form should contain an image field to change their profile image
* Acceptance Criteria 4: If an image is added to the form, the users profile image should change on submission
* Acceptance Criteria 5: On successful submission, the user should be redirected to their profile with their new profile image updated and displayed

### Tasks:
&check; Add edit profile button link to profile dropdown menu
<br>
&check; Add URL to button link for edit profile form page
<br>
&check; Add edit profile component with on change and on submit methods
<br>
&check; Add route for edit profile form to app.js
<br>
&check; Add redirect to user profile on successful submission
<br>
&check; Test functionality
<hr>

11. As a **user** I can **change my profile details** so that **I can update my profile with my latest details**

### Acceptance Criteria:
* Acceptance Criteria 1: An edit profile button link should be visible to logged in users on their profile within the dropdown menu
* Acceptance Criteria 2: Clicking the edit profile button should direct the user to the edit profile form page
* Acceptance Criteria 3: The form fields in the edit profile form should be automatically pre-populated with data from the users profile
* Acceptance Criteria 4: Upon successful submission, the user should be redirected back to their profile, and the profile should display any changes made to the form fields

### Tasks:
&check; Add edit profile button to profile dropdown
<br>
&check; Add URL link to edit profile page to button
<br>
&check; Add edit profile form component with on change and on submit methods
<br>
&check; Add route for edit profile form to app.js
<br>
&check; Add redirect to users profile on successful form submission
<br>
&check; Test functionality
<hr>

12. As a **user** I can **check how many fans, idols, rigs and gear I have on my profile page** so that **I can keep updated on the popularity of my profile**

### Acceptance Criteria:
* Acceptance Criteria 1: When a user navigates to their profile they should see profile stats with a live count of how many fans, idols, rigs and gear they have

### Tasks:
&check; Add user profile count component and pass it props from the profile page component
<br>
&check; Import and add component to profile page component
<br>
&check; Test functionality
<hr>

13. As a **user** I can **change my profile header image** so that **I can further customise my profile**

### Acceptance Criteria:
* Acceptance Criteria 1: A header image field should be visible on the edit profile form page to logged in users
* Acceptance Criteria 2: A user should be able to add an image to the header image field
* Acceptance Criteria 3: On successful submission, the user should be redirected to their profile and the image should be displayed as the profile header

### Tasks:
&check; Add header image field to edit profile form component
<br>
&check; Add header image to use state, image on change and on submit methods
<br>
&check; Add conditional to profile page component to display the user profile image
<br>
&check; Add default profile header image to cloudinary and copy URL
<br>
&check; Add default profile header image URL to header image api model field
<br>
&check; Test functionality
<hr>

14. As a **user** I can **see a list of popular profiles** so that **I can easily view their profiles and become a fan**

### Acceptance Criteria:
* Acceptance Criteria 1: A logged in user should see a list of popular profiles on any profile they visit
* Acceptance Criteria 2: Each profile in the list should feature a link to the profile as well as a username and image
* Acceptance Criteria 3: Each profile should also include a button to fan or unfan the user if the user is logged in

### Tasks:
&check; Create profile data context with use effect and import to index.js
<br>
&check; Add popular profiles component
<br>
&check; Add profile component and import profile to popular profiles component
<br>
&check; Add conditional to display fan / unfan button
<br>
&check; Add and import popular profiles component to profile page component
<br>
&check; Test functionality
<hr>

15. As a **user** I can **add a profile image** so that **I can customise my profile with a personal picture**

### Acceptance Criteria:
* Acceptance Criteria 1: An edit profile button link should be visible to a logged in user in their profile dropdown menu
* Acceptance Criteria 2: Clicking the link should direct the user to the edit profile form page
* Acceptance Criteria 3: The form should contain an image field to change their profile image
* Acceptance Criteria 4: If an image is added to the form, the users profile image should change on submission
* Acceptance Criteria 5: On successful submission, the user should be redirected to their profile with their new profile image updated and displayed

### Tasks:
&check; Add edit profile button link to profile dropdown menu
<br>
&check; Add URL to button link for edit profile form page
<br>
&check; Add edit profile component with on change and on submit methods
<br>
&check; Add route for edit profile form to app.js
<br>
&check; Add redirect to user profile on successful submission
<br>
&check; Test functionality

[Back to top](<#contents>)

# Epic 7 - Like

1. As a **user** I can **like another users rig** so that **I can show my appreciation to the author and increase the rigs visibility to other users**

### Acceptance Criteria:
* Acceptance Criteria 1: A like button should be visible on each rig card and rig page 
* Acceptance Criteria 2: The like button should only be visible if the user is logged in and doesn't own the rig
* Acceptance Criteria 3: Clicking the like button should add one like to the rig like count and remove the like button from view

### Tasks:
&check; Add like button to rig card and rig page
<br>
&check; Add like method 
<br>
&check; Add conditional to only display if user is logged in and doesn't own the rig
<br>
&check; Test functionality
<hr>

2. As a **user** I can **unlike a rig** so that **I can lower a rigs visibility among other users**

### Acceptance Criteria:
* Acceptance Criteria 1: An unlike button should be visible on each rig card and rig page 
* Acceptance Criteria 2: The unlike button should only be visible if the user is logged in, doesn't own the rig and has liked the rig previously
* Acceptance Criteria 3: Clicking the unlike button should minus one like from the rig like count, remove the unlike button from view and return the like button to view

### Tasks:
&check; Add unlike button to rig card and rig page
<br>
&check; Add unlike method 
<br>
&check; Add conditional to only display if user is logged in, doesn't own the rig and has previously liked the rig
<br>
&check; Test functionality

[Back to top](<#contents>)

# Epic 8 - Save

1. As a **user** I can **unsave a rig** so that **I can remove the rig from the list on my saved rigs page**

### Acceptance Criteria:
* Acceptance Criteria 1: Every rig card and rig page (except for rigs the user owns) should display a save and unsave button
* Acceptance Criteria 2: Once a user has clicked the save button to save a rig, the button should automatically change to the unsave button
* Acceptance Criteria 3: Clicking the unsave button should remove the rig from the users saved list

### Tasks:
&check; Add unsave button to rig card and rig page
<br>
&check; Add unsave method
<br>
&check; Add conditional logic to only display if the user doesn't own the rig and is logged in
<br>
&check; Test functionality
<hr>

2. As a **user** I can **save a rig** so that **I can add it to my saved rigs section and easily view it at a later date**

### Acceptance Criteria:
* Acceptance Criteria 1: A save button should be visible on each instance of rig card and rig page which isn't owned by the user
* Acceptance Criteria 2: When clicked, the button should change to an unsave button and the rig should be visible in the users saved section

### Tasks:
&check; Add save button to rig card and rig page 
<br>
&check; Add save method
<br>
&check; Add conditional to only display if user doesn't own the rig and is logged in
<br>
&check; Test funtionality

[Back to top](<#contents>)