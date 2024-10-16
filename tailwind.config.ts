import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mygray: "#DDDDDD",
        myindigo:"#4F1787",
        myblue:"#024CAA",
        mygreen:"#365E32",
        mypink:"#E11299",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container:{
        
        padding:"15px"
      },
    },
  },
  plugins: [],
};
export default config;
