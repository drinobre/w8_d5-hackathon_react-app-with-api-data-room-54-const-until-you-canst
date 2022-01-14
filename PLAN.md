## Objective

- Use an API from https://apilist.fun/ which we decided to use the Cocktail API.

## Components Tree

- App
  -- Cocktails (Search by Name)
  --- Cocktail list
  ---- Cocktail item

## Challenges

- Have the Search Functionality work.

## Learnings

- When using the fetch > IMPORTANT TO CHECK IF THE URL has the https otherwise it would add the localhost in front of the url and it wouldn't work.
- When use the try and catch make sure we remove it when show error otherwise we can't identify the error.
- Console.log in different parts of the code to identify which part is causing the issue (eg. state, fetch response and data)

## Pending functionalities

- Create rule for when users add word not available on the API. It should show a message and direct to inital state;
- Display multiple cocktails available with the keyword, not only the position 0 on the array.
- Check how to display all the cocktails available as a list
- Create another API to display random cocktails as another option
- Create rule to display the ingredients
