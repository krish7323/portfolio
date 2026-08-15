# Recruiter Responses — Krishna Chandra Jha

## Question from Holo2go (Scott Ownbey):
> *"Provide an example of a web application that you've built and what technologies were used to build it. What considerations did you make when deciding on the tech stack to use?"*

---

### Copy-Paste Answer:

```text
Hi Scott,

One of the full-stack web applications I built and deployed is "Viz Travels" — a tour and travel booking platform equipped with user booking flows, an Admin Panel for user/tour management, and a Vendor Panel for partner listings.

Technologies Used:
- Frontend: React.js, Tailwind CSS, HTML5/CSS3
- Backend: Node.js, Express.js (Service-Controller-Route architecture)
- Database: MongoDB
- Security & Payments: Razorpay Payment Gateway (Order creation & signature verification) and OTP-based authentication.

Tech Stack Considerations & Rationale:
1. React.js for Frontend: I chose React for its modular component architecture, smooth state management across multi-step booking forms, and responsive rendering for multi-role panels (User, Admin, Vendor).
2. Node.js & Express.js for Backend: Selected for its non-blocking asynchronous event loop, enabling fast handling of concurrent API endpoints like booking creations and payment validations.
3. MongoDB (NoSQL) for Database: Chosen for its flexible document model, which effortlessly stores complex, nested data structures such as dynamic tour itineraries, pricing tiers, and vendor profile schemas without requiring heavy SQL schema migration overhead.
4. Security & API Architecture: Structured with clear controller-service separation to keep payment verification logic secure and maintainable.

Best regards,
Krishna Chandra Jha
https://github.com/krish7323
```
