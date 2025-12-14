# React Custom Hook – useFetch

## 📌 Project Overview

This project demonstrates the implementation of a **custom React hook (`useFetch`)** that simplifies API data fetching.  
Instead of repeating fetch logic across components, the hook centralizes data fetching, loading state, and error handling into a reusable solution.

The project is built as part of **Task 5: React Custom Hooks** and focuses on clean logic, reusability, and real-world usage.

🔗 **Live Demo:**  
https://react-custom-hooks-task.vercel.app/

---

## 🎯 Objective

The main goal of this project is to create a reusable custom hook that:

• Accepts an API URL as input  
• Fetches data from the given endpoint  
• Manages loading and error states  
• Returns structured outputs that can be easily consumed by any component  

This approach improves code readability and reduces duplication.

---

## ⚙️ Key Features

• Custom hook named `useFetch`  
• Accepts dynamic API URLs  
• Handles loading state smoothly  
• Handles network and fetch errors  
• Returns clean structured data  
• Easily reusable across components  

---

## 🧠 How It Works

The `useFetch` hook internally uses:

• `useState` to store data, loading, and error states  
• `useEffect` to trigger API calls on URL change  
• `useCallback` to optimize fetch logic  

A React component consumes this hook and renders UI based on returned values.

---

## 🔍 API Used

The project uses a dummy public API for testing and demonstration:

https://api.escuelajs.co/api/v1/products

This API returns product data which is displayed dynamically on the UI.

---

## 🎨 UI & Styling

• Simple and clean UI  
• Loading indicator while data is being fetched  
• Error message shown if API fails  
• Responsive layout  

The UI focuses on clarity rather than heavy design.

---

## 🚀 Deployment

The project is deployed and publicly accessible using a cloud hosting platform.

🔗 Live Project Link:  
https://react-custom-hooks-task.vercel.app/

---

## 🧪 Testing Considerations

• Tested with valid API URLs  
• Tested loading state behavior  
• Tested error handling by passing invalid URLs  
• Verified component reusability  

---

## 📝 Summary

This project showcases how custom hooks can significantly improve React code quality by abstracting repetitive logic into reusable functions.  
The `useFetch` hook can be extended further for pagination, caching, or authorization headers.

---

## 👤 Author

**Aditya Nanda**  
B.Tech CSE  
KIIT University  

---

⭐ If you find this project useful, feel free to star the repository.
