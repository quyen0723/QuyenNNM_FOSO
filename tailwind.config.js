/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0375F3", // Màu chính
        secondary: "#FF9432", // Màu phụ
        accent: "#FF811A", // Điểm nhấn chính (15%)
        highlight1: "#3EC3F7", // Màu nổi bật 1 (20%)
        highlight2: "#35BD4B", // Màu nổi bật 2 (20%)

        textPrimary: "#003DA0", // Màu chữ chính
        textWhite: "#FFFFFF", // Màu chữ trắng
        textDarkBlue: "#11315B",
        textOrange: "#C25705",
        textBlue: "#076A94",
        textGreen: "#1A7526",
        textGray: "#667085",
        textLightGray: "#9295A4",
      },
      fontSize: {
        heading: ["18px", { lineHeight: "28px", fontWeight: "500" }], // Tiêu đề lớn, nổi bật
        body: ["18px", { lineHeight: "28px", fontWeight: "400" }], // Nội dung chính
        subtitle: ["18px", { lineHeight: "24px", fontWeight: "400" }], // Phụ đề

        caption: ["14px", { lineHeight: "20px", fontWeight: "400" }], // Chú thích bình thường
        captionBold: ["14px", { lineHeight: "20px", fontWeight: "600" }], // Chú thích đậm

        smallText: ["12px", { lineHeight: "16px", fontWeight: "500" }], // Văn bản nhỏ quan trọng
        smallBody: ["12px", { lineHeight: "20px", fontWeight: "400" }], // Văn bản nhỏ bình thường
        smallLight: ["12px", { lineHeight: "16px", fontWeight: "300" }], // Văn bản nhỏ nhẹ
      },
      fontFamily: {
        lexend: ["LexendDeca_400Regular"], // Font Regular
        lexendBold: ["LexendDeca_700Bold"], // Font Bold
      },
    },
  },
  plugins: [],
}