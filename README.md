# Photosnap Website

This is a solution to the [Photosnap Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Users are able to:
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Screenshot

![Full-size screenshot of the home page](/public/assets/screenshots/fullsize-homepage.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Utility classes
- [Typescript](https://styled-components.com/) - Javascript Typed programming language
- [Class Variance Authority](https://styled-components.com/) - Create Class variants for reusable components
- [tailwind merge](https://www.npmjs.com/package/tailwind-merge) - Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
- [clsx](https://www.npmjs.com/package/clsx) - Utility function to remove duplicates and add priority to new classes added.


### What I learned

The main reason for building this project was to get more experience with Typescript, using it in a website environment and also using it when building reusable components. I also wanted to get better at organising my typescript code in general and make it more readable and not such a mess as it has been in my previous projects.

#### Typescript Organisation
One of the ways I organised my typescript better was by creating a separate folder for all my typescript types and having each individual file contain a single type declaration, which I then used somewhere in my project. I plan to keep this architecture in my future projects because I feel it greatly improves the mess that was being caused before and helps massively with readability.

Here is an example of one of the type declaration files:
```ts
interface FeaturesCardTypes {
  id: number;
  title: string;
  desc: string;
  icon: any;
}
export default FeaturesCardTypes
```

<br>

#### Typescript with reusable components

This was the first time I have built class variant reusable components, while also using Typescript. There were a few things I learn't by doing this. One of the main things I lean't was setting up the types for these type of components has to be different, because we pass in the whole attributes for the base HTML element we need to declare that as a type so the component knows we are passing in all the attributes that come with the base element, this includes the children prop which get passed through when we wrap anything inside out custom component. We would as have to deal with passing in any props we might need to add to the component our selves.

Here is examples of a reusable component and its type declaration

Declaration file:
```ts
import { ButtonHTMLAttributes } from "react";
interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primaryLight" | "primaryDark" | "secondaryLight" | "secondaryDark";
  buttonType: "primary" | "secondary";
}
export default ButtonTypes
```

Reusable Component:
```tsx
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import ButtonTypes from "@/types/buttonTypes";

const Button = ({ theme, buttonType, className, ...props }: ButtonTypes) => {
  return (
    <button className={cn(buttonVariants({ theme }), className)} {...props} />
  );
};

const buttonVariants = cva("font-bold text-xs tracking-[2px]", {
  variants: {
    theme: {
      primaryLight:
        "text-black hover:underline hover:decoration-black active:no-underline",
      primaryDark:
        "text-white hover:underline hover:decoration-white active:no-underline",
      secondaryLight:
        "text-white bg-black hover:bg-lightGrey hover:text-black active:text-white active:bg-black",
      secondaryDark: "text-black bg-white hover:bg-lightGrey active:bg-white",
    },
    buttonType: {
      primary: "flex justify-start items-center gap-4",
      secondary: "px-6 py-3",
    },
  },
  defaultVariants: {
    theme: "primaryDark",
    buttonType: "primary",
  },
});

export default Button;
```

<br>

#### Responsive Images, picture element with the Next/Image component props & srcset & dpr

For this project I decided to use the picture element and use the "srcSet" attribute to handle the images in an art direction style concept. This means changing the images to different images based on the screen size. I would usually use the "Image" component provided by NextJS, but I had to use the picture & "srcSet" to handle the image changes, which you can't do with the plain "Image" component on it's own. I still used the props from the NextJS "Image" component, so I could keep the benefits of it, like optimization.

When I had the image assets for this project they were not the greatest quality, some of them were ok but the majority of them were poor. This lead me to having to edit the images and increasing their sizes. I noticed when checking the responsiveness of images on the mobile browser, some images were not reacting to the change in screen size. I found out this was because the default images I had used were not a suitable size. I noticed when the images were on the mobile browsers and were displaying images at 2 DPR (Device pixel ratio), the images, that were not big enough, wouldn't react to the change of screen size. The best solution, for me, was to have every image at least double the size of what is needed. This makes sure that the image quality is good while also making sure that the correct images are always displayed when reacting to the change of screen sizes using the "srcSet" attribute. The props from the "Image" component will also make sure the default image is optimized no matter how big the image actually is. I will always now try to do this in my future projects to avoid this kind of issue happening again.

Here is an example of my custom image component I used for the header and two column layout sections:

```tsx
import { getImageProps } from "next/image";
import ColumnImgTypes from "@/types/colImgTypes";

const TwoColImage = ({
  desktopSrc,
  mobileSrc,
  tabletSrc,
  alt,
}: ColumnImgTypes) => {
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    quality: 100,
    src: desktopSrc,
    alt,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    quality: 100,
    src: tabletSrc,
    alt,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    quality: 100,
    src: mobileSrc,
    alt,
  });
  //
  return (
    <div className="mdTab:flex-[2] mdTab:h-full mdDesk:flex-[4]">
      <picture className="">
        <source media="(min-width: 68.75em)" srcSet={desktop} />
        <source media="(min-width: 41.25em)" srcSet={tablet} />
        <img
          {...rest}
          className="w-full object-cover object-center max-h-[380px] mdTab:max-h-none mdTab:h-full"
          srcSet={mobile}
          src={mobile}
          alt={alt}
        />
      </picture>
    </div>
  );
};
export default TwoColImage;
```

<br>

### Continued development

This is my third project using typescript and I'm starting to incorporate it quicker and easier and seeing the benefits of having type safety can bring to my projects. I've also noticed that it is starting to help speed up my development time because i'm avoiding some errors/bugs before they even happen. Another thing I like about it is the intellisense it provides when I define the types on components and functions, which helps with the developer experience. I'm starting to see why typescript is so widely used and I plan to keep using it in most my projects going forward.

### Useful resources

- [Next.js image component setup with art-direction](https://nextjs.org/docs/app/api-reference/components/image#art-direction) - This helped me set up my responsive images with art-direction using the Next.js Image component props.

- [TailwindCSS-Docs-Gradients](https://tailwindcss.com/docs/gradient-color-stops) - The documentation helped me implement colour gradients with tailwind.

- [Article #1](https://www.oscprofessionals.com/shopify-speed-optimization/shopify-speed-optimization-image-attribute-sizes-dpr/#:~:text=image%20in%20pixels.-,The%20device%20pixel%20ratio%20(DPR)%20is%20a%20term%20that%20refers,the%20DPR%20of%20the%20device.) & [Article #2](https://docs.imgix.com/getting-started/tutorials/responsive-design/responsive-images-with-srcset) - Both these articles helped me understand the srcset attribute better and how the Image sizes impact the device pixel ratio.


## Author

- Website - [Portfolio](https://www.your-site.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/yourusername)
- Linkedin - [David Henery](https://www.twitter.com/yourusername)


