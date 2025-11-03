# Avalco — Peer-to-Peer Payment & Credit Platform  
*Designed and built in 2024 | Demo: [avalco-lp.vercel.app](https://avalco-lp.vercel.app/)*  

---

## 💡 Overview
**Avalco** is a next-generation **peer-to-peer online payment platform**, blending the convenience of PayPal with the flexibility of Klarna.  
It enables private individuals to **pay or receive money in installments**, with **Avalco acting as the credit provider** that manages risk, credit scoring, and payment collection.

Built as a proof-of-concept for a modern **FinTech infrastructure**, Avalco demonstrates how AI-enabled underwriting and modular payment flows can be built with a lean, secure architecture.

> ⚠️ *Note: Only the landing page is hosted publicly for demonstration purposes due to credit and infrastructure costs. The full application (backend and dashboard) remains private.*

---

## 🚀 Core Features
- **Instant P2P Payments:** Secure wallet-to-wallet transactions between verified users.  
- **Buy Now, Pay Later (BNPL):** Avalco offers short-term installment options for private users.  
- **Automated Risk Assessment:** Backend performs credit scoring and payment-limit calculations.  
- **Smart Invoicing:** Auto-generated invoices and payment reminders via email or dashboard.  
- **KYC Integration:** Simulated identity verification flow using mock APIs.  

---

## 🧱 Architecture Overview
Avalco is composed of two main layers:

| Layer | Description | Tech Stack |
|--------|--------------|-------------|
| **Frontend (Web App)** | Responsive user interface for account creation, payments, and credit management. | Next.js, TypeScript, TailwindCSS |
| **Backend (API Layer)** | Handles user authentication, credit scoring logic, and transaction processing. | FastAPI, PostgreSQL, Stripe API, Python |
| **AI / Automation Layer** | Provides rule-based risk analysis and transaction monitoring. | Python, OpenAI API (concept) |
| **Infrastructure** | Containerized deployment with CI/CD pipeline for testing & staging. | Docker, Vercel (frontend), AWS (backend concept) |

---

## 📊 Case Study Summary
> **Objective:** Prototype a scalable BNPL and P2P payment model for private users.  
> **Timeframe:** Q1–Q2 2024 (≈ 200 development hours).  
> **Role:** Full-stack engineer & product architect.  

**Challenges Addressed**
- Integrating peer-to-peer logic with credit management.  
- Designing a secure data model for credit scoring and loan tracking.  
- Creating a modular system that could later connect to real financial APIs.  

**Key Outcomes**
- Functional prototype of a modern payments ecosystem.  
- Modularized backend for transaction flows and credit APIs.  
- Clean, conversion-optimized landing page communicating the concept clearly.  

---

## 🧠 Learnings & Focus Areas
- Building **credit-based systems** with risk control logic.  
- Designing **scalable data models** for payment platforms.  
- Understanding **compliance boundaries** (KYC, AML, data security).  
- Combining **UX simplicity** with complex financial logic under the hood.  

---

## 🖼️ Screenshots
*(Replace with your own visuals)*  
| Landing Page | Payment Flow | Dashboard (private build) |
|---------------|---------------|----------------------------|
| ![](assets/landing.png) | ![](assets/payment.png) | ![](assets/dashboard.png) |

---

## 🔗 Links
- **Landing Page (Public Demo):** [avalco-lp.vercel.app](https://avalco-lp.vercel.app/)  
- **Repository:** *(this repo)*  
- **Status:** Concept / Prototype  

---

## 🧩 Tech Summary
