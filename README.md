# My Understanding For The Task

In the task description it was said to find the pairs who have worked together for the longest time which I understood as finding the pairs that have worked together at the SAME dates most which is what the information in the third table depicts.

However from what I interpreted from the examples is that there should be an output for information about individual employees which is what the second table is showing.

The first table shows which employees have worked on COMMON projects with the cumulative days worked on the project, I did this beacause I was not sure if I have to show OVERLAPPING days worked or CUMULATIVE days worked on COMMON projects. For that reason there are three ways I group the data before visualising.

Sorry that there are so many tables I just couldnt tell which is the main ask, either common projects without overlap(1),individual time(2), overlap days(3) or just project time(4)

## The Algorithms

### CSV Formatting

First the file is read with FileReader in the useFile hook, string is split by new lines, then filtered to exclude empty rows and then mapped into a matrix by splitting, and check for missing values in rows.

After that matrix is grouped by projectId into an object(This could also be done with an array but I chose to use an object), converted the two values (startDate , endDate) into utc time with date method.

Then I format the object into matrixes for using the dataTableTemplate component whre fisrt index = first collumn , last index = last collumn , and everything between first and last is grouped into the middle collumn.

### Formating For Tables

1. Cumulative days in common Projects table. This matrix is made with the pairs from COMMON projects(even with 3 participants) and with the cumulative time they have worked on said project (The time each person has spent ot the project Added together minus overlapping days)

2. IndividualTimeArr. Just the initial matrix which was before the grouped object with calculated day differance for start and end date of individual(this function would be unneeded if I didn't use object).

3. For pairs with overlaping work days. Check if any of the NEXT people in the array have overlaping days, which are calulated by checking start and end dates(MS_PER_DAY represents 1 day in utc). Sorted in return because no interactive sort functionality.

4. Longevidy. Finds start and end date of project and adds into array with its participants and projectId. Sorted in return.

### Search Functionality

I made the current search value into a context to be accesed by all components that need it, searchBar, dataTableTemplate and useSearch hook which formates the matrix you give it every time there is a new search value.

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm i`

Installs the dependencies for the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
