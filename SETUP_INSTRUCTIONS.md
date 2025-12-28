# Portfolio Setup Instructions

## Installation Steps

Your portfolio project has been created successfully! Now you need to install the dependencies.

### Step 1: Open PowerShell in the Portfolio Directory

1. Open PowerShell (the same terminal where Node.js is working)
2. Navigate to the portfolio folder:
   ```powershell
   cd "C:\Users\LEGION\Desktop\Rick CV\portfolio"
   ```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```powershell
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- And all other dependencies

**Note:** The installation may take a few minutes.

### Step 3: Run the Development Server

Once installation is complete, start the development server:

```powershell
npm run dev
```

### Step 4: View Your Portfolio

Open your browser and navigate to:
```
http://localhost:3000
```

You should see your beautiful portfolio website! 🎉

## Next Steps After Installation

### Customize Your Content

1. **Update Personal Info** in `components/sections/Hero.tsx`
2. **Add Your Bio** in `components/sections/About.tsx`
3. **Add Your Projects** in `components/sections/Projects.tsx`
4. **Update Social Links** in `components/layout/Footer.tsx`

### Troubleshooting

If you encounter any errors:

1. **Module not found errors**: Run `npm install` again
2. **Port 3000 already in use**: Use `npm run dev -- -p 3001` to use port 3001
3. **TypeScript errors**: These are usually warnings and won't prevent the app from running

## Ready to Proceed?

Once you've run these commands in your PowerShell terminal, the portfolio will be ready for customization and deployment!
