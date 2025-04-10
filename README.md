# Frontend Mentor - Base Apparel coming soon page solution

This is my solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/base-apparelcoming-soon-page---responsive-S2zrLdFoVf](https://www.frontendmentor.io/solutions/base-apparelcoming-soon-page---responsive-S2zrLdFoVf)
- Live Site URL: [https://repro123.github.io/base-apparel/](https://repro123.github.io/base-apparel/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### Notes

I used this project to refresh my vanilla CSS skills, as I have been using Tailwind CSS for several months. It all came back to me as though I never stopped Vanilla CSS.

I found this challenge relatively easy, so I used a new method in my form validation, using the common Regular Expression for email validation

```js
// commonly used regular empression for validating emails
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

I also used `setTimeout()` to clear the success message gotten after the form was successfully submitted.

### Useful resources

- [mailtrap.io](https://mailtrap.io/blog/javascript-email-validation/) to further research about mail validation
- [Javascript Timings by W3Schools](https://www.w3schools.com/js/js_timing.asp)to learn about the timi ng methods

## Author

- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/Repro123)
- Twitter - [@DrRepro](https://www.twitter.com/Dr_Repro)
