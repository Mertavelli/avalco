# Avalco – Peer-to-Peer Credit Infrastructure

Avalco is a peer-to-peer consumer credit & payment engine inspired by Klarna & PayPal — but designed for individuals financing each other directly.

The core idea: private BNPL rails for real people — not merchants.

I built Avalco end-to-end as a solo founder / engineer.

---

## Why this exists
Consumer credit products are distribution-constrained.
BNPL is accessible in e-commerce — but not in *human-to-human* transactions.

Avalco abstracts identity, bank connectivity and repayment logic into a simple P2P experience.

---

## What Avalco does
- issue & manage peer-to-peer repayment contracts
- handle payment initiation from connected bank accounts
- execute automated repayment schedules
- manage state: due → paid → delinquent

This is real financial engineering — not just UI.

---

## Tech Stack
| Layer | Tools |
|---|---|
| Frontend | React, Redux |
| Backend | Node.js |
| Banking Rails | FinAPI |
| Data | MongoDB |

---

## Architecture — high level
Client app → Node backend → FinAPI orchestration  
Transaction state machine is stored in MongoDB.

(Realistically shippable to production rails.)

---

## Live
Landing page: https://avalco-lp.vercell.app

---

## Role
Solo built: research → architecture → implementation.

Year built: 2024

---

## What was interesting here
- modeling credit state-machines (immutability + linear flows)
- implementing real bank rails (FinAPI)
- designing UX for commitment / liability transparency

---

## Status
Internal prototype
