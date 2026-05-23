# TaskflowA: AI-Powered Task Management System

TaskflowA is an intelligent task management application designed to help users organize, prioritize, and track their work efficiently. By combining a robust full-stack architecture with AI-driven productivity insights, TaskflowA goes beyond standard to-do lists to offer smart prioritization, deadline risk detection, and personalized productivity scoring.

---

## Key Highlights
This project serves as a comprehensive showcase for:
*   **Full-Stack Architecture:** Seamless integration between a modern React frontend and a robust Enterprise Java backend.
*   **AI Integration:** Practical application of intelligent recommendations, trend analysis, and productivity forecasting.
*   **Secure API Design:** Production-ready REST endpoints protected by stateless authentication.
*   **Data Visualization:** Interactive dashboards that transform raw task metrics into actionable insights.

---

## Tech Stack

### Frontend
*   **React.js** (Single Page Application architecture)
*   **Tailwind CSS** (Utility-first responsive styling)
*   **Axios** (Promise-based HTTP client)
*   **React Router** (Declarative client-side routing)
*   **Recharts / Chart.js** (Interactive data visualizations)

### Backend
*   **Java Spring Boot** (Core application framework)
*   **Spring Security** (Robust authentication and authorization layer)
*   **JWT (JSON Web Tokens)** (Stateless session management)
*   **REST API** (Clean, predictable architectural endpoints)

### Database
*   **MySQL** (Relational data storage, optimized indexing for task querying)

---

## Core Features

### Authentication & Security
*   **User Registration & Secure Login:** Fully validated onboarding flows.
*   **JWT Authentication:** Secure access tokens attached to request headers.
*   **Password Encryption:** Strong cryptographic hashing (BCrypt) before database persistence.
*   **Session Handling:** Route protection on the frontend and explicit security filters on the backend.

### Advanced Task Management
*   **CRUD Operations:** Create, read, update, and delete tasks dynamically.
*   **Organization:** Group tasks by customizable categories and explicit priority levels (Low, Medium, High).
*   **Lifecycle Tracking:** Transition tasks seamlessly from pending to complete.

### AI-Powered Capabilities
*   **Smart Priority Suggestions:** Machine-learning-driven adjustments based on historical habits and approaching deadlines.
*   **Deadline Risk Detection:** Early warning indicators for tasks flagged as "high risk" of missing their due date.
*   **Productivity Scoring:** Dynamic calculation of user efficiency ratings based on daily completion speed.
*   **Recommended Task Order:** An AI-generated, optimized daily schedule to reduce decision fatigue.

### Analytics Dashboard
*   **Task Velocity:** At-a-glance overview of completed vs. pending actions.
*   **Productivity Trends:** Line and bar charts mapping your weekly performance spikes.
*   **Category Distribution:** Visual breakdown of where your time is being spent across projects.

---