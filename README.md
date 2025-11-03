# Avalco

## TL;DR / Elevator
Peer-to-Peer Payment & Consumer Credit.  
Mix aus PayPal + Klarna – aber für Individuals untereinander.

## Problem & Insight
Privatpersonen können kaum “Buy-Now-Pay-Later” untereinander durchführen.  
Der Kredit-Layer existiert nur im B2C Handel – nicht im P2P.

## What this project does
- P2P Payments
- Ratenzahlung zwischen Privatpersonen
- Credit-Layer handled by platform
- Bank account verification + payment initiation via FinAPI

## Technology
| Area | Stack |
| --- | --- |
| Frontend | React, Redux |
| Backend | Node.js |
| AI / LLM | — (none in this project) |
| Infra / Data | MongoDB, FinAPI |

## Architecture (High Level)
Web client → Node backend → FinAPI rails for actual payment orders.  
MongoDB stores user, credit + transaction state.

## Live / Demo
- Landing: https://avalco-lp.vercell.app
(no full demo – payment rails would require real FinAPI production licencing)

## My Role
Built solo (100%).  
Everything: domain modelling → backend → frontend → FinAPI integration.

## Timeline
2024

## Why this was hard / what I learned
- Financial rails modelling (settlement state machines)
- FinAPI integration (sandbox logic, identity + account patterns)
- Compliance constraints / realistic architecture for payments

## Status
Internal MVP / prototype
