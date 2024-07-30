<div align="center">
  <br />
    <a href="https://pixwiz.vercel.app/" target="_blank">
      <img width="1440" alt="Screenshot 2024-07-30 at 4 02 08 PM" src="https://github.com/user-attachments/assets/14976249-23b9-4b40-9e7c-52a1675bb9d9">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Pixel Wizard (PixWiz) sn AI SaaS Platform</h3>

   <div align="center">
     Check out <a href="https://pixwiz.vercel.app/" target="_blank" >PixWiz</a>>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## <a name="introduction">🤖 Introduction</a>

An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## <a name="features">🔋 Features</a>

🚀 **Authentication and Authorization**: Secure user access with registration, login, and route protection.

🚀 **Community Image Showcase**: Explore user transformations with easy navigation using pagination

🚀 **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately

🚀 **Image Restoration**: Revive old or damaged images effortlessly

🚀 **Image Recoloring**: Customize images by replacing objects with desired colors easily

🚀 **Image Generative Fill**: Fill in missing areas of images seamlessly

🚀 **Object Removal**: Clean up images by removing unwanted objects with precision

🚀 **Background Removal**: Extract objects from backgrounds with ease

🚀 **Download Transformed Images**: Save and share AI-transformed images conveniently

🚀 **Transformed Image Details**: View details of transformations for each image

🚀 **Transformation Management**: Control over deletion and updates of transformations

🚀 **Credits System**: Earn or purchase credits for image transformations

🚀 **Profile Page**: Access transformed images and credit information personally

🚀 **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use

🚀 **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/22ayaan/pix-wizard-ai.git
cd pix-wizard-ai
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

### Image Restore:

<img width="1440" alt="Screenshot 2024-07-30 at 4 14 05 PM" src="https://github.com/user-attachments/assets/2c5ff5a0-7585-4b98-b63d-9236632b7b4e">

### Generative Fill:

<img width="1440" alt="Screenshot 2024-07-30 at 4 11 33 PM" src="https://github.com/user-attachments/assets/2973f282-05d8-4318-84e0-559a7f40a750">

### Object Remove:

<img width="1440" alt="Screenshot 2024-07-30 at 4 12 03 PM" src="https://github.com/user-attachments/assets/dc1b3f70-06ed-49c5-b901-6e5750c1730a">

### Object Recolor:

<img width="1440" alt="Screenshot 2024-07-30 at 4 12 35 PM" src="https://github.com/user-attachments/assets/1587b708-f694-4eaf-88ea-790ac36985af">

### Background Remove:

<img width="1440" alt="Screenshot 2024-07-30 at 4 02 08 PM" src="https://github.com/user-attachments/assets/14976249-23b9-4b40-9e7c-52a1675bb9d9">

### Profile:

<img width="1440" alt="Screenshot 2024-07-30 at 4 14 32 PM" src="https://github.com/user-attachments/assets/c368e60a-ebe7-46fc-a156-e65b5b51cf4e">

### Credits Pucrhase Page:

<img width="1440" alt="Screenshot 2024-07-30 at 4 15 11 PM" src="https://github.com/user-attachments/assets/eb21e9bc-dcdd-4220-a5b5-81ee2819ab50">

### Stripe Payment Page:

<img width="1440" alt="Screenshot 2024-07-30 at 4 15 36 PM" src="https://github.com/user-attachments/assets/3bc11f3f-bb3b-4e5c-8587-7c0d9dd35995">

### Clerk Sign-in Page:

<img width="1440" alt="Screenshot 2024-07-30 at 4 16 15 PM" src="https://github.com/user-attachments/assets/b90fc853-a87b-4e2a-8416-370f6e5b5a3f">

### Clerk Sign-up page:

<img width="1440" alt="Screenshot 2024-07-30 at 4 16 36 PM" src="https://github.com/user-attachments/assets/b9e1e0b2-3aa6-494a-9d80-b903d4c06b2c">
