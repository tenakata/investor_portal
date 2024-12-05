/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBlue: "#003E59",
        mainbg: "#DDEAF8",
        inputborder:"#2C5997",
        dashbg:"#F5F6F7",
        statusColor:"#E31C25",
        inputbg:"#FF9088",
        stylebg:"#FFDFF5",
        delCol:"#40C96F",
        pendCol:"#FF6E6E",
        tablebg:"#F6F6F6",
        trashColor:"#2DC400"
      },
      height: {
        customHeight: "80%",
        inputHeight:"43px",
        logoHeight:"43px",
        graphHeight:"310px",
        statusheight:"270px",
        cshHeight:"180px",
        trackH:"220px",
        lineheight:"1px",
        radius:"10px"
      },
      width: {
        customWidth: "80%",
        inputWidth:"458px",
        logoWidth:"55px",
        graphWidth:"60%",
        statuswidth:"37%",
        sidenavW:"15%",
        contentW:"85%",
        cshWidht:"69%",
        trackW:"27%",
        radius:"10px",
      },
      fontSize: {
        login: "30px",
        loginbtn:"25px",
        trash:"70px"
      },
      screens:{
        xs:"250px"
      }
    },
  },
  plugins: [],
}
