# Browser History App Project

In this project, I have built a **Browser History** app by applying the concepts learned so far.

## Output Preview

![Browser History Output](https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif)

## Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/browser-history-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Browser History](https://assets.ccbp.in/frontend/content/react-js/browser-history-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png)

</details>

## Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

## Functionality Implemented

- Initially, the list of given history items is displayed with a delete button for each history item.
- When a non-empty value is provided in the search input, display the history items that include the search input, irrespective of case.
- When the delete button of a history item is clicked, the respective history item is deleted from the list of history items.
- When a non-empty value is provided in the search input element, and no history item includes the value given in the search input, then [Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png) should be displayed.
- When all the history items are deleted, then [Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png) should be displayed.

### History Item Structure

- The `historyList` consists of a list of `historyItem` objects with the following properties in each `historyItem` object:

  | Key          | Data Type |
  | ------------ | --------- |
  | id           | Number    |
  | timeAccessed | String    |
  | logoUrl      | String    |
  | title        | String    |
  | domainUrl    | String    |

### Important Note

<details>
<summary>Click to view</summary>

- The `logoUrl` in each history item has alt as **domain logo**.
- The delete button in the history item should have the `data-testid` as **delete**.

</details>

## Resources

<details>
<summary>Image URLs</summary>

- [App Logo](https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png) - Alt: **app logo**
- [Search Icon](https://assets.ccbp.in/frontend/react-js/search-img.png) - Alt: **search**
- [Delete Icon](https://assets.ccbp.in/frontend/react-js/delete-img.png) - Alt: **delete**

</details>

<details>
<summary>Colors</summary>

- Hex: #3367d6
- Hex: #2850a7
- Hex: #ececec
- Hex: #64748b
- Hex: #f8fafc
- Hex: #6697ff
- Hex: #ffffff
- Hex: #475569

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

---

**I have successfully completed the Browser History App project following the provided design and functionality requirements.**
